const SYNC_CONFIG_KEY = "casaclima-sync-config";

const syncState = {
  client: null,
  enabled: false
};

async function initSupabaseSync() {
  let config = null;
  try {
    config = JSON.parse(localStorage.getItem(SYNC_CONFIG_KEY) || "null");
  } catch (error) {
    config = null;
  }

  const url = config?.url;
  const key = config?.anonKey;

  if (!url || !key) {
    return;
  }

  try {
    const module = await import("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.49.1/+esm");
    syncState.client = module.createClient(url, key);
    syncState.enabled = true;

    const panel = document.getElementById("syncPanel");
    if (panel) {
      panel.hidden = false;
    }
  } catch (error) {
    // Sync opcional.
  }
}

async function pushLocalSnapshot() {
  if (!syncState.enabled || !syncState.client) {
    showToast("Sincronização não configurada.", "warning");
    return;
  }

  const payload = {
  user_id: "local-device",
    budget: state.budget,
    tasks: state.tasks,
    contacts: state.contacts,
    notes: state.notes,
    updated_at: new Date().toISOString()
  };

  const { error } = await syncState.client.from("casaclima_snapshots").upsert(payload);
  if (error) {
    showToast("Falha ao sincronizar com a nuvem.", "warning");
    return;
  }

  showToast("Dados enviados para sincronização.", "success");
}

function initSyncUi() {
  document.getElementById("syncPushButton")?.addEventListener("click", () => {
    pushLocalSnapshot().catch(() => showToast("Erro de sincronização.", "warning"));
  });

  document.getElementById("syncConfigForm")?.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = document.getElementById("syncUrlInput")?.value?.trim();
    const anonKey = document.getElementById("syncKeyInput")?.value?.trim();
    if (!url || !anonKey) {
      return;
    }
    localStorage.setItem(SYNC_CONFIG_KEY, JSON.stringify({ url, anonKey }));
    initSupabaseSync();
    showToast("Credenciais Supabase salvas.", "success");
  });
}

function initSync() {
  initSyncUi();
  initSupabaseSync().catch(() => {
    // Sync opcional.
  });
}

window.initSync = initSync;
