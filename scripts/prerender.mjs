import { readFile, rm, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const serverEntry = pathToFileURL(resolve(projectRoot, ".ssr", "entry-server.js")).href;
const { render } = await import(serverEntry);

const pages = [
  { file: "dist/index.html", routePath: "/" },
  { file: "dist/work/index.html", routePath: "/work/" },
];

for (const page of pages) {
  const target = resolve(projectRoot, page.file);
  const html = await readFile(target, "utf8");
  const renderedApp = render(page.routePath);
  const output = html.replace('<div id="root"></div>', `<div id="root">${renderedApp}</div>`);

  if (output === html) {
    throw new Error(`Could not find the application root in ${page.file}`);
  }

  await writeFile(target, output);
}

await rm(resolve(projectRoot, ".ssr"), { recursive: true, force: true });
