(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,O=d["".concat(c,".").concat(s)]||d[s]||m[s]||i;return n?r.a.createElement(O,o(o({ref:t},b),{},{components:n})):r.a.createElement(O,o({ref:t},b))}));function O(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},98:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),i=(n(0),n(121)),c={id:"invalidprogramfileexception",title:"InvalidProgramFileException",sidebar_label:"InvalidProgramFileException"},o={unversionedId:"dev/code/invalidprogramfileexception",id:"dev/code/invalidprogramfileexception",isDocsHomePage:!1,title:"InvalidProgramFileException",description:"@package de.timonwei.cnc.service.exceptions",source:"@site/docs/dev/code/invalidprogramfileexception.md",slug:"/dev/code/invalidprogramfileexception",permalink:"/docs/dev/code/invalidprogramfileexception",editUrl:"https://github.com/timonweide/cnc-simulator-docs/edit/master/docs/dev/code/invalidprogramfileexception.md",version:"current",sidebar_label:"InvalidProgramFileException",sidebar:"devSidebar",previous:{title:"InvalidCommandException",permalink:"/docs/dev/code/invalidcommandexception"},next:{title:"Tool",permalink:"/docs/dev/code/tool"}},l=[{value:"Public Methods",id:"public-methods",children:[{value:"InvalidProgramFileException()",id:"invalidprogramfileexception",children:[]},{value:"InvalidProgramFileException(String cmdName)",id:"invalidprogramfileexceptionstring-cmdname",children:[]},{value:"getMessage()",id:"getmessage",children:[]}]}],b={rightToc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"@package de.timonwei.cnc.service.exceptions"))),Object(i.b)("p",null,"The abstract class ",Object(i.b)("strong",{parentName:"p"},"InvalidProgramFileException")," extends Exception and provides a custom exception for invalid commands in program files."),Object(i.b)("h2",{id:"public-methods"},"Public Methods"),Object(i.b)("h3",{id:"invalidprogramfileexception"},"InvalidProgramFileException()"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Return Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameters"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"constructor")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"InvalidProgramFileException")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Creates an instance of InvalidProgramFileException.")))),Object(i.b)("h3",{id:"invalidprogramfileexceptionstring-cmdname"},"InvalidProgramFileException(String cmdName)"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Return Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameters"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"constructor")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"InvalidProgramFileException")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cmdName: String"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Creates an instance of InvalidProgramFileException with a command name.")))),Object(i.b)("h3",{id:"getmessage"},"getMessage()"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Return Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameters"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"String")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"getMessage")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Returns the exception message.")))))}p.isMDXComponent=!0}}]);