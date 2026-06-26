import fs from "node:fs";
import path from "node:path";

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

const moduleScriptPattern = /\s*<script type="module" src="js\/app-init\.js"><\/script>/g;
const bodyPattern = /<body class="has-weather-fade/;
const bodyReplacement = '<body class="theme-dark user-dark has-weather-fade';

pages.forEach((page) => {
  const filePath = path.resolve(page);
  let html = fs.readFileSync(filePath, "utf-8");
  html = html.replace(bodyPattern, bodyReplacement);
  html = html.replace(moduleScriptPattern, "");
  html = html.replace('href="css/main.css"', 'href="css/bundle.css"');

  if (!html.includes("<!-- @partial scripts-core -->") && html.includes("<!-- @partial footer -->")) {
    html = html.replace(
      "<!-- @partial footer -->",
      "<!-- @partial footer -->\n  <!-- @partial scripts-core -->"
    );
  }

  fs.writeFileSync(filePath, html);
  console.log(`Fixed ${page}`);
});
