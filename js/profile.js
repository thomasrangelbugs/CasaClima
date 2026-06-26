const PROFILE_STORAGE_KEY = "casaclima-profile";

const profileRefs = {
  form: document.getElementById("profileForm"),
  birthDate: document.getElementById("profileBirthDate"),
  birthTime: document.getElementById("profileBirthTime"),
  height: document.getElementById("profileHeight"),
  weight: document.getElementById("profileWeight"),
  activityHours: document.getElementById("profileActivityHours"),
  profession: document.getElementById("profileProfession"),
  hobby: document.getElementById("profileHobby"),
  resetButton: document.getElementById("profileResetButton"),
  exportActions: document.getElementById("profileExportActions"),
  exportArea: document.getElementById("profileExportArea"),
  summaryLead: document.getElementById("profileSummaryLead"),
  summaryText: document.getElementById("profileSummaryText"),
  astralSun: document.getElementById("astralSun"),
  astralAscendant: document.getElementById("astralAscendant"),
  astralMoon: document.getElementById("astralMoon"),
  astralElement: document.getElementById("astralElement"),
  astralModality: document.getElementById("astralModality"),
  astralTrait: document.getElementById("astralTrait"),
  astralReading: document.getElementById("astralReading"),
  imcValue: document.getElementById("imcValue"),
  imcStatus: document.getElementById("imcStatus"),
  activityProfile: document.getElementById("activityProfile"),
  imcAdvice: document.getElementById("imcAdvice"),
  gymPlan: document.getElementById("gymPlan"),
  outdoorPlan: document.getElementById("outdoorPlan"),
  runPlan: document.getElementById("runPlan"),
  bookSuggestions: document.getElementById("bookSuggestions"),
  dailyQuote: document.getElementById("dailyQuote"),
  dailyReason: document.getElementById("dailyReason")
};

const profileSigns = [
  {
    name: "Áries",
    start: [3, 21],
    end: [4, 19],
    element: "Fogo",
    modality: "Cardinal",
    trait: "iniciativa e coragem",
    reading: "Você tende a agir com rapidez, abrir caminhos e ganhar energia quando sente desafio."
  },
  {
    name: "Touro",
    start: [4, 20],
    end: [5, 20],
    element: "Terra",
    modality: "Fixa",
    trait: "constância e estabilidade",
    reading: "Você rende melhor quando cria ritmo, conforto e metas claras de longo prazo."
  },
  {
    name: "Gêmeos",
    start: [5, 21],
    end: [6, 20],
    element: "Ar",
    modality: "Mutável",
    trait: "curiosidade e adaptação",
    reading: "Sua força aparece quando há movimento, conversa, aprendizado e variedade inteligente."
  },
  {
    name: "Câncer",
    start: [6, 21],
    end: [7, 22],
    element: "Água",
    modality: "Cardinal",
    trait: "sensibilidade e proteção",
    reading: "Você se organiza melhor quando sente segurança emocional e percebe valor real no que faz."
  },
  {
    name: "Leão",
    start: [7, 23],
    end: [8, 22],
    element: "Fogo",
    modality: "Fixa",
    trait: "presença e confiança",
    reading: "Sua energia cresce quando você pode liderar, criar e ver seu esforço reconhecido."
  },
  {
    name: "Virgem",
    start: [8, 23],
    end: [9, 22],
    element: "Terra",
    modality: "Mutável",
    trait: "organização e lapidação",
    reading: "Você evolui muito quando transforma rotina em melhoria contínua, com método e atenção aos detalhes."
  },
  {
    name: "Libra",
    start: [9, 23],
    end: [10, 22],
    element: "Ar",
    modality: "Cardinal",
    trait: "equilíbrio e diplomacia",
    reading: "Seu melhor aparece quando existe harmonia, troca de ideias e escolhas bem ponderadas."
  },
  {
    name: "Escorpião",
    start: [10, 23],
    end: [11, 21],
    element: "Água",
    modality: "Fixa",
    trait: "intensidade e foco",
    reading: "Você tem força para mergulhar fundo, cortar excessos e se reconstruir com consistência."
  },
  {
    name: "Sagitário",
    start: [11, 22],
    end: [12, 21],
    element: "Fogo",
    modality: "Mutável",
    trait: "expansão e visão",
    reading: "Você funciona melhor quando sente liberdade, propósito e espaço para crescer."
  },
  {
    name: "Capricórnio",
    start: [12, 22],
    end: [1, 19],
    element: "Terra",
    modality: "Cardinal",
    trait: "disciplina e estrutura",
    reading: "Sua força aparece no compromisso silencioso, no passo firme e no resultado construído com calma."
  },
  {
    name: "Aquário",
    start: [1, 20],
    end: [2, 18],
    element: "Ar",
    modality: "Fixa",
    trait: "originalidade e visão coletiva",
    reading: "Você cresce quando pode pensar diferente, buscar soluções novas e sair do automático."
  },
  {
    name: "Peixes",
    start: [2, 19],
    end: [3, 20],
    element: "Água",
    modality: "Mutável",
    trait: "intuição e imaginação",
    reading: "Seu melhor surge quando intuição, sensibilidade e significado caminham juntos."
  }
];

const ascendantCycle = [
  "Áries",
  "Touro",
  "Gêmeos",
  "Câncer",
  "Leão",
  "Virgem",
  "Libra",
  "Escorpião",
  "Sagitário",
  "Capricórnio",
  "Aquário",
  "Peixes"
];

const profileQuotes = [
  "Constância vence pressa quando você aparece todos os dias.",
  "Pequenos avanços repetidos mudam mais do que picos de motivação.",
  "O esforço de hoje vira tranquilidade futura.",
  "Disciplina não apaga o sonho; ela dá caminho para ele.",
  "Você não precisa acelerar tudo, só continuar em frente.",
  "Quando a rotina fica firme, o resultado deixa de ser sorte.",
  "Persistir é transformar intenção em presença real.",
  "Seu ritmo pode ser calmo, desde que não pare."
];

const bookLibrary = {
  tecnologia: [
    { title: "Trabalho Focado", reason: "ajuda a render mais com concentração e menos dispersão." },
    { title: "Hábitos Atômicos", reason: "organiza consistência e construção de rotina." },
    { title: "Mindset", reason: "fortalece aprendizado contínuo e evolução prática." }
  ],
  criativo: [
    { title: "Roube como um Artista", reason: "estimula repertório, criação e coragem de publicar." },
    { title: "A Guerra da Arte", reason: "ajuda a lutar contra procrastinação criativa." },
    { title: "Big Magic", reason: "traz leveza para criar sem travar." }
  ],
  pessoas: [
    { title: "Comunicação Não Violenta", reason: "melhora escuta, clareza e relação com os outros." },
    { title: "Como Fazer Amigos e Influenciar Pessoas", reason: "fortalece convivência, conversa e presença." },
    { title: "Inteligência Emocional", reason: "ajuda a responder melhor sob pressão." }
  ],
  movimento: [
    { title: "Nascido para Correr", reason: "dá motivação e visão ampla sobre movimento e corrida." },
    { title: "Essencialismo", reason: "ensina a cortar excesso e focar no que traz resultado." },
    { title: "Por que Nós Dormimos", reason: "mostra como recuperar melhor corpo e mente." }
  ],
  geral: [
    { title: "Hábitos Atômicos", reason: "serve para criar base consistente em qualquer fase." },
    { title: "Essencialismo", reason: "ajuda a simplificar a rotina e escolher melhor." },
    { title: "Mindset", reason: "reforça evolução gradual e aprendizado contínuo." }
  ]
};

const profileState = normalizeProfileState(loadStorage(PROFILE_STORAGE_KEY, null));

function initProfilePage() {
  if (!profileRefs.form) {
    return;
  }

  fillProfileForm(profileState);
  profileRefs.birthDate?.addEventListener("input", handleProfileBirthDateInput);
  profileRefs.birthTime?.addEventListener("input", handleProfileBirthTimeInput);
  profileRefs.form.addEventListener("submit", handleProfileSubmit);
  profileRefs.resetButton?.addEventListener("click", resetProfileForm);
  profileRefs.exportActions?.addEventListener("click", handleProfileExportClick);

  if (hasProfileData(profileState)) {
    renderProfileReport(profileState);
  } else {
    renderProfilePlaceholder();
  }
}

function normalizeProfileState(raw) {
  const source = raw && typeof raw === "object" ? raw : {};
  return {
    birthDate: String(source.birthDate || ""),
    birthTime: String(source.birthTime || ""),
    height: String(source.height || ""),
    weight: String(source.weight || ""),
    activityHours: String(source.activityHours || ""),
    profession: String(source.profession || ""),
    hobby: String(source.hobby || "")
  };
}

function hasProfileData(profile) {
  return Boolean(profile.birthDate && profile.birthTime && profile.height && profile.weight);
}

function fillProfileForm(profile) {
  setNodeValue(profileRefs.birthDate, formatProfileBirthDate(profile.birthDate));
  setNodeValue(profileRefs.birthTime, formatProfileBirthTime(profile.birthTime));
  setNodeValue(profileRefs.height, profile.height);
  setNodeValue(profileRefs.weight, profile.weight);
  setNodeValue(profileRefs.activityHours, profile.activityHours);
  setNodeValue(profileRefs.profession, profile.profession);
  setNodeValue(profileRefs.hobby, profile.hobby);
}

function collectProfileForm() {
  const birthDate = normalizeProfileBirthDate(profileRefs.birthDate?.value || "");
  const birthTime = normalizeProfileBirthTime(profileRefs.birthTime?.value || "");

  return normalizeProfileState({
    birthDate,
    birthTime,
    height: profileRefs.height?.value,
    weight: profileRefs.weight?.value,
    activityHours: profileRefs.activityHours?.value,
    profession: profileRefs.profession?.value,
    hobby: profileRefs.hobby?.value
  });
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const nextState = collectProfileForm();
  if (!nextState.birthDate) {
    showToast("Digite a data no formato dd/mm/aaaa.", "warning");
    profileRefs.birthDate?.focus();
    return;
  }
  if (!nextState.birthTime) {
    showToast("Digite o horário no formato hh:mm.", "warning");
    profileRefs.birthTime?.focus();
    return;
  }
  Object.assign(profileState, nextState);
  saveStorage(PROFILE_STORAGE_KEY, profileState);
  renderProfileReport(profileState);
  showToast("Painel pessoal atualizado.", "success");
}

function resetProfileForm() {
  Object.assign(profileState, normalizeProfileState(null));
  localStorage.removeItem(PROFILE_STORAGE_KEY);
  fillProfileForm(profileState);
  renderProfilePlaceholder();
  showToast("Painel pessoal limpo.", "success");
}

function renderProfilePlaceholder() {
  setNodeText(profileRefs.summaryLead, "Preencha seus dados para gerar a leitura automática.");
  setNodeText(profileRefs.summaryText, "Seu resumo vai aparecer aqui com base nos dados preenchidos.");
  setNodeText(profileRefs.astralSun, "--");
  setNodeText(profileRefs.astralAscendant, "--");
  setNodeText(profileRefs.astralMoon, "--");
  setNodeText(profileRefs.astralElement, "--");
  setNodeText(profileRefs.astralModality, "--");
  setNodeText(profileRefs.astralTrait, "--");
  setNodeText(profileRefs.astralReading, "A leitura astral aparece aqui depois de gerar seu painel.");
  setNodeText(profileRefs.imcValue, "--");
  setNodeText(profileRefs.imcStatus, "--");
  setNodeText(profileRefs.activityProfile, "--");
  setNodeText(profileRefs.imcAdvice, "As orientações aparecem aqui depois do cálculo.");
  renderProfileList(profileRefs.gymPlan, []);
  renderProfileList(profileRefs.outdoorPlan, []);
  renderProfileList(profileRefs.runPlan, []);
  renderProfileList(profileRefs.bookSuggestions, []);
  setNodeText(profileRefs.dailyQuote, "Sua frase do dia aparece aqui.");
  setNodeText(profileRefs.dailyReason, "O motivo para continuar também será gerado automaticamente.");
}

function renderProfileReport(profile) {
  const report = buildProfileReport(profile);

  setNodeText(profileRefs.summaryLead, report.summaryLead);
  setNodeText(profileRefs.summaryText, report.summaryText);
  setNodeText(profileRefs.astralSun, report.sunSign.name);
  setNodeText(profileRefs.astralAscendant, report.ascendant);
  setNodeText(profileRefs.astralMoon, report.moonPhase.label);
  setNodeText(profileRefs.astralElement, report.sunSign.element);
  setNodeText(profileRefs.astralModality, report.sunSign.modality);
  setNodeText(profileRefs.astralTrait, report.sunSign.trait);
  setNodeText(profileRefs.astralReading, report.astralReading);
  setNodeText(profileRefs.imcValue, report.imc.valueLabel);
  setNodeText(profileRefs.imcStatus, report.imc.status);
  setNodeText(profileRefs.activityProfile, report.activity.label);
  setNodeText(profileRefs.imcAdvice, report.imc.advice);
  setNodeText(profileRefs.dailyQuote, report.dailyQuote);
  setNodeText(profileRefs.dailyReason, report.dailyReason);

  renderProfileList(profileRefs.gymPlan, report.gymPlan);
  renderProfileList(profileRefs.outdoorPlan, report.outdoorPlan);
  renderProfileList(profileRefs.runPlan, report.runPlan);
  renderProfileList(profileRefs.bookSuggestions, report.books);
}

function handleProfileExportClick(event) {
  const button = event.target.closest("[data-profile-export]");
  if (!button) {
    return;
  }
  exportProfileReport(button.dataset.profileExport);
}

function handleProfileBirthDateInput(event) {
  event.target.value = formatDateMask(event.target.value);
}

function handleProfileBirthTimeInput(event) {
  event.target.value = formatTimeMask(event.target.value);
}

function formatDateMask(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 8);
  const parts = [];
  if (digits.slice(0, 2)) {
    parts.push(digits.slice(0, 2));
  }
  if (digits.slice(2, 4)) {
    parts.push(digits.slice(2, 4));
  }
  if (digits.slice(4, 8)) {
    parts.push(digits.slice(4, 8));
  }
  return parts.join("/");
}

function formatTimeMask(value) {
  const digits = String(value || "").replace(/\D/g, "").slice(0, 4);
  if (digits.length <= 2) {
    return digits;
  }
  return `${digits.slice(0, 2)}:${digits.slice(2, 4)}`;
}

function normalizeProfileBirthDate(value) {
  const match = String(value || "").trim().match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  if (!match) {
    return "";
  }

  const day = Number(match[1]);
  const month = Number(match[2]);
  const year = Number(match[3]);
  if (month < 1 || month > 12 || day < 1 || day > 31 || year < 1900 || year > 2100) {
    return "";
  }

  const candidate = new Date(year, month - 1, day);
  if (
    candidate.getFullYear() !== year ||
    candidate.getMonth() !== month - 1 ||
    candidate.getDate() !== day
  ) {
    return "";
  }

  return `${String(year).padStart(4, "0")}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function normalizeProfileBirthTime(value) {
  const match = String(value || "").trim().match(/^(\d{2}):(\d{2})$/);
  if (!match) {
    return "";
  }

  const hour = Number(match[1]);
  const minute = Number(match[2]);
  if (hour < 0 || hour > 23 || minute < 0 || minute > 59) {
    return "";
  }

  return `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function formatProfileBirthDate(value) {
  const match = String(value || "").match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) {
    return formatDateMask(value);
  }
  return `${match[3]}/${match[2]}/${match[1]}`;
}

function formatProfileBirthTime(value) {
  const match = String(value || "").match(/^(\d{2}):(\d{2})$/);
  if (!match) {
    return formatTimeMask(value);
  }
  return `${match[1]}:${match[2]}`;
}

function renderProfileList(node, items) {
  if (!node) {
    return;
  }

  if (!items.length) {
    node.innerHTML = '<li class="profile-list__empty">Preencha o formulário para gerar esta parte.</li>';
    return;
  }

  node.innerHTML = items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function buildProfileReport(profile) {
  const birthDate = new Date(`${profile.birthDate}T12:00:00`);
  const age = computeAge(birthDate);
  const sunSign = resolveSunSign(birthDate);
  const ascendant = resolveAscendant(profile.birthTime);
  const moonPhase = resolveBirthMoonPhase(birthDate);
  const imc = resolveImc(profile.height, profile.weight);
  const activity = resolveActivityProfile(profile.activityHours);
  const books = buildBookSuggestions(profile, sunSign, activity);
  const dailyQuote = resolveDailyQuote(profile.birthDate);
  const dailyReason = buildPersistenceReason(profile, sunSign, activity, imc);
  const professionLabel = cleanLocationPart(profile.profession) || "sua rotina";
  const hobbyLabel = cleanLocationPart(profile.hobby) || "algo que te faz bem";

  return {
    age,
    sunSign,
    ascendant,
    moonPhase,
    imc,
    activity,
    books,
    summaryLead: `${sunSign.name} com ascendente estimado em ${ascendant}`,
    summaryText: `Com ${age} ano(s), sua leitura atual mistura ${sunSign.trait} com foco em ${professionLabel}. Seu hobby de ${hobbyLabel} ajuda a equilibrar energia e constância.`,
    astralReading: `${sunSign.reading} O ascendente estimado em ${ascendant} mostra como você tende a se apresentar ao mundo, enquanto a lua de nascimento em ${moonPhase.label.toLowerCase()} reforça ${moonPhase.trait}.`,
    gymPlan: buildGymPlan(profile, imc, activity),
    outdoorPlan: buildOutdoorPlan(profile, imc, activity),
    runPlan: buildRunPlan(profile, imc, activity),
    dailyQuote,
    dailyReason
  };
}

async function exportProfileReport(format) {
  if (!hasProfileData(profileState)) {
    showToast("Preencha seus dados antes de exportar.", "warning");
    return;
  }

  const report = buildProfileReport(profileState);
  const stamp = new Date().toISOString().slice(0, 10);

  try {
    if (format === "txt") {
      downloadBlob(
        new Blob([buildProfileTextReport(report)], { type: "text/plain;charset=utf-8" }),
        `casaclima-perfil-${stamp}.txt`
      );
      showToast("Exportação TXT concluída.", "success");
      return;
    }

    if (format === "word") {
      downloadBlob(
        new Blob([buildProfileWordReport(report)], { type: "application/msword" }),
        `casaclima-perfil-${stamp}.doc`
      );
      showToast("Exportação Word concluída.", "success");
      return;
    }

    if (format === "image" || format === "pdf") {
      if (typeof html2canvas !== "function") {
        showToast("Biblioteca de captura não carregada.", "warning");
        return;
      }

      const canvas = await renderCleanProfileExportCanvas(report);

      if (format === "image") {
        canvas.toBlob((blob) => {
          if (!blob) {
            showToast("Falha ao gerar imagem.", "warning");
            return;
          }
          downloadBlob(blob, `casaclima-perfil-${stamp}.png`);
          showToast("Exportação em imagem concluída.", "success");
        });
        return;
      }

      const jsPDFConstructor = window.jspdf?.jsPDF;
      if (!jsPDFConstructor) {
        showToast("Biblioteca de PDF não carregada.", "warning");
        return;
      }

      const pdf = new jsPDFConstructor("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 10;
      const printableWidth = pageWidth - margin * 2;
      const printableHeight = pageHeight - margin * 2;
      const imageData = canvas.toDataURL("image/png");
      const renderedHeight = (canvas.height * printableWidth) / canvas.width;
      let remainingHeight = renderedHeight;
      let positionY = margin;

      pdf.addImage(imageData, "PNG", margin, positionY, printableWidth, renderedHeight);
      remainingHeight -= printableHeight;

      while (remainingHeight > 0) {
        positionY -= printableHeight;
        pdf.addPage();
        pdf.addImage(imageData, "PNG", margin, positionY, printableWidth, renderedHeight);
        remainingHeight -= printableHeight;
      }

      pdf.save(`casaclima-perfil-${stamp}.pdf`);
      showToast("Exportação PDF concluída.", "success");
      return;
    }
  } catch (error) {
    showToast("Não foi possível exportar o resultado agora.", "warning");
  }
}

async function renderCleanProfileExportCanvas(report) {
  const exportNode = createCleanProfileExportNode(report);
  document.body.appendChild(exportNode);

  try {
    const images = Array.from(exportNode.querySelectorAll("img"));
    await Promise.all(images.map((image) => waitForExportImage(image)));
    await new Promise((resolve) => window.requestAnimationFrame(() => resolve()));

    return await html2canvas(exportNode, {
      scale: 2,
      backgroundColor: "#ffffff",
      useCORS: true,
      width: exportNode.scrollWidth,
      height: exportNode.scrollHeight,
      windowWidth: exportNode.scrollWidth,
      windowHeight: exportNode.scrollHeight
    });
  } finally {
    exportNode.remove();
  }
}

function createCleanProfileExportNode(report) {
  const container = document.createElement("div");
  container.setAttribute("aria-hidden", "true");
  container.style.cssText = [
    "position: absolute",
    "left: -20000px",
    "top: 0",
    "width: 1120px",
    "padding: 40px",
    "box-sizing: border-box",
    "background: #ffffff",
    "color: #18202b",
    "font-family: Arial, Helvetica, sans-serif",
    "line-height: 1.45"
  ].join(";");

  container.innerHTML = buildCleanProfileExportMarkup(report);
  return container;
}

function waitForExportImage(image) {
  if (!image) {
    return Promise.resolve();
  }
  if (image.complete && image.naturalWidth > 0) {
    return Promise.resolve();
  }
  return new Promise((resolve) => {
    const done = () => resolve();
    image.addEventListener("load", done, { once: true });
    image.addEventListener("error", done, { once: true });
  });
}

function buildCleanProfileExportMarkup(report) {
  const metaRows = [
    ["Data de nascimento", `${formatProfileBirthDate(profileState.birthDate) || "--"}`],
    ["Horário de nascimento", `${formatProfileBirthTime(profileState.birthTime) || "--"}`],
    ["Altura", `${profileState.height || "--"} cm`],
    ["Peso", `${profileState.weight || "--"} kg`],
    ["Atividade física diária", `${profileState.activityHours || "0"} hora(s)`],
    ["Profissão", profileState.profession || "Não informada"],
    ["Hobby", profileState.hobby || "Não informado"]
  ];
  const overviewRows = [
    ["Signo solar", report.sunSign.name],
    ["Ascendente estimado", report.ascendant],
    ["Fase lunar", report.moonPhase.label],
    ["IMC", `${report.imc.valueLabel} | ${report.imc.status}`]
  ];

  return `
    <div style="display:grid; gap:24px;">
      <div style="border:1px solid #d7ddea; border-radius:24px; padding:28px 30px; background:#ffffff;">
        <div style="min-width:0;">
          <div style="font-size:14px; letter-spacing:0.12em; text-transform:uppercase; color:#8b6a21; font-weight:700;">CasaClima</div>
          <h1 style="margin:10px 0 8px; font-size:38px; line-height:1.05; color:#17202b;">Perfil pessoal</h1>
          <p style="margin:0; color:#4c596b; font-size:18px;">Relatório limpo com saúde, leitura astral, treinos, leituras e frase do dia.</p>
        </div>
      </div>
      <div style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:20px;">
        <section style="border:1px solid #d7ddea; border-radius:22px; padding:22px 24px; background:#ffffff;">
          <h2 style="margin:0 0 14px; font-size:24px; color:#17202b;">Dados informados</h2>
          ${buildCleanExportRowList(metaRows)}
        </section>
        <section style="border:1px solid #d7ddea; border-radius:22px; padding:22px 24px; background:#ffffff;">
          <h2 style="margin:0 0 14px; font-size:24px; color:#17202b;">Visão geral</h2>
          ${buildCleanExportRowList(overviewRows)}
          <p style="margin:16px 0 0; color:#334155; font-size:16px;">${escapeHtml(report.summaryText)}</p>
        </section>
      </div>
      <section style="border:1px solid #d7ddea; border-radius:22px; padding:22px 24px; background:#ffffff;">
        <h2 style="margin:0 0 14px; font-size:24px; color:#17202b;">Leitura astral</h2>
        ${buildCleanExportRowList([
          ["Elemento", report.sunSign.element],
          ["Modalidade", report.sunSign.modality],
          ["Traço central", report.sunSign.trait]
        ])}
        <p style="margin:16px 0 0; color:#334155; font-size:16px;">${escapeHtml(report.astralReading)}</p>
      </section>
      <section style="border:1px solid #d7ddea; border-radius:22px; padding:22px 24px; background:#ffffff;">
        <h2 style="margin:0 0 14px; font-size:24px; color:#17202b;">IMC e direção</h2>
        <p style="margin:0; color:#334155; font-size:16px;"><strong>${escapeHtml(report.imc.valueLabel)} | ${escapeHtml(report.imc.status)}</strong></p>
        <p style="margin:14px 0 0; color:#334155; font-size:16px;">${escapeHtml(report.imc.advice)}</p>
      </section>
      <div style="display:grid; grid-template-columns:repeat(2, minmax(0, 1fr)); gap:20px;">
        <section style="border:1px solid #d7ddea; border-radius:22px; padding:22px 24px; background:#ffffff;">
          <h3 style="margin:0 0 12px; font-size:22px; color:#17202b;">Treino de academia</h3>
          ${buildCleanExportBulletList(report.gymPlan)}
        </section>
        <section style="border:1px solid #d7ddea; border-radius:22px; padding:22px 24px; background:#ffffff;">
          <h3 style="margin:0 0 12px; font-size:22px; color:#17202b;">Treino ao ar livre</h3>
          ${buildCleanExportBulletList(report.outdoorPlan)}
        </section>
        <section style="border:1px solid #d7ddea; border-radius:22px; padding:22px 24px; background:#ffffff;">
          <h3 style="margin:0 0 12px; font-size:22px; color:#17202b;">Plano de corrida</h3>
          ${buildCleanExportBulletList(report.runPlan)}
        </section>
        <section style="border:1px solid #d7ddea; border-radius:22px; padding:22px 24px; background:#ffffff;">
          <h3 style="margin:0 0 12px; font-size:22px; color:#17202b;">Leituras sugeridas</h3>
          ${buildCleanExportBulletList(report.books)}
        </section>
      </div>
      <section style="border:1px solid #d7ddea; border-radius:22px; padding:22px 24px; background:#ffffff;">
        <h2 style="margin:0 0 12px; font-size:24px; color:#17202b;">Frase e direção do dia</h2>
        <p style="margin:0; font-size:24px; line-height:1.35; color:#17202b; font-weight:700;">${escapeHtml(report.dailyQuote)}</p>
        <p style="margin:14px 0 0; color:#334155; font-size:16px;">${escapeHtml(report.dailyReason)}</p>
      </section>
    </div>
  `;
}

function buildCleanExportRowList(rows) {
  return rows
    .map(
      ([label, value]) => `
        <div style="display:grid; grid-template-columns:minmax(0,1fr) auto; gap:16px; padding:10px 0; border-bottom:1px solid #e9edf5;">
          <span style="color:#5d6b7c; font-size:15px;">${escapeHtml(label)}</span>
          <strong style="color:#17202b; font-size:15px; text-align:right;">${escapeHtml(value)}</strong>
        </div>
      `
    )
    .join("");
}

function buildCleanExportBulletList(items) {
  return `
    <ul style="margin:0; padding-left:20px; color:#334155;">
      ${items.map((item) => `<li style="margin:0 0 10px;">${escapeHtml(item)}</li>`).join("")}
    </ul>
  `;
}

function computeAge(date) {
  if (Number.isNaN(date.getTime())) {
    return 0;
  }
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const hasHadBirthday =
    today.getMonth() > date.getMonth() ||
    (today.getMonth() === date.getMonth() && today.getDate() >= date.getDate());
  if (!hasHadBirthday) {
    age -= 1;
  }
  return Math.max(age, 0);
}

function resolveSunSign(date) {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return (
    profileSigns.find((sign) => isWithinSign(month, day, sign.start, sign.end)) ||
    profileSigns[0]
  );
}

function isWithinSign(month, day, start, end) {
  const current = month * 100 + day;
  const startValue = start[0] * 100 + start[1];
  const endValue = end[0] * 100 + end[1];
  if (startValue <= endValue) {
    return current >= startValue && current <= endValue;
  }
  return current >= startValue || current <= endValue;
}

function resolveAscendant(timeValue) {
  const [hourText = "0", minuteText = "0"] = String(timeValue || "00:00").split(":");
  const totalMinutes = Number(hourText) * 60 + Number(minuteText);
  const index = Math.floor((totalMinutes % 1440) / 120) % ascendantCycle.length;
  return ascendantCycle[index];
}

function resolveBirthMoonPhase(date) {
  const reference = new Date(Date.UTC(2000, 0, 6, 18, 14, 0));
  const diffDays = (date.getTime() - reference.getTime()) / 86400000;
  const cycle = 29.53058867;
  const age = ((diffDays % cycle) + cycle) % cycle;

  if (age < 1.85) {
    return { label: "Lua nova", trait: "inícios, recolhimento e germinação de ideias" };
  }
  if (age < 5.54) {
    return { label: "Lua crescente", trait: "crescimento, coragem e construção gradual" };
  }
  if (age < 9.23) {
    return { label: "Quarto crescente", trait: "decisão, ajuste e ação com mais firmeza" };
  }
  if (age < 12.92) {
    return { label: "Gibosa crescente", trait: "refino, preparo e amadurecimento" };
  }
  if (age < 16.61) {
    return { label: "Lua cheia", trait: "visibilidade, intensidade e expressão" };
  }
  if (age < 20.3) {
    return { label: "Gibosa minguante", trait: "revisão, aprendizado e lapidação" };
  }
  if (age < 23.99) {
    return { label: "Quarto minguante", trait: "desapego, corte do excesso e reorganização" };
  }
  return { label: "Lua minguante", trait: "fechamento de ciclo, limpeza e descanso consciente" };
}

function resolveImc(heightValue, weightValue) {
  const heightCm = Number(heightValue);
  const weightKg = Number(weightValue);
  const heightMeters = heightCm / 100;
  const value = heightMeters > 0 ? weightKg / (heightMeters * heightMeters) : 0;

  if (!Number.isFinite(value) || value <= 0) {
    return {
      value: 0,
      valueLabel: "--",
      status: "Sem cálculo",
      advice: "Preencha altura e peso para gerar uma leitura mais útil."
    };
  }

  if (value < 18.5) {
    return {
      value,
      valueLabel: value.toFixed(1),
      status: "Abaixo do ideal",
      advice: "Vale buscar ganho gradual de massa, treino de força e alimentação mais consistente. Se puder, alinhe isso com um profissional."
    };
  }

  if (value < 25) {
    return {
      value,
      valueLabel: value.toFixed(1),
      status: "Faixa equilibrada",
      advice: "Seu IMC está em boa faixa. Mantenha rotina de treino, sono e alimentação estável. Parabéns pela base construída."
    };
  }

  if (value < 30) {
    return {
      value,
      valueLabel: value.toFixed(1),
      status: "Acima da faixa",
      advice: "Ajustes simples já ajudam muito: mais caminhada, treino regular e refeições mais previsíveis. O foco deve ser constância, não pressa."
    };
  }

  return {
    value,
    valueLabel: value.toFixed(1),
    status: "Pede atenção",
    advice: "Comece com impacto controlado, mobilidade e progressão gradual. O principal agora é reduzir carga do dia a dia com movimento seguro e rotina sustentável."
  };
}

function resolveActivityProfile(activityValue) {
  const hours = Number(activityValue || 0);
  if (hours >= 2) {
    return {
      hours,
      label: "Bem ativo",
      gymFocus: "força com recuperação",
      outdoorFocus: "volume moderado com mobilidade",
      runFocus: "ritmo progressivo"
    };
  }
  if (hours >= 0.75) {
    return {
      hours,
      label: "Moderadamente ativo",
      gymFocus: "força e resistência",
      outdoorFocus: "circuito funcional",
      runFocus: "corrida leve com constância"
    };
  }
  return {
    hours,
    label: "Rotina mais parada",
    gymFocus: "retomar base e postura",
    outdoorFocus: "movimento leve e regular",
    runFocus: "caminhada evoluindo para trote"
  };
}

function buildGymPlan(profile, imc, activity) {
  const profession = normalizeLooseText(profile.profession || "");
  const isSedentaryWork = /program|analist|admin|escritorio|escritório|motorista|estudante|caixa|atendente/.test(profession);

  if (imc.value && imc.value < 18.5) {
    return [
      "Treino A 3x por semana com foco em pernas, costas, peito e ombros.",
      "Comece cada sessão com 8 minutos de mobilidade e ativação.",
      "Priorize 3 a 4 exercícios básicos com 3 séries de 8 a 12 repetições.",
      "Finalize com core e alongamento curto para manter postura e recuperação."
    ];
  }

  if (imc.value >= 30) {
    return [
      "Treine 3x por semana com máquinas e exercícios estáveis para proteger articulações.",
      "Faça 10 minutos de bicicleta ou caminhada inclinada antes da parte principal.",
      "Monte sessões de corpo inteiro com movimentos simples e carga progressiva.",
      "Feche com 12 a 15 minutos de cardio leve para aumentar gasto sem exaustão."
    ];
  }

  return [
    `Organize 3 a 4 sessões semanais com foco em ${activity.gymFocus}.`,
    isSedentaryWork
      ? "Dê atenção extra a costas, glúteos, posterior de coxa e mobilidade de quadril."
      : "Inclua trabalho de mobilidade para não sobrecarregar o corpo fora do treino.",
    "Use exercícios principais como agachamento, remada, supino, puxada e levantamento com técnica firme.",
    "Mantenha progressão leve toda semana em carga, repetições ou controle do movimento."
  ];
}

function buildOutdoorPlan(profile, imc, activity) {
  const hobby = normalizeLooseText(profile.hobby || "");
  return [
    hobby.includes("trilha")
      ? "Aproveite trilhas ou caminhadas longas 1 a 2 vezes por semana em ritmo confortável."
      : `Faça 30 a 45 minutos ao ar livre com foco em ${activity.outdoorFocus}.`,
    "Monte um circuito com caminhada acelerada, agachamento, avanço, apoio inclinado e prancha.",
    imc.value >= 30
      ? "Use séries mais curtas e descansos regulares para manter segurança e aderência."
      : "Se estiver bem, inclua escadas, subidas leves ou tiros curtos de deslocamento.",
    "Feche com respiração mais lenta e alongamento para coluna, panturrilha e quadril."
  ];
}

function buildRunPlan(profile, imc, activity) {
  if (imc.value && imc.value >= 30) {
    return [
      "Comece com 25 minutos alternando 3 minutos de caminhada e 1 minuto de trote.",
      "Repita isso 3 vezes por semana por duas a três semanas.",
      "Quando ficar fácil, passe para 2 minutos caminhando e 2 trotando.",
      "O objetivo é criar fôlego e tolerância antes de buscar velocidade."
    ];
  }

  if (activity.hours >= 2) {
    return [
      "Faça 1 treino leve, 1 treino progressivo e 1 treino contínuo na semana.",
      "Use um dia para tiros curtos ou subidas leves com recuperação completa.",
      "Reserve ao menos um dia livre entre corrida intensa e treino pesado de pernas.",
      "Trabalhe postura, braço solto e passada estável antes de pensar em pace."
    ];
  }

  return [
    `Monte 3 saídas por semana com foco em ${activity.runFocus}.`,
    "Comece com 5 minutos andando, 20 a 30 minutos correndo leve e termine desacelerando.",
    "Se cansar rápido, alterne trote e caminhada sem perder a constância semanal.",
    "Aumente o tempo total antes de tentar correr mais forte."
  ];
}

function buildBookSuggestions(profile, sunSign, activity) {
  const profession = normalizeLooseText(profile.profession || "");
  const hobby = normalizeLooseText(profile.hobby || "");
  const tracks = [];

  if (/program|dados|ti|engenh|analist|sistem|tecn/.test(profession)) {
    tracks.push("tecnologia");
  }
  if (/prof|educ|venda|atend|saude|enferm|psico|cuid|gest/.test(profession)) {
    tracks.push("pessoas");
  }
  if (/design|foto|arte|musica|música|escrev|cri/.test(profession) || /arte|musica|música|pintura|desenho|foto/.test(hobby)) {
    tracks.push("criativo");
  }
  if (/corr|trilha|bike|academ|futebol|volei|vôlei|corrida|esporte/.test(hobby) || activity.hours >= 1) {
    tracks.push("movimento");
  }
  tracks.push("geral");

  const suggestions = [];
  tracks.forEach((track) => {
    (bookLibrary[track] || []).forEach((book) => {
      if (!suggestions.some((entry) => entry.title === book.title)) {
        suggestions.push(book);
      }
    });
  });

  return suggestions.slice(0, 3).map((book) => `${book.title}: ${book.reason} Combina bem com a fase de ${sunSign.name}.`);
}

function resolveDailyQuote(seedSource) {
  const seedDate = seedSource ? new Date(`${seedSource}T12:00:00`) : new Date();
  const start = new Date(seedDate.getFullYear(), 0, 0);
  const diff = seedDate - start;
  const day = Math.max(1, Math.floor(diff / 86400000));
  return profileQuotes[day % profileQuotes.length];
}

function buildPersistenceReason(profile, sunSign, activity, imc) {
  const profession = cleanLocationPart(profile.profession || "sua rotina");
  const hobby = cleanLocationPart(profile.hobby || "o que te faz bem");

  if (imc.value && imc.value >= 30) {
    return `Desistir faz o corpo voltar para o mesmo peso de esforço do dia a dia. Continuar, mesmo devagar, já melhora energia, mobilidade e autonomia para ${profession}.`;
  }

  if (activity.hours < 0.75) {
    return `Você não precisa virar atleta de uma vez. Só não pode deixar de se mover. Persistir cria base para ${profession} e ainda abre espaço para curtir ${hobby} com mais disposição.`;
  }

  return `${sunSign.name} cresce quando existe direção. Continuar importa porque seu esforço de hoje protege seu corpo, sua cabeça e sua liberdade para trabalhar com ${profession} e aproveitar ${hobby}.`;
}

function buildProfileTextReport(report) {
  return [
    "CasaClima - Perfil pessoal",
    "",
    `Data de nascimento: ${formatProfileBirthDate(profileState.birthDate) || "--"}`,
    `Horário de nascimento: ${formatProfileBirthTime(profileState.birthTime) || "--"}`,
    `Altura: ${profileState.height || "--"} cm`,
    `Peso: ${profileState.weight || "--"} kg`,
    `Atividade física diária: ${profileState.activityHours || "0"} hora(s)`,
    `Profissão: ${profileState.profession || "Não informada"}`,
    `Hobby: ${profileState.hobby || "Não informado"}`,
    "",
    `Signo solar: ${report.sunSign.name}`,
    `Ascendente estimado: ${report.ascendant}`,
    `Fase lunar: ${report.moonPhase.label}`,
    `Elemento: ${report.sunSign.element}`,
    `Modalidade: ${report.sunSign.modality}`,
    `Traço central: ${report.sunSign.trait}`,
    "",
    "Resumo",
    report.summaryText,
    "",
    "Leitura astral",
    report.astralReading,
    "",
    `IMC: ${report.imc.valueLabel} | ${report.imc.status}`,
    report.imc.advice,
    "",
    "Treino de academia",
    report.gymPlan.map((item) => `- ${item}`).join("\n"),
    "",
    "Treino ao ar livre",
    report.outdoorPlan.map((item) => `- ${item}`).join("\n"),
    "",
    "Plano de corrida",
    report.runPlan.map((item) => `- ${item}`).join("\n"),
    "",
    "Leituras sugeridas",
    report.books.map((item) => `- ${item}`).join("\n"),
    "",
    "Frase do dia",
    report.dailyQuote,
    "",
    "Por que continuar",
    report.dailyReason
  ].join("\n");
}

function buildProfileWordReport(report) {
  const buildList = (items) =>
    items
      .map((item) => `<li>${escapeHtml(item)}</li>`)
      .join("");

  return `
    <html>
      <head>
        <meta charset="utf-8">
        <title>CasaClima | Perfil</title>
        <style>
          body { font-family: Arial, sans-serif; color: #17212f; line-height: 1.5; padding: 24px; }
          h1, h2, h3 { color: #0f1725; }
          .meta, .card { margin-bottom: 18px; padding: 14px 16px; border: 1px solid #d9e2ef; border-radius: 14px; }
          ul { margin: 8px 0 0 18px; }
          p { margin: 8px 0; }
        </style>
      </head>
      <body>
        <h1>CasaClima - Perfil pessoal</h1>
        <div class="meta">
          <p><strong>Data de nascimento:</strong> ${escapeHtml(formatProfileBirthDate(profileState.birthDate) || "--")}</p>
          <p><strong>Horário de nascimento:</strong> ${escapeHtml(formatProfileBirthTime(profileState.birthTime) || "--")}</p>
          <p><strong>Altura:</strong> ${escapeHtml(profileState.height || "--")} cm</p>
          <p><strong>Peso:</strong> ${escapeHtml(profileState.weight || "--")} kg</p>
          <p><strong>Atividade física diária:</strong> ${escapeHtml(profileState.activityHours || "0")} hora(s)</p>
          <p><strong>Profissão:</strong> ${escapeHtml(profileState.profession || "Não informada")}</p>
          <p><strong>Hobby:</strong> ${escapeHtml(profileState.hobby || "Não informado")}</p>
        </div>
        <div class="card">
          <h2>Visão geral</h2>
          <p><strong>Signo solar:</strong> ${escapeHtml(report.sunSign.name)}</p>
          <p><strong>Ascendente estimado:</strong> ${escapeHtml(report.ascendant)}</p>
          <p><strong>Fase lunar:</strong> ${escapeHtml(report.moonPhase.label)}</p>
          <p><strong>IMC:</strong> ${escapeHtml(report.imc.valueLabel)} | ${escapeHtml(report.imc.status)}</p>
          <p>${escapeHtml(report.summaryText)}</p>
        </div>
        <div class="card">
          <h2>Leitura astral</h2>
          <p><strong>Elemento:</strong> ${escapeHtml(report.sunSign.element)}</p>
          <p><strong>Modalidade:</strong> ${escapeHtml(report.sunSign.modality)}</p>
          <p><strong>Traço central:</strong> ${escapeHtml(report.sunSign.trait)}</p>
          <p>${escapeHtml(report.astralReading)}</p>
        </div>
        <div class="card">
          <h2>IMC e direção</h2>
          <p>${escapeHtml(report.imc.advice)}</p>
        </div>
        <div class="card">
          <h3>Treino de academia</h3>
          <ul>${buildList(report.gymPlan)}</ul>
        </div>
        <div class="card">
          <h3>Treino ao ar livre</h3>
          <ul>${buildList(report.outdoorPlan)}</ul>
        </div>
        <div class="card">
          <h3>Plano de corrida</h3>
          <ul>${buildList(report.runPlan)}</ul>
        </div>
        <div class="card">
          <h3>Leituras sugeridas</h3>
          <ul>${buildList(report.books)}</ul>
        </div>
        <div class="card">
          <h3>Frase do dia</h3>
          <p>${escapeHtml(report.dailyQuote)}</p>
          <p>${escapeHtml(report.dailyReason)}</p>
        </div>
      </body>
    </html>
  `;
}

initProfilePage();
