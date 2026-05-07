// @ts-check

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

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'ru',
    locales: ['ru'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          editUrl:
            'https://github.com/CatherineFlower/docs-my-project/tree/main/my-docs/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themeConfig: {
    image: 'img/social-card.png',

    navbar: {
      title: 'Smart Study Planner',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: 'Документация',
        },
        {
          href: 'https://github.com/CatherineFlower/docs-my-project',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Документация',
          items: [
            {
              label: 'Обзор проекта',
              to: '/',
            },
            {
              label: 'REST API',
              to: '/api/rest-api',
            },
            {
              label: 'AsyncAPI',
              to: '/api/async-api',
            },
          ],
        },
        {
          title: 'Репозиторий',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CatherineFlower/docs-my-project',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Smart Study Planner.`,
    },

    prism: {
      additionalLanguages: ['yaml', 'json', 'sql'],
    },
  },
};

module.exports = config;