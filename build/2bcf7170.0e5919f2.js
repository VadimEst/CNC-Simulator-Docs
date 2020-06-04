(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{106:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(6),o=(r(0),r(119)),i={id:"getting-started",title:"Getting Started",sidebar_label:"Getting Started"},c={id:"dev/getting-started",title:"Getting Started",description:"This getting started guide assumes that the repository is already present on your local machine as described under Contribute.",source:"@site/docs/dev/getting-started.md",permalink:"/docs/dev/getting-started",editUrl:"https://github.com/timonweide/cnc-simulator-docs/edit/master/docs/dev/getting-started.md",sidebar_label:"Getting Started",sidebar:"devSidebar",previous:{title:"Contribute",permalink:"/docs/dev/contribute"},next:{title:"Scoping",permalink:"/docs/dev/scoping"}},l=[{value:"Run project",id:"run-project",children:[]},{value:"Build project",id:"build-project",children:[]}],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This getting started guide assumes that the repository is already present on your local machine as described under ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"contribute"}),"Contribute"),"."),Object(o.b)("h2",{id:"run-project"},"Run project"),Object(o.b)("p",null," On Windows start the VM with following options"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"--module-path Libraries/javafx-14-win/lib  \n--add-modules javafx.controls,javafx.fxml \n--add-exports javafx.graphics/com.sun.javafx.sg.prism=ALL-UNNAMED \n")),Object(o.b)("p",null," On Mac OS X start the VM with following options"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"--module-path Libraries/javafx-14-osx \n--add-modules javafx.controls,javafx.fxml \n--add-exports javafx.graphics/com.sun.javafx.sg.prism=ALL-UNNAMED\n")),Object(o.b)("hr",null),Object(o.b)("h2",{id:"build-project"},"Build project"),Object(o.b)("p",null,"tbd"))}p.isMDXComponent=!0},119:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=n,f=d["".concat(i,".").concat(b)]||d[b]||s[b]||o;return r?a.a.createElement(f,c(c({ref:t},u),{},{components:r})):a.a.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);