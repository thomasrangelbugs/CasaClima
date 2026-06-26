const VAULT_CRYPTO_KEY = "casaclima-vault-encrypted";
const VAULT_SALT_KEY = "casaclima-vault-salt";
const PBKDF2_ITERATIONS = 210000;

const vaultRuntime = {
  unlocked: false,
  derivedKey: null,
  encrypting: false
};

function bufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function base64ToBuffer(base64) {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }
  return bytes.buffer;
}

async function deriveVaultKey(password, saltBase64) {
  const encoder = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  );

  return crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: base64ToBuffer(saltBase64),
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256"
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
}

async function encryptVaultPayload(entries, password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const key = await deriveVaultKey(password, bufferToBase64(salt));
  const encoder = new TextEncoder();
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    encoder.encode(JSON.stringify(entries))
  );

  return {
    salt: bufferToBase64(salt),
    iv: bufferToBase64(iv),
    data: bufferToBase64(ciphertext),
    version: 1
  };
}

async function decryptVaultPayload(payload, password) {
  const key = await deriveVaultKey(password, payload.salt);
  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: base64ToBuffer(payload.iv) },
    key,
    base64ToBuffer(payload.data)
  );
  const decoder = new TextDecoder();
  const parsed = JSON.parse(decoder.decode(decrypted));
  return Array.isArray(parsed) ? parsed : [];
}

function isVaultEncrypted() {
  return Boolean(localStorage.getItem(VAULT_CRYPTO_KEY));
}

function hasLegacyPlainVault() {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.vault);
    if (!raw) {
      return false;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0;
  } catch (error) {
    return false;
  }
}

async function loadEncryptedVault(password) {
  const payloadRaw = localStorage.getItem(VAULT_CRYPTO_KEY);
  if (!payloadRaw) {
    return [];
  }

  const payload = JSON.parse(payloadRaw);
  return decryptVaultPayload(payload, password);
}

async function saveEncryptedVault(entries, password) {
  const payload = await encryptVaultPayload(entries, password);
  localStorage.setItem(VAULT_CRYPTO_KEY, JSON.stringify(payload));
  localStorage.setItem(VAULT_SALT_KEY, payload.salt);
  localStorage.removeItem(STORAGE_KEYS.vault);
}

async function migratePlainVaultToEncrypted(password) {
  if (!hasLegacyPlainVault() || isVaultEncrypted()) {
    return false;
  }

  const plain = normalizeVault(loadStorage(STORAGE_KEYS.vault, []));
  await saveEncryptedVault(plain, password);
  return true;
}

function renderVaultGate() {
  const gate = document.getElementById("vaultGate");
  const workspace = document.getElementById("vaultWorkspace");
  if (!gate || !workspace) {
    return;
  }

  if (vaultRuntime.unlocked) {
    gate.hidden = true;
    workspace.hidden = false;
    return;
  }

  gate.hidden = false;
  workspace.hidden = true;
}

async function unlockVaultWithPassword(password) {
  if (!password || password.length < 6) {
    showToast("Use uma senha mestra com pelo menos 6 caracteres.", "warning");
    return false;
  }

  try {
    if (hasLegacyPlainVault() && !isVaultEncrypted()) {
      await migratePlainVaultToEncrypted(password);
    }

    const entries = isVaultEncrypted() ? await loadEncryptedVault(password) : [];
    vaultRuntime.derivedKey = password;
    vaultRuntime.unlocked = true;
    state.vault = normalizeVault(entries);
    renderVaultGate();
    renderVaultList();
    showToast("Cofre desbloqueado.", "success");
    return true;
  } catch (error) {
    showToast("Senha mestra incorreta ou cofre corrompido.", "warning");
    return false;
  }
}

async function persistVaultSecure() {
  if (!vaultRuntime.unlocked || !vaultRuntime.derivedKey) {
    saveStorage(STORAGE_KEYS.vault, state.vault);
    return;
  }

  await saveEncryptedVault(state.vault, vaultRuntime.derivedKey);
}

function initVaultCrypto() {
  if (!pageFeatures.vault) {
    return;
  }

  renderVaultGate();

  const unlockForm = document.getElementById("vaultUnlockForm");
  const setupForm = document.getElementById("vaultSetupForm");
  const lockButton = document.getElementById("vaultLockButton");

  unlockForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = document.getElementById("vaultMasterPassword");
    await unlockVaultWithPassword(input?.value || "");
    if (input) {
      input.value = "";
    }
  });

  setupForm?.addEventListener("submit", async (event) => {
    event.preventDefault();
    const password = document.getElementById("vaultSetupPassword")?.value || "";
    const confirm = document.getElementById("vaultSetupConfirm")?.value || "";

    if (password !== confirm) {
      showToast("As senhas não coincidem.", "warning");
      return;
    }

    await saveEncryptedVault([], password);
    vaultRuntime.derivedKey = password;
    vaultRuntime.unlocked = true;
    state.vault = [];
    renderVaultGate();
    renderVaultList();
    showToast("Cofre protegido criado.", "success");
    setupForm.reset();
  });

  lockButton?.addEventListener("click", () => {
    vaultRuntime.unlocked = false;
    vaultRuntime.derivedKey = null;
    state.visiblePasswords.clear();
    state.vault = [];
    renderVaultGate();
    showToast("Cofre bloqueado.", "success");
  });
}

window.initVaultCrypto = initVaultCrypto;
window.persistVaultSecure = persistVaultSecure;
window.isVaultEncrypted = isVaultEncrypted;
window.vaultRuntime = vaultRuntime;
