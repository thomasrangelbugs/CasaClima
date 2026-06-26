function handleVaultSubmit(event) {
  event.preventDefault();

  const entry = {
    id: uid(),
    service: refs.vaultServiceInput.value.trim(),
    username: refs.vaultUsernameInput.value.trim(),
    password: refs.vaultPasswordInput.value.trim(),
    url: refs.vaultUrlInput.value.trim(),
    notes: refs.vaultNotesInput.value.trim()
  };

  if (!entry.service || !entry.username || !entry.password) {
    showToast("Serviço, login e senha são obrigatórios.", "warning");
    return;
  }

  if (typeof vaultRuntime !== "undefined" && !vaultRuntime.unlocked && typeof isVaultEncrypted === "function" && isVaultEncrypted()) {
    showToast("Desbloqueie o cofre antes de salvar.", "warning");
    return;
  }

  state.vault.unshift(entry);

  if (typeof persistVaultSecure === "function") {
    persistVaultSecure();
  } else {
    saveStorage(STORAGE_KEYS.vault, state.vault);
  }

  refs.vaultForm.reset();
  renderVaultList();
  showToast("Acesso salvo no navegador.", "success");
}

function renderVaultList() {
  const filter = refs.vaultFilterInput.value.trim().toLowerCase();
  const entries = state.vault.filter((item) => {
    if (!filter) {
      return true;
    }
    return item.service.toLowerCase().includes(filter);
  });

  if (!entries.length) {
    refs.vaultList.innerHTML = '<p class="hint">Nenhum acesso salvo para esse filtro.</p>';
    return;
  }

  refs.vaultList.innerHTML = entries
    .map((entry) => {
      const isVisible = state.visiblePasswords.has(entry.id);
      return `
        <article class="vault-card" data-id="${entry.id}">
          <div class="vault-card__header">
            <div>
              <h4>${escapeHtml(entry.service)}</h4>
              <div class="vault-meta">
                <span>Login: ${escapeHtml(entry.username)}</span>
              </div>
            </div>
            ${
              entry.url
                ? `<a class="button ghost slim" href="${escapeAttribute(entry.url)}" target="_blank" rel="noopener noreferrer">Abrir</a>`
                : ""
            }
          </div>
          <div class="vault-meta">
            <span>Senha: ${escapeHtml(isVisible ? entry.password : "********")}</span>
          </div>
          <p class="hint">${escapeHtml(entry.notes || "Sem observações.")}</p>
          <div class="vault-actions">
            <button class="button secondary slim" type="button" data-action="toggle-secret" data-id="${entry.id}">
              ${isVisible ? "Ocultar" : "Mostrar"}
            </button>
            <button class="button ghost slim" type="button" data-action="copy-login" data-id="${entry.id}">Copiar login</button>
            <button class="button ghost slim" type="button" data-action="copy-password" data-id="${entry.id}">Copiar senha</button>
            <button class="button ghost slim" type="button" data-action="remove-vault" data-id="${entry.id}">Excluir</button>
          </div>
        </article>
      `;
    })
    .join("");
}

async function handleVaultActions(event) {
  const button = event.target.closest("button[data-action]");
  if (!button) {
    return;
  }

  const entry = state.vault.find((item) => item.id === button.dataset.id);
  if (!entry) {
    return;
  }

  if (button.dataset.action === "toggle-secret") {
    if (state.visiblePasswords.has(entry.id)) {
      state.visiblePasswords.delete(entry.id);
    } else {
      state.visiblePasswords.add(entry.id);
    }
    renderVaultList();
    return;
  }

  if (button.dataset.action === "copy-login") {
    try {
      await copyToClipboard(entry.username);
      showToast("Login copiado.", "success");
    } catch (error) {
      showToast("Não foi possível copiar o login.", "warning");
    }
    return;
  }

  if (button.dataset.action === "copy-password") {
    try {
      await copyToClipboard(entry.password);
      showToast("Senha copiada.", "success");
    } catch (error) {
      showToast("Não foi possível copiar a senha.", "warning");
    }
    return;
  }

  if (button.dataset.action === "remove-vault") {
    state.vault = state.vault.filter((item) => item.id !== entry.id);
    if (typeof persistVaultSecure === "function") {
      await persistVaultSecure();
    } else {
      saveStorage(STORAGE_KEYS.vault, state.vault);
    }
    state.visiblePasswords.delete(entry.id);
    renderVaultList();
    showToast("Acesso removido.", "success");
  }
}
