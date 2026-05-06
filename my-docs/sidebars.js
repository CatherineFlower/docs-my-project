const sidebars = {
  docsSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Требования',
      collapsed: false,
      items: [
        'requirements/business',
        'requirements/functional',
        'requirements/non-functional',
        'requirements/stakeholders-raci',
      ],
    },
    {
      type: 'category',
      label: 'UX и интерфейсы',
      collapsed: false,
      items: ['ui/wireframes'],
    },
    {
      type: 'category',
      label: 'Архитектура и данные',
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/data-storage',
        'architecture/erd',
        'architecture/integrations-platform',
      ],
    },
    {
      type: 'category',
      label: 'Процессы и диаграммы',
      collapsed: false,
      items: ['processes/bpmn-dmn', 'diagrams/sequence-use-case'],
    },
    {
      type: 'category',
      label: 'API',
      collapsed: false,
      items: ['api/rest-api', 'api/async-api'],
    },
    {
      type: 'category',
      label: 'Алгоритмы',
      collapsed: false,
      items: ['algorithms/planning-algorithm'],
    },
    {
      type: 'category',
      label: 'Docs as Code',
      collapsed: false,
      items: ['operations/docs-as-code', 'operations/deployment-github-pages'],
    },
  ],
};

export default sidebars;
