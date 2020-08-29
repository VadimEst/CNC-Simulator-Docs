(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),b=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=b(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=b(n),s=a,u=m["".concat(i,".").concat(s)]||m[s]||p[s]||c;return n?r.a.createElement(u,o(o({ref:t},d),{},{components:n})):r.a.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=s;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<c;d++)i[d]=n[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},53:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),c=(n(0),n(121)),i={id:"invalidcommandexception",title:"InvalidCommandException",sidebar_label:"InvalidCommandException"},o={unversionedId:"dev/code/invalidcommandexception",id:"dev/code/invalidcommandexception",isDocsHomePage:!1,title:"InvalidCommandException",description:"@package de.timonwei.cnc.service.exceptions",source:"@site/docs/dev/code/invalidcommandexception.md",slug:"/dev/code/invalidcommandexception",permalink:"/docs/dev/code/invalidcommandexception",editUrl:"https://github.com/timonweide/cnc-simulator-docs/edit/master/docs/dev/code/invalidcommandexception.md",version:"current",sidebar_label:"InvalidCommandException",sidebar:"devSidebar",previous:{title:"MillOutOfBoundsException",permalink:"/docs/dev/code/milloutofboundsexception"},next:{title:"InvalidProgramFileException",permalink:"/docs/dev/code/invalidprogramfileexception"}},l=[{value:"Public Methods",id:"public-methods",children:[{value:"InvalidCommandException(String cmdName)",id:"invalidcommandexceptionstring-cmdname",children:[]},{value:"getMessage()",id:"getmessage",children:[]}]}],d={rightToc:l};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"@package de.timonwei.cnc.service.exceptions"))),Object(c.b)("p",null,"The class ",Object(c.b)("strong",{parentName:"p"},"InvalidCommandException")," extends Exception and provides a custom exception for invalid entered commands in the terminal."),Object(c.b)("h2",{id:"public-methods"},"Public Methods"),Object(c.b)("h3",{id:"invalidcommandexceptionstring-cmdname"},"InvalidCommandException(String cmdName)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Return Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameters"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"constructor")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"InvalidCommandException")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"cmdName: String"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Creates an instance of InvalidCommandException.")))),Object(c.b)("h3",{id:"getmessage"},"getMessage()"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Return Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameters"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"String")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"getMessage")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Returns the exception message.")))))}b.isMDXComponent=!0}}]);