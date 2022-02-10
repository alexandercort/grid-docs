"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[8215],{3905:function(t,e,a){a.d(e,{Zo:function(){return l},kt:function(){return m}});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),u=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},l=function(t){var e=u(t.components);return r.createElement(p.Provider,{value:e},t.children)},i={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,o=t.originalType,p=t.parentName,l=c(t,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(p,".").concat(m)]||d[m]||i[m]||o;return a?r.createElement(h,s(s({ref:e},l),{},{components:a})):r.createElement(h,s({ref:e},l))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=a.length,s=new Array(o);s[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=t,c.mdxType="string"==typeof t?t:n,s[1]=c;for(var u=2;u<o;u++)s[u]=a[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6764:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var r=a(7462),n=a(3366),o=(a(7294),a(3905)),s=["components"],c={},p="Attaching Datastores",u={unversionedId:"products/runs/attaching-datastores",id:"products/runs/attaching-datastores",title:"Attaching Datastores",description:"Attach to a RUN",source:"@site/docs/products/runs/attaching-datastores.md",sourceDirName:"products/runs",slug:"/products/runs/attaching-datastores",permalink:"/products/runs/attaching-datastores",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/products/runs/attaching-datastores.md",tags:[],version:"current",lastUpdatedAt:1644341001,formattedLastUpdatedAt:"2/8/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Script dependencies",permalink:"/products/runs/script-dependencies"},next:{title:"Hyperparameter Sweeps",permalink:"/products/runs/sweep-syntax"}},l=[{value:"Attach to a RUN",id:"attach-to-a-run",children:[],level:2},{value:"Datastore paths",id:"datastore-paths",children:[],level:2}],i={toc:l};function d(t){var e=t.components,c=(0,n.Z)(t,s);return(0,o.kt)("wrapper",(0,r.Z)({},i,c,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"attaching-datastores"},"Attaching Datastores"),(0,o.kt)("h2",{id:"attach-to-a-run"},"Attach to a RUN"),(0,o.kt)("p",null,"You can mount a datastore to a run to make your experiments run faster! By default, the datastore is mounted at /datastore. When attaching datastores to a run, take note of the path your script uses. For example if your script takes an argument ",(0,o.kt)("em",{parentName:"p"},"my_data_path")," and you want to mount the ",(0,o.kt)("em",{parentName:"p"},"cats")," datastore:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid run main.py --my_data_path grid:cats:1\n")),(0,o.kt)("h2",{id:"datastore-paths"},"Datastore paths"),(0,o.kt)("p",null,"Say you have a dataset with this structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"my_dataset /\n  train/\n    ...\n  val/\n    ...\n")),(0,o.kt)("p",null,"on your local machine, you call the script like so,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"python main.py --root my_dataset/\n")),(0,o.kt)("p",null,"your script uses the dataset like this,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"args.add_argument('-root')\nroot = args.parse_args()\n\ntrain = load(root + 'train')\nval = load(root + 'val')\n")),(0,o.kt)("p",null,"When you upload a datastore to Grid:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid datastore create --source my_dataset --name apples\n")),(0,o.kt)("p",null,"it is available under this structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"train/\n  ...\nval/\n  ...\n")),(0,o.kt)("p",null,"To run on this datastore, select the datastore from the dropdown"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(340).Z})),(0,o.kt)("p",null,"Now pass the name of the datastore to your command"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2887).Z})),(0,o.kt)("p",null,"which is equivalent to calling your script like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# python\npython pl_mnist.py --root /datastore\n\n# with grid\npython pl_mnist.py --root grid:my-dataset:1\n")),(0,o.kt)("p",null,"The datastore path has 3 parts:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid:[name]:[version]\n")),(0,o.kt)("p",null,"Example, datastore named elephant (version 3)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"grid:elephant:3\n")))}d.isMDXComponent=!0},340:function(t,e,a){e.Z=a.p+"assets/images/runs-select-datastore-ca23bec290a5d8def4cb4143bd213d56.png"},2887:function(t,e,a){e.Z=a.p+"assets/images/script-arguments-7f1cc03e1673ac44c761d261f0b139a1.png"}}]);