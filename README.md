# CNC-Simulator Documentation

This documentation is for the [CNC Simulator](https://github.com/timonweide/CNC-Simulator).

### Installation
When you want to start or build for the first time, you have to install alle required node packages.

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and open up a browser window. Most changes are reflected live without having to restart the server. The local server can be reached by opening localhost:3000 in browser.

To stop the local server use CTRL + C in shell.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

To deploy the changes to the [live site](https://docs.cnc.timon.cloud/) push your changes to the repository. The changes will be pulled to the webserver automatically.

### Contribute to the docs

To contribute to the docs, just edit or create a Markdown file in the `/docs` folder. To add a new site to the sidebar, edit `sidebar.js.
