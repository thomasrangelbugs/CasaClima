import { defineConfig } from "vite";
import { resolve } from "node:path";
import { copyFileSync, cpSync, existsSync, mkdirSync } from "node:fs";
import { htmlPartials } from "./scripts/vite-plugin-partials.js";

const pages = [
  "index",
  "gastos",
  "noticias",
  "cofre",
  "radio",
  "utilidades",
  "cursos",
  "perfil"
];

export default defineConfig({
  plugins: [
    htmlPartials(),
    {
      name: "copy-static-pwa",
      closeBundle() {
        const dist = resolve("dist");
        mkdirSync(dist, { recursive: true });
        ["sw.js", "manifest.webmanifest"].forEach((file) => {
          copyFileSync(resolve(file), resolve(dist, file));
        });
        if (existsSync("assets")) {
          cpSync(resolve("assets"), resolve(dist, "assets"), { recursive: true });
        }
        if (existsSync("js")) {
          cpSync(resolve("js"), resolve(dist, "js"), { recursive: true });
        }
      }
    }
  ],
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: Object.fromEntries(
        pages.map((page) => [page, resolve(__dirname, `${page}.html`)])
      )
    }
  },
  server: {
    port: 5173
  }
});
