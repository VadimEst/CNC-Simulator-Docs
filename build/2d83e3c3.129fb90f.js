(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),d=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,s=p["".concat(i,".").concat(u)]||p[u]||m[u]||c;return n?r.a.createElement(s,l(l({ref:t},b),{},{components:n})):r.a.createElement(s,l({ref:t},b))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<c;b++)i[b]=n[b];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},66:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(6),c=(n(0),n(121)),i={id:"g28",title:"G28",sidebar_label:"G28"},l={unversionedId:"dev/code/g28",id:"dev/code/g28",isDocsHomePage:!1,title:"G28",description:"@package de.timonwei.cnc.workspace.commands.g",source:"@site/docs/dev/code/g28.md",slug:"/dev/code/g28",permalink:"/docs/dev/code/g28",editUrl:"https://github.com/timonweide/cnc-simulator-docs/edit/master/docs/dev/code/g28.md",version:"current",sidebar_label:"G28",sidebar:"devSidebar",previous:{title:"G03",permalink:"/docs/dev/code/g03"},next:{title:"Line",permalink:"/docs/dev/code/line"}},o=[{value:"Methods",id:"methods",children:[{value:"G28(String[] args)",id:"g28string-args",children:[]},{value:"calculate(Mill mill, boolean insertAtCurrentIndex)",id:"calculatemill-mill-boolean-insertatcurrentindex",children:[]}]}],b={rightToc:o};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"@package de.timonwei.cnc.workspace.commands.g   "))),Object(c.b)("p",null,"The public class ",Object(c.b)("strong",{parentName:"p"},"G28")," provides the functionality for the mill to return to the home point."),Object(c.b)("h2",{id:"methods"},"Methods"),Object(c.b)("h3",{id:"g28string-args"},"G28(String[] args)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Return Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameters"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"constructor")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"G28")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"args: String[]"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Creates an instance of Line.")))),Object(c.b)("h3",{id:"calculatemill-mill-boolean-insertatcurrentindex"},"calculate(Mill mill, boolean insertAtCurrentIndex)"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Return Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameters"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"void")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"calculate")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"mill: Mill, insertAtCurrentIndex: boolean"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Calculates the way to the home point")))))}d.isMDXComponent=!0}}]);