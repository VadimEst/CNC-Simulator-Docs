export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "CNC Simulator Documentation",
      "logo": {
        "alt": "CNC Simulator",
        "src": "img/icon.png"
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
          "position": "right",
          "target": "_blank"
        },
        {
          "href": "https://github.com/timonweide/CNC-Simulator/releases",
          "label": "Download",
          "position": "right",
          "target": "_blank"
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
              "href": "https://github.com/timonweide/CNC-Simulator/issues",
              "target": "_blank"
            },
            {
              "label": "Create Ticket",
              "href": "https://github.com/timonweide/CNC-Simulator/issues/new/choose",
              "target": "_blank"
            }
          ]
        },
        {
          "title": "Miscellaneous",
          "items": [
            {
              "label": "Contributors",
              "href": "https://github.com/timonweide/CNC-Simulator/graphs/contributors",
              "target": "_blank"
            },
            {
              "label": "Custom Feedback",
              "href": "https://github.com/timonweide/CNC-Simulator/issues/new?assignees=&labels=&template=custom.md&title=",
              "target": "_blank"
            }
          ]
        },
        {
          "title": "Legal",
          "items": [
            {
              "label": "Imprint",
              "to": "https://timonwei.de/impressum/",
              "target": "_blank"
            },
            {
              "label": "Privacy Statement",
              "href": "https://timonwei.de/datenschutzerklaerung/",
              "target": "_blank"
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
  "favicon": "img/icon.png",
  "organizationName": "timonweide",
  "projectName": "CNC-Simulator",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "docs/user/",
          "sidebarPath": "C:\\Users\\i517805\\Documents\\GitHub\\CNC-Simulator-Docs\\sidebars.js",
          "editUrl": "https://github.com/timonweide/cnc-simulator-docs/edit/master/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/timonweide/cnc-simulator-docs/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "C:\\Users\\i517805\\Documents\\GitHub\\CNC-Simulator-Docs\\src\\css\\custom.css"
        }
      }
    ]
  ]
};