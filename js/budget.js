const budgetRuntime = {
  activeTab: "entries",
  initialized: false
};

function initBudgetPage() {
  if (budgetRuntime.initialized) {
    return;
  }

  refs.budgetTabBar?.addEventListener("click", handleBudgetTabClick);
  budgetRuntime.initialized = true;
  setBudgetTab(budgetRuntime.activeTab);
}

function handleBudgetTabClick(event) {
  const button = event.target.closest("[data-budget-tab-button]");
  if (!button) {
    return;
  }

  setBudgetTab(button.dataset.budgetTabButton || "entries");
}

function setBudgetTab(tabKey) {
  budgetRuntime.activeTab = tabKey === "dashboard" ? "dashboard" : "entries";

  document.querySelectorAll("[data-budget-tab-button]").forEach((button) => {
    const isActive = button.dataset.budgetTabButton === budgetRuntime.activeTab;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
    button.tabIndex = isActive ? 0 : -1;
  });

  document.querySelectorAll("[data-budget-tab-panel]").forEach((panel) => {
    const isActive = panel.dataset.budgetTabPanel === budgetRuntime.activeTab;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

function renderExpenseGrid() {
  if (!refs.expenseGrid) {
    return;
  }

  if (!state.budget.categories.length) {
    refs.expenseGrid.innerHTML =
      '<p class="hint">Use categorias só quando quiser detalhar além das contas fixas e dos lançamentos variáveis.</p>';
    return;
  }

  refs.expenseGrid.innerHTML = state.budget.categories
    .map(
      (category) => `
        <article class="expense-card" data-id="${category.id}">
          <div class="expense-card__header">
            <div>
              <span class="budget-badge">${escapeHtml(formatCategoryKindLabel(category.kind))}</span>
              <h3>${escapeHtml(category.title || "Nova categoria")}</h3>
              <p>Campo opcional para detalhar gastos que merecem leitura própria.</p>
            </div>
            <button class="icon-button" type="button" data-action="remove-category" data-id="${category.id}" aria-label="Remover categoria">x</button>
          </div>
          <div class="expense-card__grid">
            <label class="field">
              <span>Nome da categoria</span>
              <input
                type="text"
                data-id="${category.id}"
                data-field="title"
                value="${escapeAttribute(category.title)}"
                placeholder="Ex.: mercado do mês"
              >
            </label>
            <label class="field">
              <span>Tipo</span>
              <select data-id="${category.id}" data-field="kind">
                <option value="fixed" ${category.kind === "fixed" ? "selected" : ""}>Fixa</option>
                <option value="variable" ${category.kind !== "fixed" ? "selected" : ""}>Variável</option>
              </select>
            </label>
            <label class="field">
              <span>Valor mensal</span>
              <input
                type="text"
                inputmode="decimal"
                data-id="${category.id}"
                data-field="value"
                value="${escapeAttribute(category.value)}"
                placeholder="0,00"
              >
            </label>
            <label class="field field--span">
              <span>Comentário</span>
              <textarea
                rows="3"
                data-id="${category.id}"
                data-field="note"
                placeholder="Contexto opcional para lembrar o que entra nessa categoria."
              >${escapeHtml(category.note)}</textarea>
            </label>
          </div>
        </article>
      `
    )
    .join("");
}

function handleExpenseGridInput(event) {
  const input = event.target;
  const categoryId = input.dataset.id;
  const field = input.dataset.field;

  if (!categoryId || !field) {
    return;
  }

  const category = state.budget.categories.find((entry) => entry.id === categoryId);
  if (!category) {
    return;
  }

  if (field === "kind") {
    category.kind = input.value === "fixed" ? "fixed" : "variable";
  } else {
    category[field] = input.value;
  }

  persistBudget(field !== "note");
  if (field === "kind") {
    renderExpenseGrid();
  }
}

function handleExpenseGridClick(event) {
  const button = event.target.closest('[data-action="remove-category"]');
  if (!button) {
    return;
  }

  state.budget.categories = state.budget.categories.filter((category) => category.id !== button.dataset.id);
  persistBudget(false);
  renderExpenseGrid();
}

function renderExtraExpenses() {
  if (!refs.extraExpensesList) {
    return;
  }

  if (!state.budget.extras.length) {
    refs.extraExpensesList.innerHTML =
      '<p class="hint">Nenhum lançamento variável ainda. Use este bloco para compras, saídas, delivery e imprevistos.</p>';
    return;
  }

  refs.extraExpensesList.innerHTML = state.budget.extras
    .map(
      (item) => `
        <div class="list-row" data-id="${item.id}">
          <label class="field">
            <span>Descrição</span>
            <input type="text" data-field="title" value="${escapeAttribute(item.title)}" placeholder="Ex.: farmácia, delivery, feira">
          </label>
          <label class="field">
            <span>Valor</span>
            <input type="text" inputmode="decimal" data-field="amount" value="${escapeAttribute(item.amount)}" placeholder="0,00">
          </label>
          <label class="field">
            <span>Observação</span>
            <input type="text" data-field="note" value="${escapeAttribute(item.note)}" placeholder="Ex.: compra pontual, fim de semana">
          </label>
          <button class="icon-button" type="button" data-action="remove-extra" data-id="${item.id}" aria-label="Remover item">
            x
          </button>
        </div>
      `
    )
    .join("");
}

function handleExtraExpenseInput(event) {
  const row = event.target.closest("[data-id]");
  if (!row) {
    return;
  }

  const item = state.budget.extras.find((entry) => entry.id === row.dataset.id);
  if (!item) {
    return;
  }

  item[event.target.dataset.field] = event.target.value;
  persistBudget(event.target.dataset.field !== "note");
}

function handleExtraExpenseClick(event) {
  const button = event.target.closest('[data-action="remove-extra"]');
  if (!button) {
    return;
  }

  state.budget.extras = state.budget.extras.filter((item) => item.id !== button.dataset.id);
  persistBudget(false);
  renderExtraExpenses();
}

function renderBills() {
  if (!refs.billList) {
    return;
  }

  if (!state.budget.bills.length) {
    refs.billList.innerHTML =
      '<p class="hint">Nenhuma conta fixa cadastrada. Adicione as contas recorrentes que precisam aparecer todo mês.</p>';
    return;
  }

  refs.billList.innerHTML = state.budget.bills
    .map(
      (bill) => `
        <div class="list-row bill-row ${bill.preset ? "bill-row--preset" : ""}" data-id="${bill.id}">
          ${
            bill.preset
              ? `
                <div class="bill-row__label">
                  <strong>${escapeHtml(bill.title || "Conta fixa")}</strong>
                  <span>Conta básica pré-cadastrada</span>
                </div>
              `
              : `
                <label class="field">
                  <span>Conta</span>
                  <input type="text" data-field="title" value="${escapeAttribute(bill.title)}" placeholder="Nome da conta">
                </label>
              `
          }
          <label class="field field--compact">
            <span>Vence dia</span>
            <input type="number" min="1" max="31" data-field="dueDay" value="${escapeAttribute(bill.dueDay)}" placeholder="10">
          </label>
          <label class="field field--compact">
            <span>Valor</span>
            <input type="text" inputmode="decimal" data-field="amount" value="${escapeAttribute(bill.amount)}" placeholder="0,00">
          </label>
          <label class="field">
            <span>Observação</span>
            <input type="text" data-field="note" value="${escapeAttribute(bill.note)}" placeholder="Ex.: costuma variar, pagar por débito">
          </label>
          <button class="icon-button" type="button" data-action="remove-bill" data-id="${bill.id}" aria-label="Remover conta">
            x
          </button>
        </div>
      `
    )
    .join("");
}

function handleBillInput(event) {
  const row = event.target.closest("[data-id]");
  if (!row) {
    return;
  }

  const bill = state.budget.bills.find((entry) => entry.id === row.dataset.id);
  if (!bill) {
    return;
  }

  bill[event.target.dataset.field] = event.target.value;
  persistBudget(false);
}

function handleBillClick(event) {
  const button = event.target.closest('[data-action="remove-bill"]');
  if (!button) {
    return;
  }

  state.budget.bills = state.budget.bills.filter((bill) => bill.id !== button.dataset.id);
  persistBudget(false);
  renderBills();
}

function persistBudget(updateSummary = true) {
  saveStorage(STORAGE_KEYS.budget, state.budget);
  renderBudgetSummary();

  if (!updateSummary) {
    return;
  }
}

function renderBudgetSummary() {
  const summary = computeBudgetSummary();
  state.budget.totals = {
    fixed: summary.fixed,
    variable: summary.variable,
    balance: summary.balance,
    total: summary.total
  };
  const pendingTasks = typeof countPendingTasks === "function" ? countPendingTasks() : 0;

  setNodeText(refs.totalExpenses, formatMoney(summary.total));
  setNodeText(refs.essentialExpenses, formatMoney(summary.fixed));
  setNodeText(refs.variableExpenses, formatMoney(summary.variable));
  setNodeText(refs.budgetBalance, formatMoney(summary.balance));
  setNodeText(refs.goalCoverage, `${summary.goalCoverage}%`);
  setNodeText(refs.commitmentValue, `${summary.commitment}%`);
  if (refs.commitmentMeter) {
    refs.commitmentMeter.style.width = `${Math.min(summary.commitment, 100)}%`;
  }
  setNodeText(refs.budgetInsight, summary.insight);
  setNodeText(refs.nextBillText, summary.nextBillText);
  setNodeText(refs.summaryBalance, formatMoney(summary.balance));
  setNodeText(refs.summaryNextBill, summary.nextBillShort);
  setNodeText(refs.summaryTasks, `${pendingTasks} pendente(s)`);
  setNodeText(refs.budgetQuickBalance, formatMoney(summary.balance));
  setNodeText(refs.budgetQuickNextBill, summary.nextBillShort);
  setNodeText(
    refs.budgetNotesPreview,
    state.budget.notes || "Sem observações registradas. Use este espaço para lembretes e ajustes do próximo mês."
  );

  renderBudgetDashboardList(refs.fixedDashboardList, buildFixedDashboardItems(), "Nenhuma conta fixa pronta para leitura.");
  renderBudgetDashboardList(
    refs.variableDashboardList,
    buildVariableDashboardItems(),
    "Nenhum lançamento variável registrado neste mês."
  );
  renderBudgetDashboardList(
    refs.categoryDashboardList,
    buildCategoryDashboardItems(),
    "Nenhuma categoria opcional criada."
  );

  if (typeof renderHomeTips === "function" && typeof buildHomeTips === "function") {
    if (!state.weatherInfo) {
      renderHomeTips(buildHomeTips());
    } else {
      renderHomeTips(
        buildHomeTips({
          scene: state.weatherInfo.scene,
          stormRisk: state.weatherInfo.stormRisk,
          isWindy: state.weatherInfo.isWindy,
          windSpeed: state.weatherInfo.windSpeed,
          rainChance: state.weatherInfo.rainChance,
          temperatureMood: state.weatherInfo.temperatureMood,
          season: state.weatherInfo.season
        })
      );
    }
  }
}

function computeBudgetSummary() {
  const income = parseMoney(state.budget.income);
  const savingsGoal = parseMoney(state.budget.savingsGoal);
  const fixedCategoryTotal = state.budget.categories.reduce((accumulator, category) => {
    if (category.kind !== "fixed") {
      return accumulator;
    }
    return accumulator + parseMoney(category.value);
  }, 0);
  const variableCategoryTotal = state.budget.categories.reduce((accumulator, category) => {
    if (category.kind === "fixed") {
      return accumulator;
    }
    return accumulator + parseMoney(category.value);
  }, 0);
  const billsTotal = state.budget.bills.reduce((accumulator, bill) => {
    return accumulator + parseMoney(bill.amount);
  }, 0);
  const extrasTotal = state.budget.extras.reduce((accumulator, item) => {
    return accumulator + parseMoney(item.amount);
  }, 0);
  const fixed = billsTotal + fixedCategoryTotal;
  const variable = extrasTotal + variableCategoryTotal;
  const total = fixed + variable;
  const balance = income - total;
  const commitment = income > 0 ? Math.round((total / income) * 100) : 0;
  const goalCoverage =
    savingsGoal > 0 && balance > 0 ? Math.min(100, Math.round((balance / savingsGoal) * 100)) : 0;
  const nextBill = getNextBill();
  const hasBillRows = state.budget.bills.some((bill) => bill.title.trim());

  let insight = "Comece pela renda, revise as contas fixas pré-cadastradas e depois lance só o que variar no mês.";
  if (income > 0 && total === 0) {
    insight = "A base do mês já foi definida. Agora preencha as contas fixas e os gastos variáveis para enxergar o saldo livre.";
  } else if (balance < 0) {
    insight = `Atenção: os gastos passam da renda em ${formatMoney(Math.abs(balance))}. Vale rever contas fixas, categorias e extras antes de avançar no mês.`;
  } else if (commitment >= 85) {
    insight = "O comprometimento da renda está alto. Priorize despesas fixas essenciais e corte variáveis com menor impacto.";
  } else if (savingsGoal > 0 && balance >= savingsGoal) {
    insight = "A meta de reserva cabe no mês. Se puder, separe esse valor logo depois de pagar as contas fixas.";
  } else if (income > 0) {
    insight = `Saldo livre atual de ${formatMoney(balance)}. O painel já mostra o quanto está preso em fixas e o que ainda está variável no mês.`;
  }

  return {
    income,
    savingsGoal,
    billsTotal,
    fixedCategoryTotal,
    variableCategoryTotal,
    extrasTotal,
    fixed,
    variable,
    total,
    balance,
    commitment,
    goalCoverage,
    insight,
    nextBill,
    nextBillText: nextBill
      ? `${nextBill.title || "Conta"} vence em ${nextBill.label} com valor de ${formatMoney(parseMoney(nextBill.amount))}.`
      : hasBillRows
        ? "Preencha o dia de vencimento das contas fixas para destacar o próximo pagamento."
        : "Nenhuma conta fixa cadastrada.",
    nextBillShort: nextBill ? `${nextBill.title || "Conta"} | ${nextBill.label}` : "Sem vencimento"
  };
}

function getNextBill() {
  const today = new Date();
  const entries = state.budget.bills
    .map((bill) => {
      const dueDay = Number(bill.dueDay);
      if (!dueDay || dueDay < 1 || dueDay > 31 || !bill.title.trim()) {
        return null;
      }

      const currentMonthDate = buildSafeDate(today.getFullYear(), today.getMonth(), dueDay);
      const dueDate =
        currentMonthDate >= stripTime(today)
          ? currentMonthDate
          : buildSafeDate(today.getFullYear(), today.getMonth() + 1, dueDay);

      return {
        ...bill,
        dueDate,
        daysUntil: Math.round((stripTime(dueDate) - stripTime(today)) / 86400000),
        label: formatBillDate(dueDate)
      };
    })
    .filter(Boolean)
    .sort((first, second) => first.dueDate - second.dueDate);

  return entries[0] || null;
}

function renderBudgetDashboardList(node, items, emptyText) {
  if (!node) {
    return;
  }

  if (!items.length) {
    node.innerHTML = `<li class="budget-dashboard-list__empty">${escapeHtml(emptyText)}</li>`;
    return;
  }

  node.innerHTML = items
    .map(
      (item) => `
        <li>
          <div>
            <strong>${escapeHtml(item.title)}</strong>
            <span>${escapeHtml(item.meta)}</span>
          </div>
          <em>${escapeHtml(item.value)}</em>
        </li>
      `
    )
    .join("");
}

function buildFixedDashboardItems() {
  return state.budget.bills
    .filter((bill) => bill.title.trim() || bill.amount.trim() || bill.note.trim())
    .map((bill) => {
      const meta = [];
      if (bill.dueDay) {
        meta.push(`Vence dia ${bill.dueDay}`);
      }
      if (bill.note.trim()) {
        meta.push(bill.note.trim());
      }

      return {
        title: bill.title || "Conta fixa",
        meta: meta.join(" | ") || "Conta recorrente do mês",
        value: formatMoney(parseMoney(bill.amount))
      };
    });
}

function buildVariableDashboardItems() {
  return state.budget.extras
    .filter((item) => item.title.trim() || item.amount.trim() || item.note.trim())
    .map((item) => ({
      title: item.title || "Lançamento variável",
      meta: item.note.trim() || "Sem observação",
      value: formatMoney(parseMoney(item.amount))
    }));
}

function buildCategoryDashboardItems() {
  return state.budget.categories
    .filter((category) => category.title.trim() || category.value.trim() || category.note.trim())
    .map((category) => ({
      title: category.title || "Categoria",
      meta: `${formatCategoryKindLabel(category.kind)}${category.note.trim() ? ` | ${category.note.trim()}` : ""}`,
      value: formatMoney(parseMoney(category.value))
    }));
}

function formatCategoryKindLabel(kind) {
  return kind === "fixed" ? "Despesa fixa" : "Despesa variável";
}

async function exportBudget(format) {
  const summary = computeBudgetSummary();
  const stamp = new Date().toISOString().slice(0, 10);

  try {
    if (format === "txt") {
      downloadBlob(
        new Blob([buildBudgetTextReport(summary)], { type: "text/plain;charset=utf-8" }),
        `casaclima-orcamento-${stamp}.txt`
      );
      showToast("Exportação TXT concluída.", "success");
      return;
    }

    if (format === "word") {
      downloadBlob(
        new Blob([buildBudgetWordReport(summary)], { type: "application/msword" }),
        `casaclima-orcamento-${stamp}.doc`
      );
      showToast("Exportação Word concluída.", "success");
      return;
    }

    if (typeof html2canvas !== "function") {
      showToast("Biblioteca de captura não carregada.", "warning");
      return;
    }

    const canvas = await html2canvas(refs.budgetExportArea, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true
    });

    if (format === "image") {
      canvas.toBlob((blob) => {
        if (!blob) {
          showToast("Falha ao gerar imagem.", "warning");
          return;
        }
        downloadBlob(blob, `casaclima-orcamento-${stamp}.png`);
        showToast("Exportação em imagem concluída.", "success");
      });
      return;
    }

    if (format === "pdf") {
      const jsPDFConstructor = window.jspdf?.jsPDF;
      if (!jsPDFConstructor) {
        showToast("Biblioteca de PDF não carregada.", "warning");
        return;
      }

      const pdf = new jsPDFConstructor("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imageData = canvas.toDataURL("image/png");
      const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
      const width = canvas.width * ratio;
      const height = canvas.height * ratio;
      const marginX = (pageWidth - width) / 2;
      const marginY = 10;
      pdf.addImage(imageData, "PNG", marginX, marginY, width, height);
      pdf.save(`casaclima-orcamento-${stamp}.pdf`);
      showToast("Exportação PDF concluída.", "success");
    }
  } catch (error) {
    showToast("Não foi possível exportar o painel agora.", "warning");
  }
}

function buildBudgetTextReport(summary) {
  const categories = state.budget.categories.length
    ? state.budget.categories
        .map(
          (category) =>
            `- ${category.title || "Categoria"} (${formatCategoryKindLabel(category.kind)}): ${formatMoney(parseMoney(category.value))}${category.note ? ` | ${category.note}` : ""}`
        )
        .join("\n")
    : "- Nenhuma categoria opcional cadastrada.";

  const extras = state.budget.extras.length
    ? state.budget.extras
        .map((item) => `- ${item.title || "Item variável"}: ${formatMoney(parseMoney(item.amount))}${item.note ? ` | ${item.note}` : ""}`)
        .join("\n")
    : "- Nenhum lançamento variável.";

  const bills = state.budget.bills.length
    ? state.budget.bills
        .map(
          (bill) =>
            `- ${bill.title || "Conta"}: dia ${bill.dueDay || "--"} | ${formatMoney(parseMoney(bill.amount))}${bill.note ? ` | ${bill.note}` : ""}`
        )
        .join("\n")
    : "- Nenhuma conta fixa cadastrada.";

  return [
    "CasaClima - Relatório financeiro",
    "",
    `Renda mensal: ${formatMoney(summary.income)}`,
    `Meta de reserva: ${formatMoney(summary.savingsGoal)}`,
    `Total de gastos: ${formatMoney(summary.total)}`,
    `Fixas: ${formatMoney(summary.fixed)}`,
    `Variáveis: ${formatMoney(summary.variable)}`,
    `Saldo livre: ${formatMoney(summary.balance)}`,
    `Comprometimento da renda: ${summary.commitment}%`,
    "",
    "Contas fixas",
    bills,
    "",
    "Despesas variáveis",
    extras,
    "",
    "Categorias opcionais",
    categories,
    "",
    "Observações gerais",
    state.budget.notes || "Sem observações."
  ].join("\n");
}

function buildBudgetWordReport(summary) {
  const listCategories = state.budget.categories.length
    ? state.budget.categories
        .map(
          (category) => `
            <tr>
              <td>${escapeHtml(category.title || "Categoria")}</td>
              <td>${escapeHtml(formatCategoryKindLabel(category.kind))}</td>
              <td>${formatMoney(parseMoney(category.value))}</td>
              <td>${escapeHtml(category.note || "-")}</td>
            </tr>
          `
        )
        .join("")
    : '<tr><td colspan="4">Nenhuma categoria opcional cadastrada.</td></tr>';

  const listExtras = state.budget.extras.length
    ? state.budget.extras
        .map(
          (item) => `
            <tr>
              <td>${escapeHtml(item.title || "Item variável")}</td>
              <td>${formatMoney(parseMoney(item.amount))}</td>
              <td>${escapeHtml(item.note || "-")}</td>
            </tr>
          `
        )
        .join("")
    : '<tr><td colspan="3">Nenhum lançamento variável.</td></tr>';

  const listBills = state.budget.bills.length
    ? state.budget.bills
        .map(
          (bill) => `
            <tr>
              <td>${escapeHtml(bill.title || "Conta")}</td>
              <td>${escapeHtml(String(bill.dueDay || "--"))}</td>
              <td>${formatMoney(parseMoney(bill.amount))}</td>
              <td>${escapeHtml(bill.note || "-")}</td>
            </tr>
          `
        )
        .join("")
    : '<tr><td colspan="4">Nenhuma conta fixa cadastrada.</td></tr>';

  return `
    <html>
      <head>
        <meta charset="UTF-8">
        <title>CasaClima</title>
        <style>
          body { font-family: Arial, sans-serif; color: #173042; padding: 24px; }
          h1, h2 { color: #173042; }
          table { border-collapse: collapse; width: 100%; margin-bottom: 24px; }
          th, td { border: 1px solid #d7e3ef; padding: 8px 10px; text-align: left; }
          .summary { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; margin-bottom: 24px; }
          .card { padding: 12px; border: 1px solid #d7e3ef; border-radius: 12px; }
        </style>
      </head>
      <body>
        <h1>CasaClima - Orçamento da casa</h1>
        <div class="summary">
          <div class="card"><strong>Renda mensal:</strong> ${formatMoney(summary.income)}</div>
          <div class="card"><strong>Meta de reserva:</strong> ${formatMoney(summary.savingsGoal)}</div>
          <div class="card"><strong>Total de gastos:</strong> ${formatMoney(summary.total)}</div>
          <div class="card"><strong>Saldo livre:</strong> ${formatMoney(summary.balance)}</div>
          <div class="card"><strong>Fixas:</strong> ${formatMoney(summary.fixed)}</div>
          <div class="card"><strong>Variáveis:</strong> ${formatMoney(summary.variable)}</div>
        </div>

        <h2>Contas fixas</h2>
        <table>
          <thead>
            <tr><th>Conta</th><th>Dia</th><th>Valor</th><th>Observação</th></tr>
          </thead>
          <tbody>${listBills}</tbody>
        </table>

        <h2>Despesas variáveis</h2>
        <table>
          <thead>
            <tr><th>Descrição</th><th>Valor</th><th>Observação</th></tr>
          </thead>
          <tbody>${listExtras}</tbody>
        </table>

        <h2>Categorias opcionais</h2>
        <table>
          <thead>
            <tr><th>Categoria</th><th>Tipo</th><th>Valor</th><th>Comentário</th></tr>
          </thead>
          <tbody>${listCategories}</tbody>
        </table>

        <h2>Observações gerais</h2>
        <p>${escapeHtml(state.budget.notes || "Sem observações.")}</p>
      </body>
    </html>
  `;
}
