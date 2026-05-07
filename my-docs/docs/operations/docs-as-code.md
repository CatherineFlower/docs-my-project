---
sidebar_position: 1
title: Docs as Code
---

# Docs as Code

Документация проекта ведётся в формате Docs as Code. Это означает, что документационные файлы хранятся в Git-репозитории, изменяются через pull/commit workflow и публикуются автоматически.

## Инструменты

- Markdown — основной формат документации;
- Docusaurus — генератор сайта документации;
- Git и GitHub — хранение истории изменений;
- GitHub Pages — публикация сайта;
- PlantUML, BPMN, DMN, draw.io/dbdiagram — визуальные артефакты;
- OpenAPI и AsyncAPI — описание интерфейсов взаимодействия.

## Правила ведения

Каждый документ должен иметь frontmatter, заголовок первого уровня, краткое назначение, основное содержание и ссылки на связанные артефакты. Изображения хранятся в `static/img`, чтобы они открывались как в Docusaurus, так и в локальном предпросмотре IDE.

## Структура

```text
my-docs/
├── docs/
│   ├── concept/
│   ├── requirements/
│   ├── ui/
│   ├── architecture/
│   ├── processes/
│   ├── diagrams/
│   ├── api/
│   ├── algorithms/
│   ├── operations/
│   └── templates/
├── static/
├── sidebars.js
└── docusaurus.config.js
```
