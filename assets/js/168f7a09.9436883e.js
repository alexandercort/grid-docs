"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[7019],{3905:function(t,e,i){i.d(e,{Zo:function(){return p},kt:function(){return d}});var n=i(7294);function o(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function s(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){o(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function a(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)i=r[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}var u=n.createContext({}),c=function(t){var e=n.useContext(u),i=e;return t&&(i="function"==typeof t?t(e):s(s({},e),t)),i},p=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var i=t.components,o=t.mdxType,r=t.originalType,u=t.parentName,p=a(t,["components","mdxType","originalType","parentName"]),g=c(i),d=o,h=g["".concat(u,".").concat(d)]||g[d]||l[d]||r;return i?n.createElement(h,s(s({ref:e},p),{},{components:i})):n.createElement(h,s({ref:e},p))}));function d(t,e){var i=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=i.length,s=new Array(r);s[0]=g;var a={};for(var u in e)hasOwnProperty.call(e,u)&&(a[u]=e[u]);a.originalType=t,a.mdxType="string"==typeof t?t:o,s[1]=a;for(var c=2;c<r;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},7702:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return g}});var n=i(7462),o=i(3366),r=(i(7294),i(3905)),s=["components"],a={description:"Automatic login to Github in a Session"},u="Github login",c={unversionedId:"products/sessions/github-login",id:"products/sessions/github-login",title:"Github login",description:"Automatic login to Github in a Session",source:"@site/docs/products/sessions/github-login.md",sourceDirName:"products/sessions",slug:"/products/sessions/github-login",permalink:"/products/sessions/github-login",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/products/sessions/github-login.md",tags:[],version:"current",lastUpdatedAt:1644341001,formattedLastUpdatedAt:"2/8/2022",frontMatter:{description:"Automatic login to Github in a Session"},sidebar:"tutorialSidebar",previous:{title:"\u26a1Sessions",permalink:"/products/sessions/"},next:{title:"Pause",permalink:"/products/sessions/pause"}},p=[{value:"Signed up with Github",id:"signed-up-with-github",children:[],level:2},{value:"Signed up with Google",id:"signed-up-with-google",children:[],level:2},{value:"Access Private Github Repos",id:"access-private-github-repos",children:[],level:2},{value:"About authorization",id:"about-authorization",children:[],level:2},{value:"About private code",id:"about-private-code",children:[],level:2}],l={toc:p};function g(t){var e=t.components,a=(0,o.Z)(t,s);return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"github-login"},"Github login"),(0,r.kt)("p",null,"Interactive Sessions automatically login into Github for you. You can clone any repositories into a Session using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository#cloning-a-repository-using-the-command-line"},"HTTPS cloning method")," (SSH will not work)."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Cloning a private repository into a Grid Interactive Session.",src:i(9371).Z})),(0,r.kt)("h2",{id:"signed-up-with-github"},"Signed up with Github"),(0,r.kt)("p",null,"If you signed up to Grid with Github, you'll already be logged into your Github account when an interactive Session starts."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(4712).Z})),(0,r.kt)("h2",{id:"signed-up-with-google"},"Signed up with Google"),(0,r.kt)("p",null,"If you signed up to Grid with Google, you'll have to link a Github account under ",(0,r.kt)("strong",{parentName:"p"},"Settings")," ",">"," ",(0,r.kt)("strong",{parentName:"p"},"Integrations"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(3620).Z})),(0,r.kt)("h2",{id:"access-private-github-repos"},"Access Private Github Repos"),(0,r.kt)("p",null,"By default you can only access public Github repositories on Grid. To grant access to your private code navigate to Settings ",">"," Integrations ",">"," Grant access. Make sure to grant access to any private repositories you intend to use before using Session"),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(3843).Z})),(0,r.kt)("h2",{id:"about-authorization"},"About authorization"),(0,r.kt)("p",null,"When you grant access to private repositories in Github, the organizations that you have granted private access to will appear in ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/settings/applications"},"https://github.com/settings/applications")," . When you want to use a script from a private repository in Grid, make sure that the organization shows up in the Applications section of Github settings"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Settings-&amp;gt;Applications",src:i(6511).Z})),(0,r.kt)("p",null,"Click on the Grid AI organization to see permissions."),(0,r.kt)("p",null,(0,r.kt)("img",{src:i(6511).Z})),(0,r.kt)("p",null,"Make sure that Organization access above shows that permissions are granted to the repositories you have(this example is showing xyz). If Organization access is not requested, you will not be able to use scripts from the private repositories."),(0,r.kt)("h2",{id:"about-private-code"},"About private code"),(0,r.kt)("p",null,"Grid does not save your code, look at it or compromise its privacy in any way."),(0,r.kt)("p",null,"When receiving support, you will not have to share any code to help debug. If you choose to share code, make sure you have the rights to and share non-critical parts of the code."))}g.isMDXComponent=!0},3843:function(t,e,i){e.Z=i.p+"assets/images/grant_github_access-e05c66119234ad4ebd091945039fd2a3.gif"},9371:function(t,e,i){e.Z=i.p+"assets/images/git_clone_private_repo-846bdf6543d3793441ad5a7e54cadba5.gif"},4712:function(t,e,i){e.Z=i.p+"assets/images/github-login-9203339c2550d033fc5f9d163ae8fbde.png"},6511:function(t,e,i){e.Z=i.p+"assets/images/github-permissions-98aaf93ba67e2479d8f21038b226d62b.png"},3620:function(t,e,i){e.Z=i.p+"assets/images/google-login-b4465f0d288ccaacf2a115659c8f2d4b.png"}}]);