let budgetChartInstance = null;

function loadChartLibrary() {
  if (window.Chart) {
    return Promise.resolve(window.Chart);
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://cdn.jsdelivr.net/npm/chart.js@4.4.8/dist/chart.umd.min.js";
    script.onload = () => resolve(window.Chart);
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

async function renderBudgetChart() {
  const canvas = document.getElementById("budgetChart");
  if (!canvas || !pageFeatures.budget) {
    return;
  }

  const Chart = await loadChartLibrary();
  const fixed = Number(state.budget?.totals?.fixed || 0);
  const variable = Number(state.budget?.totals?.variable || 0);
  const free = Math.max(Number(state.budget?.totals?.balance || 0), 0);

  if (budgetChartInstance) {
    budgetChartInstance.destroy();
  }

  budgetChartInstance = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: ["Fixas", "Variáveis", "Saldo livre"],
      datasets: [
        {
          data: [fixed, variable, free],
          backgroundColor: ["#60a5fa", "#f59e0b", "#34d399"],
          borderWidth: 0
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: { color: "rgba(244,248,255,0.82)" }
        }
      }
    }
  });
}

function patchBudgetCharts() {
  if (!pageFeatures.budget || typeof renderBudgetSummary !== "function") {
    return;
  }

  const original = renderBudgetSummary;
  window.renderBudgetSummary = function renderBudgetSummaryWithChart(...args) {
    original(...args);
    renderBudgetChart().catch(() => {
      // Chart opcional.
    });
  };
}

function initBudgetCharts() {
  patchBudgetCharts();
}

window.initBudgetCharts = initBudgetCharts;
