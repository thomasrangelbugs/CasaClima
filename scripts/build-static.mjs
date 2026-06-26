import fs from "node:fs";
import path from "node:path";

const NAV_ITEMS = [
  { href: "index.html", slug: "home", icon: "home", labelPt: "Início" },
  { href: "gastos.html", slug: "gastos", icon: "budget", labelPt: "Gastos" },
  { href: "noticias.html", slug: "noticias", icon: "news", labelPt: "Notícias" },
  { href: "cofre.html", slug: "cofre", icon: "vault", labelPt: "Cofre" },
  { href: "radio.html", slug: "radio", icon: "radio", labelPt: "Rádio" },
  { href: "utilidades.html", slug: "utilidades", icon: "tools", labelPt: "Utilidades" },
  { href: "cursos.html", slug: "cursos", icon: "courses", labelPt: "Cursos" },
  { href: "perfil.html", slug: "perfil", icon: "profile", labelPt: "Perfil" }
];

function loadPartial(name, vars) {
  const filePath = path.resolve("src/partials", `${name}.html`);
  let content = fs.readFileSync(filePath, "utf-8");
  Object.entries(vars).forEach(([key, value]) => {
    content = content.replaceAll(`{{${key}}}`, value);
  });
  return content;
}

function buildNavLinks(currentSlug) {
  return NAV_ITEMS.map((item) => {
    const isCurrent = item.slug === currentSlug;
    const aria = isCurrent ? ' aria-current="page"' : "";
    return `<a href="${item.href}"${aria} data-i18n="nav.${item.slug}"><span class="nav-icon icon--${item.icon}" aria-hidden="true"></span><span>${item.labelPt}</span></a>`;
  }).join("\n          ");
}

function expandHtml(html, filename) {
  const slug = path.basename(filename, ".html") === "index" ? "home" : path.basename(filename, ".html");
  const vars = {
    pageSlug: slug,
    navLinks: buildNavLinks(slug),
    pageClass: `page-${slug}`
  };

  let result = html;
  let guard = 0;
  while (/<!--\s*@partial\s+[\w-]+\s*-->/.test(result) && guard < 12) {
    result = result.replace(/<!--\s*@partial\s+([\w-]+)\s*-->/g, (_, name) => loadPartial(name, vars));
    guard += 1;
  }

  return result;
}

function bundleCss() {
  const cssDir = path.resolve("css");
  const order = [
    "critical-scene.css",
    "layout.css",
    "components.css",
    "legacy.css",
    "pages.css",
    "accessibility.css",
    "features.css",
    "remake.css",
    "fixes-production.css"
  ];

  const bundled = order
    .map((file) => {
      const filePath = path.join(cssDir, file);
      return `/* === ${file} === */\n${fs.readFileSync(filePath, "utf-8")}`;
    })
    .join("\n\n");

  fs.writeFileSync(path.join(cssDir, "bundle.css"), bundled);
  return bundled;
}

const pages = [
  "index.html",
  "gastos.html",
  "noticias.html",
  "cofre.html",
  "radio.html",
  "utilidades.html",
  "cursos.html",
  "perfil.html"
];

const dist = path.resolve("dist");
fs.mkdirSync(dist, { recursive: true });

bundleCss();
fs.mkdirSync(path.join(dist, "css"), { recursive: true });
fs.copyFileSync(path.resolve("css/bundle.css"), path.join(dist, "css/bundle.css"));

pages.forEach((page) => {
  const source = path.resolve(page);
  let html = expandHtml(fs.readFileSync(source, "utf-8"), page);
  html = html.replace('href="css/main.css"', 'href="css/bundle.css"');
  fs.writeFileSync(path.join(dist, page), html);
});

function copyRecursive(from, to) {
  if (!fs.existsSync(from)) {
    return;
  }
  fs.mkdirSync(to, { recursive: true });
  fs.readdirSync(from, { withFileTypes: true }).forEach((entry) => {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(src, dest);
    } else {
      fs.copyFileSync(src, dest);
    }
  });
}

["css", "js", "assets", "netlify"].forEach((dir) => copyRecursive(path.resolve(dir), path.join(dist, dir)));
["sw.js", "manifest.webmanifest"].forEach((file) => {
  if (fs.existsSync(file)) {
    fs.copyFileSync(file, path.join(dist, file));
  }
});

console.log("Build estático gerado em dist/");
