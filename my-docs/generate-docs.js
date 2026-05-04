const fs = require("fs");
const path = require("path");

const root = process.cwd();
const importDir = path.join(root, "imported-docs");
const docsDir = path.join(root, "docs");
const staticDir = path.join(root, "static", "img");

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function clearDocs() {
  if (fs.existsSync(docsDir)) {
    fs.rmSync(docsDir, { recursive: true, force: true });
  }
  ensureDir(docsDir);
}

function getAllFiles(dir) {
  let result = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) {
      result = result.concat(getAllFiles(full));
    } else {
      result.push(full);
    }
  }
  return result;
}

function detectSection(name, content) {
  const text = (name + content).toLowerCase();

  if (text.includes("требован")) return "requirements";
  if (text.includes("bpmn") || text.includes("модел")) return "architecture";
  if (text.includes("sequence") || text.includes("use case")) return "diagrams";
  if (text.includes("api") || text.includes("endpoint")) return "api";
  if (text.includes("алгоритм")) return "algorithms";

  return "materials";
}

function fixImages(content, fileDir) {
  return content.replace(/!\[(.*?)\]\((.*?)\)/g, (match, alt, imgPath) => {
    const absPath = path.resolve(fileDir, imgPath);

    if (!fs.existsSync(absPath)) return match;

    const fileName = path.basename(imgPath);
    const newPath = path.join(staticDir, fileName);

    ensureDir(staticDir);
    fs.copyFileSync(absPath, newPath);

    return `![${alt}](/img/${fileName})`;
  });
}

function normalizeMarkdown(content, title) {
  content = content.replace(/\r\n/g, "\n").trim();

  if (!content.startsWith("#")) {
    content = `# ${title}\n\n` + content;
  }

  return content;
}

function slug(name) {
  return name
    .toLowerCase()
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-z0-9а-яё]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function writeSidebar(groups) {
  const sidebar = `
module.exports = {
  tutorialSidebar: [
    "intro",
    ${Object.entries(groups)
      .map(([key, items]) => {
        if (!items.length) return "";
        return `{
          type: "category",
          label: "${key}",
          items: ${JSON.stringify(items, null, 8)}
        },`;
      })
      .join("\n")}
  ],
};
`;

  fs.writeFileSync(path.join(root, "sidebars.js"), sidebar);
}

function main() {
  if (!fs.existsSync(importDir)) {
    console.error("❌ Нет папки imported-docs");
    process.exit(1);
  }

  clearDocs();
  ensureDir(staticDir);

  fs.writeFileSync(
    path.join(docsDir, "intro.md"),
    `# Smart Study Planner

Полная техническая документация, автоматически собранная из исходных материалов Buildin.AI.

## Содержание
Документация включает:
- концепцию
- требования
- архитектуру
- диаграммы
- API
- алгоритмы
`
  );

  const files = getAllFiles(importDir);

  const groups = {
    requirements: [],
    architecture: [],
    diagrams: [],
    api: [],
    algorithms: [],
    materials: [],
  };

  let count = 0;

  files.forEach((file) => {
    const ext = path.extname(file).toLowerCase();
    if (![".md", ".mdx"].includes(ext)) return;

    const raw = fs.readFileSync(file, "utf8");
    const title = path.basename(file);
    const section = detectSection(title, raw);

    const content = normalizeMarkdown(
      fixImages(raw, path.dirname(file)),
      title
    );

    const fileName = `${count + 1}-${slug(title)}.md`;
    const targetDir = path.join(docsDir, section);

    ensureDir(targetDir);

    fs.writeFileSync(path.join(targetDir, fileName), content);

    groups[section].push(`${section}/${fileName.replace(".md", "")}`);

    count++;
  });

  writeSidebar(groups);

  console.log(`\n✅ Готово`);
  console.log(`📄 Обработано файлов: ${count}`);
}

main();


