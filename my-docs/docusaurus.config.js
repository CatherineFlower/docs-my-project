import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Smart Study Planner',
  tagline: 'Техническая документация проекта',
  favicon: 'img/favicon.ico',
  url: 'https://catherineflower.github.io',
  baseUrl: '/docs-my-project/',
  organizationName: 'CatherineFlower',
  projectName: 'docs-my-project',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: [
    ['drawio', {}],
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: 'docs',
          editUrl: 'https://github.com/CatherineFlower/docs-my-project/tree/main/my-docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
    [
      'redocusaurus',
      {
        specs: [
          {
            spec: 'static/api/openapi.yaml',
            route: '/api/rest',
          },
        ],
        theme: {
          primaryColor: '#2563eb',
          options: {
            hideDownloadButton: false,
            expandResponses: '200,201',
          },
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/sequence-diagram.svg',
    navbar: {
      title: 'Smart Study Planner Docs',
      items: [
        {type: 'docSidebar', sidebarId: 'docsSidebar', position: 'left', label: 'Документация'},
        {to: '/api/rest', label: 'REST API', position: 'left'},
        {href: 'https://github.com/CatherineFlower/docs-my-project', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {title: 'Разделы', items: [
          {label: 'Обзор', to: '/docs/intro'},
          {label: 'Требования', to: '/docs/requirements/business'},
          {label: 'Архитектура', to: '/docs/architecture/overview'},
          {label: 'API', to: '/api/rest'},
        ]},
      ],
      copyright: `Smart Study Planner © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['yaml', 'json', 'sql'],
    },
  },
};

export default config;
