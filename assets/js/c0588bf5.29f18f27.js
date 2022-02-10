"use strict";(self.webpackChunkgrid_docs=self.webpackChunkgrid_docs||[]).push([[6282],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9462:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={},c="Timeseries Forecasting",l={unversionedId:"examples/time-series/crypto-currency-forecasting",id:"examples/time-series/crypto-currency-forecasting",title:"Timeseries Forecasting",description:"Grid'%20--hidden_size%20'%5B16%2C32%2C64%5D')",source:"@site/docs/examples/time-series/crypto-currency-forecasting.md",sourceDirName:"examples/time-series",slug:"/examples/time-series/crypto-currency-forecasting",permalink:"/examples/time-series/crypto-currency-forecasting",editUrl:"https://github.com/gridai/grid-docs/tree/main/docs/examples/time-series/crypto-currency-forecasting.md",tags:[],version:"current",lastUpdatedAt:1644341001,formattedLastUpdatedAt:"2/8/2022",frontMatter:{}},p=[{value:"Step 1: Create Your Dataset",id:"step-1-create-your-dataset",children:[],level:2},{value:"Step 2: Train Your Model on Grid AI",id:"step-2-train-your-model-on-grid-ai",children:[{value:"Bonus: Run a Hyperparameter Sweep",id:"bonus-run-a-hyperparameter-sweep",children:[],level:3}],level:2},{value:"Attribution",id:"attribution",children:[],level:2}],d={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"timeseries-forecasting"},"Timeseries Forecasting"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://platform.grid.ai/#/runs?script=https://github.com/gridai/gridai-timeseries-forecasting-demo/blob/fa48c4b5ae58f40263ad98d5fbc06fce92db11a4/train.py&cloud=grid&instance=g4dn.xlarge&accelerators=1&disk_size=200&framework=lightning&script_args=grid%20run%20--grid_config%20.grid%2Fconfig.yml%20train.py%20--max_epochs%20100%20--data_path%20%2Fdataset%2Fcryptocurrency_prices.csv%20--learning_rate%20'uniform(0%2C0.03%2C5)'%20--hidden_size%20'%5B16%2C32%2C64%5D'"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rid_AI-run-78FF96.svg?labelColor=black&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEgMTR2MjBhMTQgMTQgMCAwMDE0IDE0aDlWMzYuOEgxMi42VjExaDIyLjV2N2gxMS4yVjE0QTE0IDE0IDAgMDAzMi40IDBIMTVBMTQgMTQgMCAwMDEgMTR6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTM1LjIgNDhoMTEuMlYyNS41SDIzLjl2MTEuM2gxMS4zVjQ4eiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==",alt:"Grid"}))),(0,i.kt)("p",null,"We show how to create a model that learns how to forecast the next N observations of\na timeseries."),(0,i.kt)("p",null,"In this example, we will be creating a model that predicts future cryptocurrency values."),(0,i.kt)("h2",{id:"step-1-create-your-dataset"},"Step 1: Create Your Dataset"),(0,i.kt)("p",null,"Our dataset is quite simple: it's a CSV file with the following structure (each colum is self explanatory):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csv"},"time_idx,Symbol,Date,High,Low,Open,Close,Volume,Marketcap\n1,ADA,2017-10-02 23:59:59,0.0300877001136541,0.0199692994356155,0.0246070008724927,0.0259317997843027,57641300.0,628899051.78\n2,ADA,2017-10-03 23:59:59,0.0274251997470855,0.0206898991018533,0.025756599381566,0.0208158008754253,16997800.0,539692714.905\n")),(0,i.kt)("p",null,"We will training a series of models on Grid. Now, in order to make the process of updating\nthe dataset easier we will be creating a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/products/add-data-to-grid-datastores"},"Grid Datastore"),". Datstores are collections of files that are versioned and can\nbe mounted anywhere in the experiment context."),(0,i.kt)("p",null,"We'll be creating a new Datastore using the Grid CLI with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ grid datastores create --name crypto_prices --source data/\nupload \u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501 100.0%\n\u2714 Finished uploading datastore.\n")),(0,i.kt)("p",null,"Then check that your datsatore is ready to use by calling ",(0,i.kt)("inlineCode",{parentName:"p"},"grid datastores list"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ grid datstores list\n\u250f\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2533\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2513\n\u2503 Credential Id \u2503                Name \u2503 Version \u2503     Size \u2503          Created \u2503    Status \u2503\n\u2521\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2547\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2529\n\u2502 cc-grv4f      \u2502       crypto_prices \u2502       1 \u2502  12.6 MB \u2502 2021-05-20 01:17 \u2502 Succeeded \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n")),(0,i.kt)("p",null,"Whenever your datastore has ",(0,i.kt)("inlineCode",{parentName:"p"},"Status")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"Succeeded")," you are ready to go on training."),(0,i.kt)("h2",{id:"step-2-train-your-model-on-grid-ai"},"Step 2: Train Your Model on Grid AI"),(0,i.kt)("p",null,"You are now ready to train your model on Grid."),(0,i.kt)("p",null,"We'll be using the CLI but you can do the same thing by using the web UI. We have placed a configuration file\nlocally (",(0,i.kt)("inlineCode",{parentName:"p"},".grid/config.yml"),") that you can use as reference instead of passing all the parameters to\nthe CLI manually."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ grid run --config .grid/config.yml \\\n           train.py \\\n           --max_epochs 100 \\\n           --data_path /dataset/cryptocurrency_prices.csv \\\n           --learning_rate "uniform(0,0.03,5)" \\\n           --hidden_size "[16,32,64]"\n\nNo --name passed, naming your run glossy-manatee-255\nUsing default cloud credentials cc-bwhth to run on AWS.\n\n                Run submitted!\n                `grid status` to list all runs\n                `grid status glossy-manatee-255` to see all experiments for this run\n\n                ----------------------\n                Submission summary\n                ----------------------\n                script:                  train.py\n                instance_type:           g4dn.xlarge\n                distributed:             False\n                use_spot:                True\n                cloud_provider:          aws\n                cloud_credentials:       cc-bwhth\n                grid_name:               glossy-manatee-255\n                datastore_name:          crypto_prices\n                datastore_version:       1\n                datastore_mount_dir:     /dataset\n')),(0,i.kt)("h3",{id:"bonus-run-a-hyperparameter-sweep"},"Bonus: Run a Hyperparameter Sweep"),(0,i.kt)("p",null,"Grid AI makes it trivial to run a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.grid.ai/products/global-cli-configs/cli-api/grid-train#hyperparameter-sweeps"},"hyperparameter sweep"),"\nwithout having to change anything in your scripts. Let's experiment with a number of different learning rates for our model:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ grid run --config .grid/config.yml \\\n           train.py --max_epochs 100 \\\n           --data_path /dataset/cryptocurrency_prices.csv \\\n           --learning_rate "uniform(0,0.03,5)" \\\n           --hidden_size "[16,32,64]"\n')),(0,i.kt)("p",null,"That will generate 15 experimentst with different learning rate combinations."),(0,i.kt)("h2",{id:"attribution"},"Attribution"),(0,i.kt)("p",null,"This project relies heavily on the ",(0,i.kt)("a",{parentName:"p",href:"https://pytorch-forecasting.readthedocs.io/en/latest/"},"PyTorch Forecasting")," package. The implementation herein adapts\nfrom their documentation and tutorials."),(0,i.kt)("p",null,"The dataset used in this demo comes from ",(0,i.kt)("a",{parentName:"p",href:"https://coinmarketcap.com/"},"CoinMarketCap"),", a cryptocurrency price-tracking service. We have downloaded a processed version of the data\navailable in this ",(0,i.kt)("a",{parentName:"p",href:"https://www.kaggle.com/sudalairajkumar/cryptocurrencypricehistory"},"Kaggle page"),"."))}u.isMDXComponent=!0}}]);