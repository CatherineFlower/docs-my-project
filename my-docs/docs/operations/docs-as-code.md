---
sidebar_position: 1
title: Docs as Code
---

# Docs as Code

## Подход

Документация хранится в Git-репозитории в виде Markdown, YAML, PlantUML, DMN, DBML и draw.io файлов. Такой подход позволяет версионировать изменения, выполнять review через pull request и публиковать документацию автоматически.

## Структура проекта

```text
smart-study-planner-docs/
├── docs/
│   ├── requirements/
│   ├── ui/
│   ├── architecture/
│   ├── processes/
│   ├── diagrams/
│   ├── api/
│   ├── algorithms/
│   └── operations/
├── static/
│   ├── api/
│   ├── diagrams/
│   └── img/
├── src/
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

## Основные команды

```bash
npm install
npm run start
npm run build
```

## Правила ведения документации

Каждый раздел должен иметь понятное название, front matter для Docusaurus и ссылку на связанные артефакты. Диаграммы должны храниться как исходники и как изображения, чтобы документация была удобна и для чтения, и для редактирования.

## Проверка перед отправкой

Перед push необходимо выполнить `npm run build`. Если сборка падает, нужно проверить битые ссылки, некорректный front matter, MDX-синтаксис и ссылки на изображения.
