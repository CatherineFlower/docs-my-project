// @ts-check

const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Концепция',
      collapsed: false,
      items: ['concept/overview', 'concept/business-model', 'concept/stakeholders'],
    },
    {
      type: 'category',
      label: 'Требования',
      collapsed: false,
      items: ['requirements/business-requirements', 'requirements/functional-requirements', 'requirements/non-functional-requirements', 'requirements/raci'],
    },
    {
      type: 'category',
      label: 'UI и сценарии',
      collapsed: false,
      items: ['ui/wireframes', 'ui/user-scenarios', 'ui/ui-api-mapping'],
    },
    {
      type: 'category',
      label: 'Архитектура',
      collapsed: false,
      items: ['architecture/overview', 'architecture/components', 'architecture/data-storage', 'architecture/data-model', 'architecture/erd', 'architecture/bpmn', 'architecture/integrations-platform'],
    },
    {
      type: 'category',
      label: 'Процессы',
      collapsed: false,
      items: ['processes/bpmn-dmn'],
    },
    {
      type: 'category',
      label: 'Диаграммы',
      collapsed: false,
      items: ['diagrams/use-case', 'diagrams/sequence', 'diagrams/erd'],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: ['api/overview', 'api/rest-api', 'api/async-api'],
    },
    {
      type: 'category',
      label: 'Алгоритмы',
      collapsed: false,
      items: ['algorithms/planning-algorithm'],
    },
    {
      type: 'category',
      label: 'Эксплуатация',
      collapsed: false,
      items: ['operations/docs-as-code', 'operations/github-pages'],
    },
    {
      type: 'category',
      label: 'Шаблоны',
      collapsed: true,
      items: ['templates/api-template', 'templates/architecture-template', 'templates/algorithm-template'],
    },
  ],
};

module.exports = sidebars;
