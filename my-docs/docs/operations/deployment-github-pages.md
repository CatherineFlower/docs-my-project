---
sidebar_position: 2
title: Публикация на GitHub Pages
---

# Публикация на GitHub Pages

## Настройки Docusaurus

Для репозитория `CatherineFlower/docs-my-project` должны быть установлены следующие значения:

```js
url: 'https://catherineflower.github.io',
baseUrl: '/docs-my-project/',
organizationName: 'CatherineFlower',
projectName: 'docs-my-project',
deploymentBranch: 'gh-pages'
```

Эти параметры уже внесены в `docusaurus.config.js` из архива.

## Ручной деплой

```bash
cd my-docs
npm install
npm run build
GIT_USER=CatherineFlower npm run deploy
```

После деплоя сайт должен быть доступен по адресу:

```text
https://catherineflower.github.io/docs-my-project/
```

## Деплой через GitHub Actions

В архив добавлен файл `.github/workflows/deploy.yml`. Он собирает сайт при push в ветку `main` и публикует содержимое папки `build` в ветку `gh-pages`.

## Настройка GitHub Pages

В настройках репозитория нужно открыть **Settings → Pages** и выбрать публикацию из ветки `gh-pages`, папка `/root`.

## Типовые причины ошибок

Чаще всего проект ломается из-за неправильных `url`, `baseUrl`, `organizationName`, `projectName`, битых ссылок в sidebar, отсутствующих файлов, случайно импортированных папок из старых документов и отсутствующих npm-зависимостей для плагинов.
