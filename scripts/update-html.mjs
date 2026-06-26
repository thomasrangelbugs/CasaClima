import fs from "node:fs";
import path from "node:path";

const pages = [
  { file: "gastos.html", pageClass: "page-gastos", scripts: ['<script defer src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>', '<script defer src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>', '<script defer src="js/budget.js"></script>'] },
  { file: "noticias.html", pageClass: "page-noticias", scripts: ['<script defer src="js/news.js"></script>'] },
  { file: "cofre.html", pageClass: "page-cofre", scripts: ['<script defer src="js/vault.js"></script>'] },
  { file: "radio.html", pageClass: "page-radio", scripts: ['<script defer src="https://cdn.jsdelivr.net/npm/hls.js@1.5.15/dist/hls.min.js"></script>', '<script defer src="js/radio.js"></script>'] },
  { file: "utilidades.html", pageClass: "page-utilidades", scripts: ['<script defer src="js/utilities.js"></script>'] },
  { file: "cursos.html", pageClass: "page-cursos", scripts: ['<script defer src="js/courses.js"></script>'] },
  { file: "perfil.html", pageClass: "page-perfil", scripts: ['<script defer src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>', '<script defer src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>', '<script defer src="js/profile.js"></script>'] }
];

const headerBlock = /[\s\S]*?<header class="masthead[\s\S]*?<\/header>\s*/;
const footerBlock = /<footer class="site-footer">[\s\S]*?<\/footer>\s*<\/div>\s*<\/body>/;

const shellTop = `  <!-- @partial shell-top -->
    <!-- @partial header -->
`;

const footerPartial = `    <!-- @partial footer -->
</body>`;

const cssBlock = /  <link rel="stylesheet" href="css\/critical-scene\.css">\s*  <link rel="stylesheet" href="styles\.css">\s*  <link rel="stylesheet" href="css\/remake\.css">/;

pages.forEach(({ file, pageClass, scripts }) => {
  const filePath = path.resolve(file);
  let html = fs.readFileSync(filePath, "utf-8");

  html = html.replace(
    cssBlock,
    `  <link rel="stylesheet" href="css/main.css">`
  );

  html = html.replace(
    /<script src="js\/scene-assets\.js"><\/script>\s*<script defer src="js\/common\.js"><\/script>[\s\S]*?<script defer src="js\/app-init\.js"><\/script>/,
    `  <script src="js/scene-assets.js"></script>\n  <script defer src="js/common.js"></script>\n  ${scripts.join("\n  ")}\n  <script type="module" src="js/app-init.js"></script>`
  );

  html = html.replace(/<body class="[^"]*">/, `<body class="has-weather-fade scene-ready ${pageClass}">`);

  html = html.replace(
    /<div class="scroll-progress"[\s\S]*?<header class="masthead[\s\S]*?<\/header>\s*/,
    shellTop
  );

  html = html.replace(footerBlock, footerPartial);
  fs.writeFileSync(filePath, html);
  console.log(`Updated ${file}`);
});

console.log("Done");
