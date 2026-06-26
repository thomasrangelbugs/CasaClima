import fs from "node:fs";
import path from "node:path";

const NAV_ITEMS = [
  { href: "index.html", slug: "home", icon: "home", labelPt: "Início", labelEn: "Home" },
  { href: "gastos.html", slug: "gastos", icon: "budget", labelPt: "Gastos", labelEn: "Budget" },
  { href: "noticias.html", slug: "noticias", icon: "news", labelPt: "Notícias", labelEn: "News" },
  { href: "cofre.html", slug: "cofre", icon: "vault", labelPt: "Cofre", labelEn: "Vault" },
  { href: "radio.html", slug: "radio", icon: "radio", labelPt: "Rádio", labelEn: "Radio" },
  { href: "utilidades.html", slug: "utilidades", icon: "tools", labelPt: "Utilidades", labelEn: "Utilities" },
  { href: "cursos.html", slug: "cursos", icon: "courses", labelPt: "Cursos", labelEn: "Courses" },
  { href: "perfil.html", slug: "perfil", icon: "profile", labelPt: "Perfil", labelEn: "Profile" }
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

function resolvePageSlug(filename) {
  const base = path.basename(filename, ".html");
  return base === "index" ? "home" : base;
}

export function htmlPartials() {
  return {
    name: "casaclima-html-partials",
    transformIndexHtml: {
      order: "pre",
      handler(html, ctx) {
        const slug = resolvePageSlug(ctx.filename);
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
    }
  };
}
