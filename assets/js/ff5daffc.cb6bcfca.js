"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[5624],{3905:function(t,e,r){r.d(e,{Zo:function(){return u},kt:function(){return d}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),l=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},u=function(t){var e=l(t.components);return a.createElement(o.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),p=l(r),d=n,m=p["".concat(o,".").concat(d)]||p[d]||f[d]||i;return r?a.createElement(m,c(c({ref:e},u),{},{components:r})):a.createElement(m,c({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,c=new Array(i);c[0]=p;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:n,c[1]=s;for(var l=2;l<i;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8042:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var a=r(7462),n=r(3366),i=(r(7294),r(3905)),c=["components"],s={},o="Artifacts",l={unversionedId:"products/runs/artifacts",id:"products/runs/artifacts",title:"Artifacts",description:"Saving artifacts",source:"@site/docs/products/runs/artifacts.md",sourceDirName:"products/runs",slug:"/products/runs/artifacts",permalink:"/products/runs/artifacts",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/products/runs/artifacts.md",tags:[],version:"current",lastUpdatedAt:1644341001,formattedLastUpdatedAt:"2/8/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Viewing logs",permalink:"/products/runs/viewing-logs"},next:{title:"Metrics (charts)",permalink:"/products/runs/metrics-charts"}},u=[{value:"Saving artifacts",id:"saving-artifacts",children:[],level:2},{value:"Access artifacts via the UI",id:"access-artifacts-via-the-ui",children:[],level:2},{value:"Share artifacts",id:"share-artifacts",children:[],level:2},{value:"Access artifacts via the CLI",id:"access-artifacts-via-the-cli",children:[{value:"Artifacts for a run",id:"artifacts-for-a-run",children:[],level:3},{value:"Artifacts for an experiment",id:"artifacts-for-an-experiment",children:[],level:3}],level:2}],f={toc:u};function p(t){var e=t.components,s=(0,n.Z)(t,c);return(0,i.kt)("wrapper",(0,a.Z)({},f,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"artifacts"},"Artifacts"),(0,i.kt)("h2",{id:"saving-artifacts"},"Saving artifacts"),(0,i.kt)("p",null,"Anytime your script saves artifacts, Grid captures those for you. It does not matter which folder you save artifacts to... Grid will automatically detect those."),(0,i.kt)("p",null,"Try ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/williamFalcon/hello/blob/main/hello.py"},"hello.py")," for an example"),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(746).Z})),(0,i.kt)("h2",{id:"access-artifacts-via-the-ui"},"Access artifacts via the UI"),(0,i.kt)("p",null,"Artifacts are the output produced by the training process."),(0,i.kt)("p",null,"To access artifacts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the experiments"),(0,i.kt)("li",{parentName:"ul"},"Click artifacts")),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(4146).Z})),(0,i.kt)("h2",{id:"share-artifacts"},"Share artifacts"),(0,i.kt)("p",null,"Click the link to the right of the artifact to copy the link."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(7951).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Artifact links have an expiration of 24 hours, new link is generated every 24 hours."))),(0,i.kt)("p",null,"If you delete runs and experiments, then artifacts are deleted, Grid will never delete artifacts unless you want them to be deleted"),(0,i.kt)("h2",{id:"access-artifacts-via-the-cli"},"Access artifacts via the CLI"),(0,i.kt)("p",null,"To get artifacts via the CLI, find the run name (via the UI or CLI)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# if it's still running\ngrid status\n\n# if it's completed\ngrid history\n")),(0,i.kt)("h3",{id:"artifacts-for-a-run"},"Artifacts for a run"),(0,i.kt)("p",null,"Get the artifacts for a run"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"grid artifacts run-name\n")),(0,i.kt)("h3",{id:"artifacts-for-an-experiment"},"Artifacts for an experiment"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# view the experiments in the run\ngrid status run-name\n")),(0,i.kt)("p",null,"get the artifacts"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# get the artifacts (downloads by default to /grid_artifacts)\n# N in expN means the ith experiment (ie: exp0, exp1, exp3, ..., expN)\ngrid artifacts runname-expN\n")))}p.isMDXComponent=!0},4146:function(t,e,r){e.Z=r.p+"assets/images/art-8b95f3f077c18afeb6d53a826635f1ad.gif"},746:function(t,e,r){e.Z=r.p+"assets/images/runs-artifacts-04129351b1e3a4c1a034ef9e1a3fbcd8.png"},7951:function(t,e,r){e.Z=r.p+"assets/images/sharing-artifacts-6f3df459f719b5f88149cd0fd5e0663c.png"}}]);