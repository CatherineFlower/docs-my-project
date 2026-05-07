---
sidebar_position: 2
title: GitHub Pages
---

# GitHub Pages

Проект публикуется на GitHub Pages через Docusaurus.

## Настройки Docusaurus

В `docusaurus.config.js` должны быть указаны значения:

```js
url: 'https://catherineflower.github.io',
baseUrl: '/docs-my-project/',
organizationName: 'CatherineFlower',
projectName: 'docs-my-project',
deploymentBranch: 'gh-pages'
```

## Локальная проверка

```bash
cd my-docs
npm install
npm run build
npm run start
```

## Публикация

Публикация может выполняться вручную:

```bash
GIT_USER=CatherineFlower npm run deploy
```

Или автоматически через GitHub Actions workflow `.github/workflows/deploy.yml`.

## Настройка Pages

В настройках репозитория нужно открыть раздел Pages и выбрать ветку `gh-pages`.
