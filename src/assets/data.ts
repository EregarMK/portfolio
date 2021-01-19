const createIT = {
        company: 'CreateIT',
        description: 'Creating HTML web page patterns according to designs, email templates and projects for individual clients.',
        tasks: [
            'web pages, newsletters and emails for our individual clients',
            'themes, plugins for themeforest.net',
            'debugging and testing websites on different browsers and platforms',
            'responsive sites for Android, iOS'
        ],
        stack: 'HTML5, CSS3, Bootstrap, Javascript(with jQuery), Ajax, Sass, Less, Pug(Jade)',
        label: '2014-2016'
}

const  data = [
    {
        company: 'forBet Zakłady Bukmacherskie',
        description: 'Creating new mobile version(m.iforbet.pl) of core page. We used React and Node as our base with server side rendering. In the process of making we added support for Progressive Web App.',
        tasks: [
            'taking care mostly over client side',
            'adding features according to prepared designs',
            'solving problems during development',
            'code review'
        ],
        stack: 'React, Redux, Express, Webpack, Node',
        project: 'Mobile version of m.iforbet.pl',
        image: 'miforbet',
        label: '2018-2020',
        link: 'https://m.iforbet.pl/'
    },
    {
        company: 'SoftwarePlant',
        description: 'Creating new features and fixing bugs in SoftwarePlant core aplications for Jira (BigPicture, BigGantt). I had opportunity to work in Jira both environments(server & cloud).',
        tasks: [],
        stack: 'Angular 4/5, ES6, RXJS, TypeScript, Karma, Webpack, Jira, PCSS, Maven',
        project: 'BigPicture, BigGantt',
        image: 'bigpicture',
        label: '2017',
        link: 'https://softwareplant.com/'
    },
    {
        ...createIT,
        project: 'Disrupt',
        image: 'disrupt',
        link: 'http://preview.themeforest.net/item/disrupt-single-product-ecommerce-html-template/full_screen_preview/15080761'
    },
    {
        ...createIT,
        project: 'Estato',
        image: 'estato',
        link: 'http://preview.themeforest.net/item/estato-responsive-featured-real-estate-html-theme/full_screen_preview/10912023'
    },
    {
        ...createIT,
        project: 'Sella',
        image: 'sella',
        link: 'http://preview.themeforest.net/item/sella-marketing-html-template/full_screen_preview/14471583'
    },
    {
        ...createIT,
        project: 'Shop Locator plugin',
        image: 'locator',
        link: 'http://preview.codecanyon.net/item/jquery-shop-locator-/full_screen_preview/11541173'
    },
    {
        ...createIT,
        project: 'Tours',
        image: 'tours',
        link: 'http://preview.themeforest.net/item/tours-tickets-html-template-/full_screen_preview/13181326'
    },
    {
        ...createIT,
        project: 'Uacademy',
        image: 'uacademy',
        link: 'http://preview.themeforest.net/item/uacademy-learning-system-html-template/full_screen_preview/12328563'
    },
    {
        ...createIT,
        project: 'You',
        image: 'You',
        link: 'http://preview.themeforest.net/item/you-personal-html-template/full_screen_preview/10349875'
    },
]

export default data