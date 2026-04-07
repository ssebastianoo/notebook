import { createHighlighter } from "shiki";
import markedShiki from "marked-shiki";
import markedKatex from "marked-katex-extension";
import { marked } from "marked";
import fs from "fs";

const highlighter = await createHighlighter({
  langs: ["md", "js", "c", "cpp", "python", "bash"],
  themes: ["min-light", "nord"],
});

marked.setOptions({
  gfm: true,
  breaks: true,
  mangle: false,
});

marked.use(markedKatex({ throwOnError: false }));

if (fs.existsSync("build")) fs.rmSync("build", { recursive: true });
fs.mkdirSync("build");

if (fs.existsSync("static")) {
  for (const file of fs.readdirSync("static", { recursive: true })) {
    if (fs.lstatSync(`static/${file}`).isFile()) {
      fs.copyFileSync(`static/${file}`, `build/${file}`);
    } else {
      fs.mkdirSync(`build/${file}`);
    }
  }
}

const layout = fs.readFileSync("layout.html", "utf8");

const files = fs.readdirSync("lectures", { recursive: true });

const lectures = [];

for (const file of files) {
  if (file.startsWith(".")) continue;

  process.stdout.write(`Parsing ${file}`);

  const isFile = fs.statSync(`lectures/${file}`).isFile();
  if (isFile) {
    const content = fs.readFileSync(`lectures/${file}`, "utf8");
    const body = await marked
      .use(
        markedShiki({
          highlight(code, lang, props) {
            return highlighter.codeToHtml(code, {
              lang,
              themes: {
                light: "min-light",
                dark: "nord",
              },
            });
          },
        }),
      )
      .parse(content);
    const html = layout.replace("{content}", body);
    const name = file.replace(/\.md$/, ".html");

    process.stdout.write(` -> Building ${name}\n`);
    fs.writeFileSync(`build/${name}`, html, "utf8");

    lectures.push(name.replaceAll(".html", ""));
  } else {
    fs.mkdirSync(`build/${file}`, { recursive: true });
  }
}

const indexContent = `<h1>Notebook</h1>
<ul>
  ${lectures.map((lecture) => `<li><a href="${lecture}">${lecture}</a></li>`).join("")}
</ul>`;
const indexHtml = layout.replace("{content}", indexContent);

fs.writeFileSync("build/index.html", indexHtml, "utf8");

console.log("Done");
