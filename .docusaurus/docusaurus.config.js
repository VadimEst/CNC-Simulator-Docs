export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "CNC Simulator Documentation",
      "logo": {
        "alt": "CNC Simulator",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/user/overview/",
          "activeBasePath": "docs/user/",
          "label": "User Documentation",
          "position": "right"
        },
        {
          "to": "docs/dev/overview/",
          "activeBasePath": "docs/dev/",
          "label": "Developer Documentation",
          "position": "right"
        },
        {
          "href": "https://github.com/timonweide/cnc-simulator",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "User Documentation",
              "to": "docs/user/overview/"
            },
            {
              "label": "Developer Documentation",
              "to": "docs/dev/overview/"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Ticket System",
              "href": "https://github.com/timonweide/CNC-Simulator/issues"
            },
            {
              "label": "Create Ticket",
              "href": "https://github.com/timonweide/CNC-Simulator/issues/new/choose"
            }
          ]
        },
        {
          "title": "Miscellaneous",
          "items": [
            {
              "label": "Contributors",
              "href": "https://github.com/timonweide/CNC-Simulator/graphs/contributors"
            },
            {
              "label": "Feature Request",
              "href": "https://github.com/timonweide/CNC-Simulator/issues/new?assignees=&labels=&template=feature_request.md&title="
            },
            {
              "label": "Custom Feedback",
              "href": "https://github.com/timonweide/CNC-Simulator/issues/new?assignees=&labels=&template=custom.md&title="
            }
          ]
        },
        {
          "title": "Legal",
          "items": [
            {
              "label": "Imprint",
              "to": "https://timonwei.de/impressum/"
            },
            {
              "label": "Privacy Statement",
              "href": "https://timonwei.de/datenschutzerklaerung/"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Florian Koopmann, Yannik Pfrengle, Timon Weide"
    }
  },
  "title": "CNC Simulator Documentation",
  "tagline": "Guide how to use the CNC Simulator",
  "url": "https://docs.cnc.timon.cloud",
  "baseUrl": "/",
  "favicon": "img/favicon.ico",
  "organizationName": "timonweide",
  "projectName": "CNC-Simulator",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "docs/user/",
          "sidebarPath": "/Users/timonweide/Entwicklung/CNC-Simulator-Docs/sidebars.js",
          "editUrl": "https://github.com/timonweide/cnc-simulator-docs/edit/master/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/timonweide/cnc-simulator-docs/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/timonweide/Entwicklung/CNC-Simulator-Docs/src/css/custom.css"
        }
      }
    ]
  ]
};