/** Visual fixo: fundo com fotos reais (sem alternância de tema). */
function initTheme() {
  if (typeof applyEffectiveTheme === "function") {
    applyEffectiveTheme();
  }
}

window.initTheme = initTheme;
