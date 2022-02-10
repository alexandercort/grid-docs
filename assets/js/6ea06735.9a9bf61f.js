"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[4777],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=i,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return t?r.createElement(f,o(o({ref:n},s),{},{components:t})):r.createElement(f,o({ref:n},s))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8314:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var r=t(7462),i=t(3366),a=(t(7294),t(3905)),o=["components"],l={},c="YAML configs",p={unversionedId:"products/runs/yaml-configs/README",id:"products/runs/yaml-configs/README",title:"YAML configs",description:"Using Environment Variables",source:"@site/docs/products/runs/yaml-configs/README.md",sourceDirName:"products/runs/yaml-configs",slug:"/products/runs/yaml-configs/",permalink:"/products/runs/yaml-configs/",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/products/runs/yaml-configs/README.md",tags:[],version:"current",lastUpdatedAt:1644341001,formattedLastUpdatedAt:"2/8/2022",frontMatter:{}},s=[{value:"Using Environment Variables",id:"using-environment-variables",children:[],level:2},{value:"Specifying Requirement Files",id:"specifying-requirement-files",children:[],level:2},{value:"Full Example",id:"full-example",children:[],level:2}],u={toc:s};function m(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"yaml-configs"},"YAML configs"),(0,a.kt)("h2",{id:"using-environment-variables"},"Using Environment Variables"),(0,a.kt)("p",null,"You can pass in environment variables to be used by your experiment by using the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"environment"))," key. Pass any values and those values will be available in your experiment context. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'compute:\n  train:\n    environment:\n      MY_ENVIRONMENT_VARIABLE: "example"\n')),(0,a.kt)("p",null,"The environment variable ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"MY_ENVIRONMENT_VARIABLE"))," will be injected into your experiment runtime."),(0,a.kt)("h2",{id:"specifying-requirement-files"},"Specifying Requirement Files"),(0,a.kt)("p",null,"Grid will automatically install dependencies into your project using either ",(0,a.kt)("inlineCode",{parentName:"p"},"pip")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"conda"),". It does that automatically by finding files either named ",(0,a.kt)("inlineCode",{parentName:"p"},"requirements.txt")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"environment.yml")," in your project's root. "),(0,a.kt)("p",null,"If your dependencies live elsewhere, you can specify their location using the ",(0,a.kt)("inlineCode",{parentName:"p"},"dependency_file_info")," attribute in the Grid YAML config."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"compute:\n  train:\n    dependency_file_info:\n      package_manager: pip\n      path: ./requirements/requirements.txt # can have any name \n")),(0,a.kt)("h2",{id:"full-example"},"Full Example"),(0,a.kt)("p",null,"In this example, we run a hyper parameter sweep that creates 2 experiments. That's the case because we are using ",(0,a.kt)("inlineCode",{parentName:"p"},"random_search")," with the ",(0,a.kt)("inlineCode",{parentName:"p"},"trials")," parameter set to 2, which will randomly sample 2 combinations of hyper parameters from the combinations generated by ",(0,a.kt)("inlineCode",{parentName:"p"},"learning_rate")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"gamma"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'# Main compute configuration.\ncompute:\n\n  # Add cloud configuration here.\n  provider:\n    cluster: XXXXXX           # Cluster ID\n\n  # Training configuration.\n  train:\n    cpus: 1                       # Number of CPUs\n    gpus: 0                       # Number of GPUs\n    instance: t2.xlarge           # AWS instance type\n\n    # Your environment variables\n    environment:\n      MY_ENVIRONMENT_VARIABLE: "example"\n      \n    # Dependency file specification\n    dependency_file_info:\n      package_manager: pip\n      path: ./requirements/requirements.txt # can have any name \n')))}m.isMDXComponent=!0}}]);