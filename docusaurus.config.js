module.exports = {
    title: 'CNC Simulator Documentation',
    tagline: 'Guide how to use the CNC Simulator',
    url: 'https://docs.cnc.timon.cloud',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'timonweide', // Usually your GitHub org/user name.
    projectName: 'CNC-Simulator', // Usually your repo name.
    themeConfig: {
        navbar: {
            title: 'CNC Simulator Documentation',
            logo: {
                alt: 'CNC Simulator',
                src: 'img/logo.svg',
            },
            links: [{
                    to: 'docs/user/userdocs/',
                    activeBasePath: 'docs/user/',
                    label: 'User Documentation',
                    position: 'right',
                },
                {
                    to: 'docs/dev/devdocs/',
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
                            label: 'Style Guide',
                            to: 'docs/user/',
                        },
                        {
                            label: 'Second Doc',
                            to: 'docs/doc2/',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Bug Reporting',
                            href: 'https://github.com/timonweide/CNC-Simulator/issues/new?assignees=&labels=&template=bug_report.md&title=',
                        },
                        {
                            label: 'Feature Request',
                            href: 'https://github.com/timonweide/CNC-Simulator/issues/new?assignees=&labels=&template=feature_request.md&title=',
                        },
                        {
                            label: 'Custom Feedback',
                            href: 'https://github.com/timonweide/CNC-Simulator/issues/new?assignees=&labels=&template=custom.md&title=',
                        },
                    ],
                },
                {
                    title: 'More',
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