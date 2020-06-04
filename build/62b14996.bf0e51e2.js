(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(119)),a={id:"contribute",title:"Contribute",sidebar_label:"Contribute"},c={id:"dev/contribute",title:"Contribute",description:"The project repository is released on GitHub.com and the main contributors are @floriankoopmann, @yannikpfrengle and @timonweide.",source:"@site/docs/dev/contribute.md",permalink:"/docs/dev/contribute",editUrl:"https://github.com/timonweide/cnc-simulator-docs/edit/master/docs/dev/contribute.md",sidebar_label:"Contribute",sidebar:"devSidebar",previous:{title:"Developer Documentation",permalink:"/docs/dev/overview"},next:{title:"Getting Started",permalink:"/docs/dev/getting-started"}},l=[{value:"Code contribution",id:"code-contribution",children:[]},{value:"Contribute to the Documentation",id:"contribute-to-the-documentation",children:[{value:"Installation",id:"installation",children:[]},{value:"Local Development",id:"local-development",children:[]},{value:"Build",id:"build",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Contribute to the docs",id:"contribute-to-the-docs",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The project repository is released on ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/timonweide/CNC-Simulator"}),"GitHub.com")," and the main contributors are ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/floriankoopmann"}),"@floriankoopmann"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/yannikpfrengle"}),"@yannikpfrengle")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/timonweide"}),"@timonweide"),"."),Object(i.b)("hr",null),Object(i.b)("h2",{id:"code-contribution"},"Code contribution"),Object(i.b)("p",null,"To contribute just clone or fork the repository to your local machine and start developing. The used IDE is ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jetbrains.com/idea/"}),"IntelliJ")," but it's possible to use other IDEs instead (for example ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.eclipse.org"}),"Eclipse"),"). To get an Eclipse specific project file use the ",Object(i.b)("inlineCode",{parentName:"p"},"eclipse_project.zip")," file in the repository. The latest project version can be obtained by contacting ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"mailto:mail@timonwei.de"}),"@timonweide"),". Information on the used libraries can be found under ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"libraries"}),"Libraries")),Object(i.b)("hr",null),Object(i.b)("h2",{id:"contribute-to-the-documentation"},"Contribute to the Documentation"),Object(i.b)("p",null,"This documentation is open source, too. So you can contribute and share any changes you made in the project for other users. The documentation repository can be found ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/timonweide/CNC-Simulator-Docs"}),"here"),"."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)("p",null,"When you want to start or build for the first time, you have to install all required node packages in the root folder of the repository."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm install\n")),Object(i.b)("h3",{id:"local-development"},"Local Development"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm start\n")),Object(i.b)("p",null,"This command starts a local development server and open up a browser window if it's executed in the root folder of the repository. Most changes are reflected live without having to restart the server. The local server can be reached by opening localhost:3000 in browser."),Object(i.b)("p",null,"To stop the local server use CTRL + C in shell."),Object(i.b)("h3",{id:"build"},"Build"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm run build\n")),Object(i.b)("p",null,"This command generates static content into the ",Object(i.b)("inlineCode",{parentName:"p"},"build")," directory and can be served using any static contents hosting service."),Object(i.b)("h3",{id:"deployment"},"Deployment"),Object(i.b)("p",null,"To deploy the changes to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.cnc.timon.cloud/"}),"live site")," push your changes to the repository. The changes will be pulled to the webserver automatically."),Object(i.b)("h3",{id:"contribute-to-the-docs"},"Contribute to the docs"),Object(i.b)("p",null,"To contribute to the docs, just edit or create a Markdown file in the ",Object(i.b)("inlineCode",{parentName:"p"},"/docs")," folder. To add a new site to the sidebar, edit ",Object(i.b)("inlineCode",{parentName:"p"},"sidebar.js"),"."))}p.isMDXComponent=!0},119:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var b=o.a.createContext({}),p=function(e){var t=o.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},s=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,h=u["".concat(a,".").concat(s)]||u[s]||d[s]||i;return n?o.a.createElement(h,c(c({ref:t},b),{},{components:n})):o.a.createElement(h,c({ref:t},b))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var b=2;b<i;b++)a[b]=n[b];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);