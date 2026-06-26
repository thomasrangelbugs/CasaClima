const COURSE_AREAS = {
  all: { label: "Todos", key: "all" },
  tecnologia: { label: "Tecnologia", key: "tecnologia" },
  gastronomia: { label: "Gastronomia", key: "gastronomia" },
  matematica: { label: "Matemática", key: "matematica" },
  idiomas: { label: "Idiomas", key: "idiomas" },
  negocios: { label: "Negócios", key: "negocios" },
  design: { label: "Design", key: "design" },
  saude: { label: "Saúde", key: "saude" },
  ciencias: { label: "Ciências", key: "ciencias" },
  humanas: { label: "Humanas", key: "humanas" },
  musica: { label: "Música", key: "musica" }
};

/** Cursos 100% gratuitos ou com trilha gratuita oficial (audit / plataforma pública). */
const FREE_COURSES = [
  {
    id: "fcc-web",
    title: "Design responsivo na web",
    provider: "freeCodeCamp",
    area: "tecnologia",
    url: "https://www.freecodecamp.org/learn/2022/responsive-web-design/",
    duration: "300 h",
    language: "PT/EN"
  },
  {
    id: "odin-foundations",
    title: "Fundamentos de desenvolvimento web",
    provider: "The Odin Project",
    area: "tecnologia",
    url: "https://www.theodinproject.com/paths/foundations/courses/foundations",
    duration: "120 h",
    language: "EN"
  },
  {
    id: "cs50",
    title: "CS50 — Introdução à ciência da computação",
    provider: "Harvard / edX",
    area: "tecnologia",
    url: "https://cs50.harvard.edu/x/",
    duration: "12 semanas",
    language: "PT/EN"
  },
  {
    id: "cs50-python",
    title: "CS50 Python",
    provider: "Harvard",
    area: "tecnologia",
    url: "https://cs50.harvard.edu/python/",
    duration: "9 semanas",
    language: "EN"
  },
  {
    id: "mit-python",
    title: "Introdução à programação em Python",
    provider: "MIT OpenCourseWare",
    area: "tecnologia",
    url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
    duration: "Self-paced",
    language: "EN"
  },
  {
    id: "mdn-learn",
    title: "Aprenda desenvolvimento web",
    provider: "MDN",
    area: "tecnologia",
    url: "https://developer.mozilla.org/pt-BR/docs/Learn",
    duration: "Self-paced",
    language: "PT"
  },
  {
    id: "khan-computing",
    title: "Computação e programação",
    provider: "Khan Academy",
    area: "tecnologia",
    url: "https://www.khanacademy.org/computing",
    duration: "Self-paced",
    language: "PT/EN"
  },
  {
    id: "ev-logica",
    title: "Lógica de programação",
    provider: "Fundação Bradesco (EV)",
    area: "tecnologia",
    url: "https://www.ev.org.br/cursos/logica-de-programacao",
    duration: "15 h",
    language: "PT"
  },
  {
    id: "ev-ti",
    title: "Fundamentos de TI: hardware e software",
    provider: "Fundação Bradesco (EV)",
    area: "tecnologia",
    url: "https://www.ev.org.br/cursos/fundamentos-de-ti-hardware-e-software",
    duration: "15 h",
    language: "PT"
  },
  {
    id: "ev-excel",
    title: "Excel 2016 básico",
    provider: "Fundação Bradesco (EV)",
    area: "tecnologia",
    url: "https://www.ev.org.br/cursos/excel-2016-basico",
    duration: "19 h",
    language: "PT"
  },
  {
    id: "dio-trilha",
    title: "Trilhas gratuitas de tecnologia",
    provider: "DIO",
    area: "tecnologia",
    url: "https://www.dio.me/cursos",
    duration: "Variável",
    language: "PT"
  },
  {
    id: "google-it",
    title: "Suporte de TI do Google (modo gratuito)",
    provider: "Google / Coursera",
    area: "tecnologia",
    url: "https://www.coursera.org/professional-certificates/google-it-support",
    duration: "6 meses",
    language: "PT/EN"
  },
  {
    id: "alison-food",
    title: "Diploma em segurança alimentar",
    provider: "Alison",
    area: "gastronomia",
    url: "https://alison.com/course/diploma-in-food-safety",
    duration: "10 h",
    language: "EN"
  },
  {
    id: "coursera-gastro",
    title: "Ciência da gastronomia",
    provider: "Coursera / USP",
    area: "gastronomia",
    url: "https://www.coursera.org/learn/science-of-gastronomy",
    duration: "14 h",
    language: "PT/EN"
  },
  {
    id: "ev-alimentos",
    title: "Gestão de alimentos e bebidas",
    provider: "Fundação Bradesco (EV)",
    area: "gastronomia",
    url: "https://www.ev.org.br/cursos/gestao-de-alimentos-e-bebidas",
    duration: "12 h",
    language: "PT"
  },
  {
    id: "bbc-food",
    title: "Receitas e técnicas (acervo aberto)",
    provider: "BBC Food",
    area: "gastronomia",
    url: "https://www.bbc.co.uk/food",
    duration: "Self-paced",
    language: "EN"
  },
  {
    id: "openlearn-nutrition",
    title: "Introdução à nutrição",
    provider: "OpenLearn",
    area: "gastronomia",
    url: "https://www.open.edu/openlearn/health-sports-psychology/health/nutrition-and-health",
    duration: "8 h",
    language: "EN"
  },
  {
    id: "khan-math",
    title: "Matemática do básico ao cálculo",
    provider: "Khan Academy",
    area: "matematica",
    url: "https://pt.khanacademy.org/math",
    duration: "Self-paced",
    language: "PT"
  },
  {
    id: "mit-calc",
    title: "Cálculo de uma variável",
    provider: "MIT OpenCourseWare",
    area: "matematica",
    url: "https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/",
    duration: "Self-paced",
    language: "EN"
  },
  {
    id: "obmep",
    title: "Provas e materiais OBMEP",
    provider: "OBMEP",
    area: "matematica",
    url: "https://www.obmep.org.br/",
    duration: "Self-paced",
    language: "PT"
  },
  {
    id: "openlearn-math",
    title: "Essentials of mathematics",
    provider: "OpenLearn",
    area: "matematica",
    url: "https://www.open.edu/openlearn/science-maths-technology/mathematics-statistics",
    duration: "Variável",
    language: "EN"
  },
  {
    id: "avamec-math",
    title: "Cursos de matemática (MEC)",
    provider: "AVAMEC",
    area: "matematica",
    url: "https://avamec.mec.gov.br/",
    duration: "Variável",
    language: "PT"
  },
  {
    id: "brilliant-free",
    title: "Desafios diários gratuitos",
    provider: "Brilliant",
    area: "matematica",
    url: "https://brilliant.org/courses/",
    duration: "Self-paced",
    language: "EN"
  },
  {
    id: "duolingo",
    title: "Idiomas com exercícios diários",
    provider: "Duolingo",
    area: "idiomas",
    url: "https://www.duolingo.com/",
    duration: "Self-paced",
    language: "PT"
  },
  {
    id: "bbc-english",
    title: "Aprenda inglês",
    provider: "BBC Learning English",
    area: "idiomas",
    url: "https://www.bbc.co.uk/learningenglish",
    duration: "Self-paced",
    language: "EN"
  },
  {
    id: "openlearn-languages",
    title: "Cursos gratuitos de idiomas",
    provider: "OpenLearn",
    area: "idiomas",
    url: "https://www.open.edu/openlearn/languages/free-courses",
    duration: "Variável",
    language: "EN"
  },
  {
    id: "busuu",
    title: "Prática de idiomas (plano gratuito)",
    provider: "Busuu",
    area: "idiomas",
    url: "https://www.busuu.com/pt",
    duration: "Self-paced",
    language: "PT"
  },
  {
    id: "cervantes",
    title: "Espanhol — cursos abertos",
    provider: "Instituto Cervantes",
    area: "idiomas",
    url: "https://cvc.cervantes.es/ensenanza/aula_de_els/",
    duration: "Self-paced",
    language: "ES"
  },
  {
    id: "ev-ingles",
    title: "Inglês básico",
    provider: "Fundação Bradesco (EV)",
    area: "idiomas",
    url: "https://www.ev.org.br/cursos/ingles-basico",
    duration: "40 h",
    language: "PT"
  },
  {
    id: "google-garage",
    title: "Fundamentos do marketing digital",
    provider: "Google Digital Garage",
    area: "negocios",
    url: "https://learndigital.withgoogle.com/digitalgarage/course/marketing-digital",
    duration: "40 h",
    language: "PT"
  },
  {
    id: "sebrae",
    title: "Cursos online gratuitos",
    provider: "Sebrae",
    area: "negocios",
    url: "https://sebrae.com.br/sites/PortalSebrae/cursosonline",
    duration: "Variável",
    language: "PT"
  },
  {
    id: "ev-empreendedorismo",
    title: "Empreendedorismo",
    provider: "Fundação Bradesco (EV)",
    area: "negocios",
    url: "https://www.ev.org.br/cursos/empreendedorismo",
    duration: "10 h",
    language: "PT"
  },
  {
    id: "coursera-fin",
    title: "Introdução aos mercados financeiros",
    provider: "Coursera / Yale",
    area: "negocios",
    url: "https://www.coursera.org/learn/financial-markets-global",
    duration: "33 h",
    language: "EN"
  },
  {
    id: "openlearn-business",
    title: "Negócios e gestão",
    provider: "OpenLearn",
    area: "negocios",
    url: "https://www.open.edu/openlearn/money-business/free-courses",
    duration: "Variável",
    language: "EN"
  },
  {
    id: "canva-school",
    title: "Canva Design School",
    provider: "Canva",
    area: "design",
    url: "https://www.canva.com/designschool/",
    duration: "Self-paced",
    language: "PT/EN"
  },
  {
    id: "google-ux",
    title: "Google UX Design (auditoria gratuita)",
    provider: "Google / Coursera",
    area: "design",
    url: "https://www.coursera.org/professional-certificates/google-ux-design",
    duration: "6 meses",
    language: "PT/EN"
  },
  {
    id: "gimp-tut",
    title: "Tutorial oficial do GIMP",
    provider: "GIMP",
    area: "design",
    url: "https://www.gimp.org/tutorials/",
    duration: "Self-paced",
    language: "EN"
  },
  {
    id: "ev-design-grafico",
    title: "Design gráfico com CorelDRAW",
    provider: "Fundação Bradesco (EV)",
    area: "design",
    url: "https://www.ev.org.br/cursos/design-grafico-com-coreldraw",
    duration: "15 h",
    language: "PT"
  },
  {
    id: "interaction-design",
    title: "UX: pesquisa e teste de usabilidade",
    provider: "Coursera",
    area: "design",
    url: "https://www.coursera.org/learn/ux-research",
    duration: "12 h",
    language: "EN"
  },
  {
    id: "openwho",
    title: "Cursos abertos em saúde global",
    provider: "OpenWHO",
    area: "saude",
    url: "https://openwho.org/courses",
    duration: "Variável",
    language: "PT/EN"
  },
  {
    id: "coursera-first-aid",
    title: "Primeiros socorros",
    provider: "Coursera",
    area: "saude",
    url: "https://www.coursera.org/learn/first-aid",
    duration: "5 h",
    language: "EN"
  },
  {
    id: "openlearn-health",
    title: "Saúde e psicologia",
    provider: "OpenLearn",
    area: "saude",
    url: "https://www.open.edu/openlearn/health-sports-psychology/free-courses",
    duration: "Variável",
    language: "EN"
  },
  {
    id: "ev-saude",
    title: "Saúde e segurança no trabalho",
    provider: "Fundação Bradesco (EV)",
    area: "saude",
    url: "https://www.ev.org.br/cursos/saude-e-seguranca-no-trabalho",
    duration: "12 h",
    language: "PT"
  },
  {
    id: "nhs-mind",
    title: "Every Mind Matters (bem-estar)",
    provider: "NHS",
    area: "saude",
    url: "https://www.nhs.uk/every-mind-matters/",
    duration: "Self-paced",
    language: "EN"
  },
  {
    id: "khan-science",
    title: "Ciências (física, química, biologia)",
    provider: "Khan Academy",
    area: "ciencias",
    url: "https://pt.khanacademy.org/science",
    duration: "Self-paced",
    language: "PT"
  },
  {
    id: "mit-physics",
    title: "Mecânica clássica",
    provider: "MIT OpenCourseWare",
    area: "ciencias",
    url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/",
    duration: "Self-paced",
    language: "EN"
  },
  {
    id: "coursera-astro",
    title: "Astrobiologia: vida nas estrelas",
    provider: "Coursera",
    area: "ciencias",
    url: "https://www.coursera.org/learn/astrobiology",
    duration: "8 h",
    language: "EN"
  },
  {
    id: "openlearn-science",
    title: "Ciência e tecnologia",
    provider: "OpenLearn",
    area: "ciencias",
    url: "https://www.open.edu/openlearn/science-maths-technology/free-courses",
    duration: "Variável",
    language: "EN"
  },
  {
    id: "wikiversity-science",
    title: "Portal de ciências",
    provider: "Wikiversity",
    area: "ciencias",
    url: "https://pt.wikiversity.org/wiki/Portal:Ci%C3%AAncia",
    duration: "Self-paced",
    language: "PT"
  },
  {
    id: "yale-open",
    title: "Cursos abertos Yale",
    provider: "Yale Open Courses",
    area: "humanas",
    url: "https://oyc.yale.edu/",
    duration: "Variável",
    language: "EN"
  },
  {
    id: "edx-justice",
    title: "Justiça",
    provider: "Harvard / edX",
    area: "humanas",
    url: "https://www.edx.org/course/justice",
    duration: "12 semanas",
    language: "EN"
  },
  {
    id: "openlearn-history",
    title: "História e cultura",
    provider: "OpenLearn",
    area: "humanas",
    url: "https://www.open.edu/openlearn/history-the-arts/free-courses",
    duration: "Variável",
    language: "EN"
  },
  {
    id: "wikiversity-human",
    title: "Ciências humanas",
    provider: "Wikiversity",
    area: "humanas",
    url: "https://pt.wikiversity.org/wiki/Ci%C3%AAncias_Humanas",
    duration: "Self-paced",
    language: "PT"
  },
  {
    id: "coursera-philosophy",
    title: "Introdução à filosofia",
    provider: "Coursera / Edinburgh",
    area: "humanas",
    url: "https://www.coursera.org/learn/philosophy",
    duration: "18 h",
    language: "EN"
  },
  {
    id: "berklee-production",
    title: "Introdução à produção musical",
    provider: "Berklee / Coursera",
    area: "musica",
    url: "https://www.coursera.org/learn/music-production",
    duration: "12 h",
    language: "EN"
  },
  {
    id: "musictheory",
    title: "Teoria musical interativa",
    provider: "musictheory.net",
    area: "musica",
    url: "https://www.musictheory.net/lessons",
    duration: "Self-paced",
    language: "EN"
  },
  {
    id: "teoria-com",
    title: "Teoria musical",
    provider: "Teoria.com",
    area: "musica",
    url: "https://www.teoria.com/pt-br/",
    duration: "Self-paced",
    language: "PT"
  },
  {
    id: "coursera-guitar",
    title: "Guitarra para iniciantes",
    provider: "Berklee / Coursera",
    area: "musica",
    url: "https://www.coursera.org/learn/guitar",
    duration: "8 h",
    language: "EN"
  },
  {
    id: "openlearn-music",
    title: "Música e artes",
    provider: "OpenLearn",
    area: "musica",
    url: "https://www.open.edu/openlearn/history-the-arts/music/free-courses",
    duration: "Variável",
    language: "EN"
  }
];

const courseRefs = {
  grid: document.getElementById("coursesGrid"),
  chips: document.getElementById("courseAreaChips"),
  searchInput: document.getElementById("courseSearchInput"),
  status: document.getElementById("courseSearchStatus")
};

const courseState = {
  area: "all",
  query: ""
};

function initCourses() {
  if (!courseRefs.grid) {
    return;
  }

  buildCourseAreaChips();
  courseRefs.searchInput?.addEventListener(
    "input",
    debounce((event) => {
      courseState.query = event.target.value.trim();
      renderCourses();
    }, 160)
  );

  renderCourses();
}

function buildCourseAreaChips() {
  if (!courseRefs.chips) {
    return;
  }

  courseRefs.chips.innerHTML = Object.values(COURSE_AREAS)
    .map(
      (area) =>
        `<button type="button" class="place-chip course-chip" data-area="${area.key}">${escapeHtml(area.label)}</button>`
    )
    .join("");

  courseRefs.chips.addEventListener("click", (event) => {
    const chip = event.target.closest(".course-chip");
    if (!chip) {
      return;
    }
    courseState.area = chip.dataset.area || "all";
    syncCourseAreaChips();
    renderCourses();
  });

  syncCourseAreaChips();
}

function syncCourseAreaChips() {
  document.querySelectorAll(".course-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.area === courseState.area);
  });
}

function filterCourses() {
  const query = normalizeLooseText(courseState.query);

  return FREE_COURSES.filter((course) => {
    if (courseState.area !== "all" && course.area !== courseState.area) {
      return false;
    }
    if (!query) {
      return true;
    }
    const haystack = normalizeLooseText(
      `${course.title} ${course.provider} ${COURSE_AREAS[course.area]?.label || ""} ${course.language}`
    );
    return haystack.includes(query);
  });
}

function renderCourses() {
  const results = filterCourses();

  if (courseRefs.status) {
    const areaLabel = COURSE_AREAS[courseState.area]?.label || "Todos";
    courseRefs.status.textContent = `${results.length} curso(s) · ${areaLabel}`;
  }

  if (!results.length) {
    courseRefs.grid.innerHTML = '<p class="hint">Nenhum curso para esse filtro.</p>';
    return;
  }

  courseRefs.grid.innerHTML = results
    .map(
      (course) => `
        <article class="course-card">
          <div class="course-card__header">
            <span class="course-card__area">${escapeHtml(COURSE_AREAS[course.area]?.label || course.area)}</span>
            <h4>${escapeHtml(course.title)}</h4>
            <p>${escapeHtml(course.provider)} · ${escapeHtml(course.duration || "Self-paced")} · ${escapeHtml(course.language)}</p>
          </div>
          <div class="course-card__actions">
            <a class="button primary slim" href="${escapeAttribute(course.url)}" target="_blank" rel="noopener noreferrer">Acessar grátis</a>
          </div>
        </article>
      `
    )
    .join("");
}

initCourses();
