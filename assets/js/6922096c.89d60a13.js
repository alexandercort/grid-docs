"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[8807],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||i;return r?n.createElement(d,a(a({ref:t},l),{},{components:r})):n.createElement(d,a({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1031:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={description:"Some best practices for using Grid"},s=void 0,p={unversionedId:"platform/best-practices",id:"platform/best-practices",title:"best-practices",description:"Some best practices for using Grid",source:"@site/docs/platform/best-practices.md",sourceDirName:"platform",slug:"/platform/best-practices",permalink:"/platform/best-practices",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/platform/best-practices.md",tags:[],version:"current",lastUpdatedAt:1644341001,formattedLastUpdatedAt:"2/8/2022",frontMatter:{description:"Some best practices for using Grid"}},l=[],u={toc:l};function f(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Always specify all the necessary package versions in the requirements.txt. Most dependency issues can be resolved by running ",(0,i.kt)("inlineCode",{parentName:"li"},"pip freeze > requirements.txt")," in a place Grid has access to."),(0,i.kt)("li",{parentName:"ol"},"Don't use sessions for long running computations, instead use Grid run for async computations. The following steps will convert your notebook into a useable Python script by Grid:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},'Click "file"'),(0,i.kt)("li",{parentName:"ol"},'Click "download as"'),(0,i.kt)("li",{parentName:"ol"},'Select "Python (.py)"')))),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://user-images.githubusercontent.com/47154698/146114392-7864e073-f332-4512-9a02-bec98f5e48e0.mp4"},"https://user-images.githubusercontent.com/47154698/146114392-7864e073-f332-4512-9a02-bec98f5e48e0.mp4")))}f.isMDXComponent=!0}}]);