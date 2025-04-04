const createIT = {
  company: 'CreateIT',
  description:
    'Creating HTML web page patterns according to designs, email templates and projects for individual clients.',
  tasks: [],
  stack:
    'HTML5, CSS3, Bootstrap, Javascript(with jQuery), Ajax, Sass, Less, Pug(Jade)',
  label: '2014-2016',
};

export interface Project {
  company: string;
  description: string;
  imageName: string;
  label: string;
  link: string;
  project: string;
  stack: string;
  tasks: string[];
}

export const data: Project[] = [
  {
    company: '',
    description: '',
    tasks: [],
    stack: 'React, Redux, Express, Webpack, Node, SSR, Jest',
    project: 'Mysterious project ...',
    imageName: 'default',
    label: '2021-now',
    link: '',
  },
  {
    company: 'forBet',
    description:
      'Creating new mobile version(m.iforbet.pl) of core page. We used React and Node as our base with server side rendering. In the process of making we added support for Progressive Web App.',
    tasks: [],
    stack: 'React, Redux, Express, Webpack, Node, PWA, SSR',
    project: 'm.iforbet.pl',
    imageName: 'miforbet',
    label: '2018-2021',
    link: 'https://m.iforbet.pl/',
  },
  {
    company: 'SoftwarePlant',
    description:
      'Creating new features and fixing bugs in SoftwarePlant core aplications for Jira (BigPicture, BigGantt). I had opportunity to work in Jira both environments(server & cloud).',
    tasks: [],
    stack:
      'Angular 4/5, ES6, RXJS, TypeScript, Karma, Webpack, Jira, PCSS, Maven',
    project: 'BigPicture, BigGantt',
    imageName: 'bigpicture',
    label: '2017',
    link: 'https://softwareplant.com/',
  },
  {
    ...createIT,
    project: 'Disrupt',
    imageName: 'disrupt',
    link: 'http://preview.themeforest.net/item/disrupt-single-product-ecommerce-html-template/full_screen_preview/15080761',
  },
  {
    ...createIT,
    project: 'Estato',
    imageName: 'estato',
    link: 'http://preview.themeforest.net/item/estato-responsive-featured-real-estate-html-theme/full_screen_preview/10912023',
  },
  {
    ...createIT,
    project: 'Sella',
    imageName: 'sella',
    link: 'http://preview.themeforest.net/item/sella-marketing-html-template/full_screen_preview/14471583',
  },
  {
    ...createIT,
    project: 'Shop Locator plugin',
    imageName: 'locator',
    link: 'http://preview.codecanyon.net/item/jquery-shop-locator-/full_screen_preview/11541173',
  },
  {
    ...createIT,
    project: 'Tours',
    imageName: 'tours',
    link: 'http://preview.themeforest.net/item/tours-tickets-html-template-/full_screen_preview/13181326',
  },
  {
    ...createIT,
    project: 'Uacademy',
    imageName: 'uacademy',
    link: 'http://preview.themeforest.net/item/uacademy-learning-system-html-template/full_screen_preview/12328563',
  },
  {
    ...createIT,
    project: 'You',
    imageName: 'you',
    link: 'http://preview.themeforest.net/item/you-personal-html-template/full_screen_preview/10349875',
  },
];
