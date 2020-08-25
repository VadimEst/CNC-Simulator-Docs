module.exports = {
    title: 'CNC Simulator Documentation',
    tagline: 'Guide how to use the CNC Simulator',
    url: 'https://docs.cnc.timon.cloud',
    baseUrl: '/',
    favicon: 'img/icon.png',
    organizationName: 'timonweide', // Usually your GitHub org/user name.
    projectName: 'CNC-Simulator', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'CNC Simulator Documentation',
            logo: {
                alt: 'CNC Simulator',
                src: 'img/icon.png',
            },
            links: [{
                    to: 'docs/user/overview/',
                    activeBasePath: 'docs/user/',
                    label: 'User Documentation',
                    position: 'right',
                },
                {
                    to: 'docs/dev/overview/',
                    activeBasePath: 'docs/dev/',
                    label: 'Developer Documentation',
                    position: 'right',
                },
                {
                    href: 'https://github.com/timonweide/cnc-simulator',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                            label: 'User Documentation',
                            to: 'docs/user/overview/',
                        },
                        {
                            label: 'Developer Documentation',
                            to: 'docs/dev/overview/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Ticket System',
                            href: 'https://github.com/timonweide/CNC-Simulator/issues',
                        },
                        {
                            label: 'Create Ticket',
                            href: 'https://github.com/timonweide/CNC-Simulator/issues/new/choose',
                        },
                    ],
                },
                {
                    title: 'Miscellaneous',
                    items: [{
                            label: 'Contributors',
                            href: 'https://github.com/timonweide/CNC-Simulator/graphs/contributors',
                        },
                        {
                            label: 'Custom Feedback',
                            href: 'https://github.com/timonweide/CNC-Simulator/issues/new?assignees=&labels=&template=custom.md&title=',
                        },
                    ],
                },
                {
                    title: 'Legal',
                    items: [{
                            label: 'Imprint',
                            to: 'https://timonwei.de/impressum/',
                        },
                        {
                            label: 'Privacy Statement',
                            href: 'https://timonwei.de/datenschutzerklaerung/',
                        },
                    ],
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Florian Koopmann, Yannik Pfrengle, Timon Weide`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    // It is recommended to set document id as docs home page (`docs/` path).
                    homePageId: 'docs/user/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/timonweide/cnc-simulator-docs/edit/master/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    editUrl: 'https://github.com/timonweide/cnc-simulator-docs/edit/master/website/blog/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],
};