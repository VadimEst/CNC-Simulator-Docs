(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{121:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=r.a.createContext({}),p=function(e){var t=r.a.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},O=function(e){var t=p(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},o=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),O=p(a),o=n,m=O["".concat(l,".").concat(o)]||O[o]||j[o]||b;return a?r.a.createElement(m,c(c({ref:t},d),{},{components:a})):r.a.createElement(m,c({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=o;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var d=2;d<b;d++)l[d]=a[d];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}o.displayName="MDXCreateElement"},68:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),b=(a(0),a(121)),l={id:"userinterface",title:"UserInterface",sidebar_label:"UserInterface"},c={unversionedId:"dev/code/userinterface",id:"dev/code/userinterface",isDocsHomePage:!1,title:"UserInterface",description:"@package de.timonwei.cnc.ui",source:"@site/docs/dev/code/userinterface.md",slug:"/dev/code/userinterface",permalink:"/docs/dev/code/userinterface",editUrl:"https://github.com/timonweide/cnc-simulator-docs/edit/master/docs/dev/code/userinterface.md",version:"current",sidebar_label:"UserInterface",sidebar:"devSidebar",previous:{title:"SettingsPopover",permalink:"/docs/dev/code/settingspopover"},next:{title:"UI_Left",permalink:"/docs/dev/code/ui_left"}},i=[{value:"Methods",id:"methods",children:[{value:"UserInterface()",id:"userinterface",children:[]},{value:"resizeCanvas()",id:"resizecanvas",children:[]},{value:"createDrawingCanvas()",id:"createdrawingcanvas",children:[]},{value:"createScene()",id:"createscene",children:[]},{value:"importProgram()",id:"importprogram",children:[]},{value:"updatePosition()",id:"updateposition",children:[]},{value:"updateSpindleState(Tool.SpindleState state)",id:"updatespindlestatetoolspindlestate-state",children:[]},{value:"updateTemperatureCoolantState()",id:"updatetemperaturecoolantstate",children:[]},{value:"fadeTemperature()",id:"fadetemperature",children:[]},{value:"startIdle()",id:"startidle",children:[]},{value:"stopIdle()",id:"stopidle",children:[]},{value:"updateMillSpeed(double value)",id:"updatemillspeeddouble-value",children:[]},{value:"updateCoolantStatus(boolean isCoolant)",id:"updatecoolantstatusboolean-iscoolant",children:[]},{value:"calcSizeFactor()",id:"calcsizefactor",children:[]},{value:"addProcessedCommand(MillCommand processedCommand, String executionTime)",id:"addprocessedcommandmillcommand-processedcommand-string-executiontime",children:[]}]}],d={rightToc:i};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"@package de.timonwei.cnc.ui"))),Object(b.b)("p",null,"The public class ",Object(b.b)("strong",{parentName:"p"},"UserInterface")," provides the basic structure for the UserInterface."),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"userinterface"},"UserInterface()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"constructor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"UserInterface")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creates an instance of Stage")))),Object(b.b)("h3",{id:"resizecanvas"},"resizeCanvas()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"resizeCanvas")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Resizes the already existing Drawing Canvas or creates a new one if no Drawing Canvas exist")))),Object(b.b)("h3",{id:"createdrawingcanvas"},"createDrawingCanvas()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"createDrawingCanvas")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creates a Drawing Canvas")))),Object(b.b)("h3",{id:"createscene"},"createScene()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Scene")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"createScene")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creates and sets a new Scene")))),Object(b.b)("h3",{id:"importprogram"},"importProgram()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"importProgram")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Imports a program from a json file")))),Object(b.b)("h3",{id:"updateposition"},"updatePosition()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"updatePosition")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"v: Vector2<Double",">"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Updates the current position on the right side of the UI")))),Object(b.b)("h3",{id:"updatespindlestatetoolspindlestate-state"},"updateSpindleState(Tool.SpindleState state)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"updateSpindleState")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"state: Tool.SpindleState"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Updates the spindle status on the right side of the UI")))),Object(b.b)("h3",{id:"updatetemperaturecoolantstate"},"updateTemperatureCoolantState()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"updateTemperatureCoolantState")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Updates the temperature status on the right side of the UI")))),Object(b.b)("h3",{id:"fadetemperature"},"fadeTemperature()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"fadeTemperature")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Lets the temperature fade")))),Object(b.b)("h3",{id:"startidle"},"startIdle()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"startIdle")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Starts the IdleTimer")))),Object(b.b)("h3",{id:"stopidle"},"stopIdle()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"stopIdle")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stops the IdleTimer")))),Object(b.b)("h3",{id:"updatemillspeeddouble-value"},"updateMillSpeed(double value)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"updateMillSpeed")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"value: double"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Updates the mill speed")))),Object(b.b)("h3",{id:"updatecoolantstatusboolean-iscoolant"},"updateCoolantStatus(boolean isCoolant)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"updateCoolantStatus")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"isCoolant: boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Updates the image if the coolant status")))),Object(b.b)("h3",{id:"calcsizefactor"},"calcSizeFactor()"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"double")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"calcSizeFactor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Calculates the size factor for the user\xb4s screen")))),Object(b.b)("h3",{id:"addprocessedcommandmillcommand-processedcommand-string-executiontime"},"addProcessedCommand(MillCommand processedCommand, String executionTime)"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Return Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameters"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"void")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"addProcessedCommand")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"processedCommand: MillCommand, executionTime: String"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Adds processed command with its execution time to the table")))))}p.isMDXComponent=!0}}]);