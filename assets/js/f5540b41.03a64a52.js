"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[2873],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),f=a,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return r?o.createElement(h,n(n({ref:t},u),{},{components:r})):o.createElement(h,n({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,n=new Array(i);n[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,n[1]=c;for(var l=2;l<i;l++)n[l]=r[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5644:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var o=r(7462),a=r(3366),i=(r(7294),r(3905)),n=["components"],c={},s="Security & Privacy",l={unversionedId:"platform/security-and-privacy",id:"platform/security-and-privacy",title:"Security & Privacy",description:"Data Privacy",source:"@site/docs/platform/security-and-privacy.md",sourceDirName:"platform",slug:"/platform/security-and-privacy",permalink:"/platform/security-and-privacy",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/platform/security-and-privacy.md",tags:[],version:"current",lastUpdatedAt:1644341001,formattedLastUpdatedAt:"2/8/2022",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tips & Tricks",permalink:"/platform/tips-and-tricks"},next:{title:"Single Sign-On \\(SSO\\)",permalink:"/platform/sso"}},u=[{value:"Data Privacy",id:"data-privacy",children:[],level:3},{value:"Cloud hosted service Access",id:"cloud-hosted-service-access",children:[],level:3},{value:"Self hosted and Private cloud",id:"self-hosted-and-private-cloud",children:[],level:3},{value:"Teams Collaboration",id:"teams-collaboration",children:[],level:3},{value:"Authorization",id:"authorization",children:[],level:3}],p={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,n);return(0,i.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security--privacy"},"Security & Privacy"),(0,i.kt)("h3",{id:"data-privacy"},"Data Privacy"),(0,i.kt)("p",null,"Any data you upload to Grid or generate while using the platform such as logs, model checkpoints, configuration files, metrics is private to you. You can choose to save, export or delete your data at any time. Grid does not see your code or compromise its privacy in any way. When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code. We treat your data as private and confidential in accordance with our ",(0,i.kt)("a",{parentName:"p",href:"https://www.grid.ai/terms-of-service/"},"Terms of Service")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.grid.ai/privacy-policy/"},"Privacy policy"),"."),(0,i.kt)("h3",{id:"cloud-hosted-service-access"},"Cloud hosted service Access"),(0,i.kt)("p",null,"Access to grid platform is through your registered email address or Github user name. Grid uses two factor authentication with phone validation to ensure secure access. Grid credentials and API key are unique to every user. The API key and credentials can be found on the Settings page in the web application, see ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/start-here/your-login-credentials"},"here")," for more information."),(0,i.kt)("h3",{id:"self-hosted-and-private-cloud"},"Self hosted and Private cloud"),(0,i.kt)("p",null,"We follow best practices for security and encryption in our cloud hosted service. Grid also offers private cloud and self hosted installations. You can use Grid to orchestrate infrastructure on your own private cloud. Please ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@grid.ai"},"contact us")," to learn more about options for your business. Here is a link to our ",(0,i.kt)("a",{parentName:"p",href:"https://www.grid.ai/pricing/"},"pricing page"),"."),(0,i.kt)("h3",{id:"teams-collaboration"},"Teams Collaboration"),(0,i.kt)("p",null,"You can choose to share your work with a team of collaborators working in a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/platform/collaboration"},"collaborative environment"),". Collaboration is a premium feature, to learn more about Collaboration, ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@grid.ai"},"contact us"),". Here is a link to our ",(0,i.kt)("a",{parentName:"p",href:"https://www.grid.ai/pricing/"},"pricing page"),"."),(0,i.kt)("h3",{id:"authorization"},"Authorization"),(0,i.kt)("p",null,"By default you can only access and run scripts from public Github repositories on Grid. To grant access to your private repositories, you will need to enable it in Grid ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/products/sessions/github-login"},"see here for more details on how to do that"),". It is user responsibility to ensure they have permissions to grant access to private repos. Accessing code from local directories and using own images is a premium feature, ",(0,i.kt)("a",{parentName:"p",href:"mailto:support@grid.ai"},"contact us")," to learn more."))}d.isMDXComponent=!0}}]);