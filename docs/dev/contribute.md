---
id: contribute
title: Contribute
sidebar_label: Contribute
---

The project repository is released on [GitHub.com](https://github.com/timonweide/CNC-Simulator) and the main contributors are [@floriankoopmann](https://github.com/floriankoopmann), [@yannikpfrengle](https://github.com/yannikpfrengle) and [@timonweide](https://github.com/timonweide).

---

## Code contribution

To contribute just clone or fork the repository to your local machine and start developing. You can use [IntelliJ](https://www.jetbrains.com/idea/), [Eclipse](https://www.eclipse.org) or any other Java IDE that supports [Maven](https://maven.apache.org/). Information on the used libraries can be found under [Libraries](libraries)

### Run from IDE

The project is based on [Maven](https://maven.apache.org/). To run the project use your IDE or Maven CLI execute javafx:run. The command will download all the required dependencies defined in the `pom.xml`.

```
$ mvn clean
$ mvn javafx:run
```

---

## Contribute to the Documentation

This documentation is open source, too. You can contribute and share any changes you made in the project for other users. The documentation repository can be found [here](https://github.com/timonweide/CNC-Simulator-Docs).

### Installation
When you want to start or build for the first time, you have to install all required node packages in the root folder of the repository.

```
$ npm install
```

### Local Development

```
$ npm start
```

This command starts a local development server and open up a browser window if it's executed in the root folder of the repository. Most changes are reflected live without having to restart the server. The local server can be reached by opening [localhost:3000](http://localhost:3000) in browser.

To stop the local server use CTRL + C in shell.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

To deploy the changes to the [live site](https://docs.cnc.timon.cloud/) push your changes to the repository. The changes will be pulled to the webserver automatically.

### Contribute to the docs

To contribute to the docs, just edit or create a Markdown file in the `/docs` folder. To add a new site to the sidebar, edit `sidebar.js`. Images are stored in `/static/img`folder.
