var pe=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))me.call(t,o)&&H(e,o,t[o]);return e};import{d as D,u as he,r as f,o as K,a as G,b as v,c as Y,w as c,e as n,f as i,N as ge,g as _e,h as fe,z as ve,i as ke,j as ye,k as X,l as we,m as Ee,n as Fe,p as xe,q as Ae,s as y,t as be,v as Ie,x as Ne,y as E,A as C,B as De,C as Ce,D as I,E as g,F as Z,G as Le,H as Pe,I as L,L as Se,J as q,K as $e,M as Oe,O as Te,P as Be,Q as Re,R as Ve,S as je,T as Me,U as Q,V as ze,W as Je,X as Ue,Y as He,Z as We,_ as Ke,$ as Ge,a0 as Ye,a1 as Xe,a2 as Ze,a3 as qe,a4 as Qe}from"./vendor.0d5d26a8.js";const et=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}};et();const tt=D({setup(e){return window.$message=he(),(t,o)=>null}}),ot=["https://diii.tk","https://pikpak.he13797739994.ga","https://pikpak.89u.xyz","https://api-pikpak.tjsky.cf","https://api-pikpak.go-back.cf"],at=D({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(ot))}),(o,s)=>{const a=G("router-view");return v(),Y(i(ye),{locale:i(ve),"date-locale":i(ke),"theme-overrides":t.value},{default:c(()=>[n(i(fe),null,{default:c(()=>[n(i(ge),null,{default:c(()=>[n(i(_e),null,{default:c(()=>[n(tt),n(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),st="modulepreload",ee={},it="/pikpak/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${it}${s}`,s in ee)return;ee[s]=!0;const a=s.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":st,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((A,h)=>{l.addEventListener("load",A),l.addEventListener("error",h)})})).then(()=>t())};var nt="/pikpak/assets/logo1.08eb9157.png";const m=X.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const s=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(s.length>0){const a=Math.floor(Math.random()*s.length);e.url=s[a]+"/"+e.url}}return e});let F=!1;m.interceptors.response.use(e=>e,e=>{var s;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const a=window.localStorage.getItem("pikpakLoginData"),r=a?JSON.parse(a):{};return r.username&&r.password&&!F?(console.log("wait",o.url),F=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(l=>(l.data&&l.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(l.data)),F=!1,m(o))).catch(()=>(N.push("/login"),!1))):r.username&&r.password&&F?new Promise((l,A)=>{const h=setInterval(()=>{F||(clearInterval(h),l(m(o)))},100)}):(N.push("/login"),Promise.reject(e));default:window.$message.error(((s=t==null?void 0:t.data)==null?void 0:s.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const te=X.create({});te.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const It=te,oe=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let s=Math.floor(o/10);return e=e/Math.pow(2,10*s),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[s]};const rt=g("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[g("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),g("div",{class:"logo-box__text"},"PikPak")],-1),lt={key:0,class:"content-bottom"},ut=E("\u4F1A\u5458\u7801"),ct={style:{"margin-bottom":"0"}},pt=g("a",{style:{color:"#306eff"},target:"_blank",href:"https://s.click.taobao.com/AxcRXUu"},"\uFFE59.9\u8D2D\u4F53\u9A8C\u4F1A\u5458\u6708\u5361",-1),dt={class:"bottom-user-info"},mt={key:0,src:nt,class:"user-info-avatar"},ht={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},gt={class:"user-info-name"},_t={key:0},ft={class:"action"},vt=E(" \u9000\u51FA\u767B\u5F55 "),kt=g("p",null,[g("a",{style:{color:"#306eff"},target:"_blank",href:"https://k.youshop10.com/JGDtoxg6"},"\u30100.33\u5143/\u5929\u3011PikPak\u4F53\u9A8C\u4F1A\u5458VIP\u5E74\u5361-\u53EF\u4E0E7\u5929\u514D\u8D39\u4F1A\u5458\u7801\u53E0\u52A0-\u6BCF\u4EBA\u53EA\u80FD\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u611F\u8C22\u652F\u6301")],-1),yt=E("\u6DFB\u52A0"),wt=D({setup(e){const t=f(!1),o=u=>()=>Q(L,null,{default:()=>Q(u)}),s=we(),a=Ee(),r=f([{label:"\u6587\u4EF6",key:"list",icon:o(Ge)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u9080\u8BF7",key:"invited",icon:o(He)},{label:"\u8D44\u6E90\u5E93",key:"share",icon:o(We)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(Ke)}]),l=f(),A=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(u=>{window.localStorage.setItem("pikpakUser",JSON.stringify(u.data)),l.value=u.data}).catch(u=>{console.log(u)})},h=f(),P=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(u=>{h.value=u.data}).catch(u=>{console.log(u)})},k=f(),ae=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(u=>{var p;k.value=(p=u.data)==null?void 0:p.data})},se=(u,p)=>{console.log(p),s.push("/"+p.key)};K(()=>{A(),P(),ae()});const b=f(),w=f(!1),ie=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:b.value,data:{}}).then(u=>{window.$message.success("\u5151\u6362\u6210\u529F"),P()}).catch(u=>{console.log(u)}).finally(()=>{w.value=!1})},S=f(!1),ne=u=>{S.value=u<800,t.value||(t.value=u<800)};Fe(a,()=>{S.value&&(t.value=!0)});const re=xe(),le=()=>{re.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(u=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),s.push("/login")}).catch(u=>{console.log(u)})}})};return(u,p)=>{const ue=G("router-view"),ce=Ae("resize");return v(),y(Me,null,[be(n(i(q),{"has-sider":"",onResize:ne},{default:c(()=>[n(i(Ie),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=_=>t.value=!0),onExpand:p[2]||(p[2]=_=>t.value=!1),bordered:""},{default:c(()=>{var _,$,O,T,B,R,V,j,M,z,J;return[rt,n(i(Ne),{options:r.value,value:String(i(a).name),"onUpdate:value":se},null,8,["options","value"]),t.value?I("",!0):(v(),y("div",lt,[E(C(i(oe)((_=h.value)==null?void 0:_.quota.usage))+" / "+C(i(oe)(($=h.value)==null?void 0:$.quota.limit))+" ",1),n(i(De),{type:"primary",onClick:p[0]||(p[0]=xt=>w.value=!0)},{default:c(()=>[ut]),_:1}),((O=h.value)==null?void 0:O.quota)?(v(),Y(i(Ce),{key:0,type:"line",percentage:Number((((T=h.value)==null?void 0:T.quota.usage)/((B=h.value)==null?void 0:B.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=k.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):I("",!0),g("p",ct,[n(i(Z),{width:600,placement:"right"},{trigger:c(()=>[pt]),_:1})])])),t.value?I("",!0):(v(),y("div",{key:1,class:Le(["sider-bottom",{vip:((V=k.value)==null?void 0:V.status)==="ok"}])},[g("div",dt,[((j=k.value)==null?void 0:j.status)==="ok"?(v(),y("img",mt)):(v(),y("img",ht)),g("div",gt,[E(C((M=l.value)==null?void 0:M.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",_t,[n(i(Pe),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):I("",!0)]),g("div",ft,[n(i(Z),null,{trigger:c(()=>[n(i(L),{onClick:le},{default:c(()=>[n(i(Se))]),_:1})]),default:c(()=>[vt]),_:1})])])],2))]}),_:1},8,["collapsed"]),n(i(q),null,{default:c(()=>[n(i($e),{style:{height:"100vh"}},{default:c(()=>[n(i(Oe),{style:{"max-height":"100vh"}},{default:c(()=>[n(ue)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ce]]),n(i(je),{show:w.value,"onUpdate:show":p[5]||(p[5]=_=>w.value=_)},{default:c(()=>[n(i(Te),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[n(i(L),{onClick:p[3]||(p[3]=_=>w.value=!1)},{default:c(()=>[n(i(Be))]),_:1})]),action:c(()=>[n(i(Re),{block:!0,type:"primary",disabled:!b.value,onClick:ie},{default:c(()=>[yt]),_:1},8,["disabled"])]),default:c(()=>[n(i(Ve),{placeholder:"\u4F1A\u5458\u7801",value:b.value,"onUpdate:value":p[4]||(p[4]=_=>b.value=_)},null,8,["value"]),kt]),_:1})]),_:1},8,["show"])],64)}}}),Et=[{path:"/",name:"home",component:wt,redirect:"/list",beforeEnter:(e,t,o)=>{const s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!s||!s.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.76c6d49f.js"),["assets/list.76c6d49f.js","assets/list.764e0448.css","assets/vendor.0d5d26a8.js","assets/clipboard.f3c3206f.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.76c6d49f.js"),["assets/list.76c6d49f.js","assets/list.764e0448.css","assets/vendor.0d5d26a8.js","assets/clipboard.f3c3206f.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.76c6d49f.js"),["assets/list.76c6d49f.js","assets/list.764e0448.css","assets/vendor.0d5d26a8.js","assets/clipboard.f3c3206f.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.81cfd1a0.js"),["assets/trash.81cfd1a0.js","assets/trash.99a3677d.css","assets/vendor.0d5d26a8.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.03691bd5.js"),["assets/setting.03691bd5.js","assets/setting.f947579c.css","assets/vendor.0d5d26a8.js"])},{path:"invited",name:"invited",component:()=>d(()=>import("./invited.c2ea9a1e.js"),["assets/invited.c2ea9a1e.js","assets/invited.74b24e1e.css","assets/clipboard.f3c3206f.js","assets/vendor.0d5d26a8.js"])},{path:"share",name:"share",component:()=>d(()=>import("./share.185d80ed.js"),["assets/share.185d80ed.js","assets/share.4f9c11c6.css","assets/vendor.0d5d26a8.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.51bb3553.js"),["assets/test.51bb3553.js","assets/vendor.0d5d26a8.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.5dc0a3ae.js"),["assets/shareInfo.5dc0a3ae.js","assets/shareInfo.678356c6.css","assets/vendor.0d5d26a8.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.452c2fba.js"),["assets/login.452c2fba.js","assets/login.a8b45006.css","assets/vendor.0d5d26a8.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.af30670a.js"),["assets/sms.af30670a.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.0d5d26a8.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.c42cc93b.js"),["assets/register.c42cc93b.js","assets/register.5588ce76.css","assets/vendor.0d5d26a8.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.77a7a75b.js"),["assets/testtest.77a7a75b.js","assets/vendor.0d5d26a8.js"])}],Ft=Ye({history:Xe(),routes:Et});var N=Ft;const x=Ze(at);x.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,s=>{let a=s.offsetWidth,r=s.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var l;(l=o.props)==null||l.onResize(a,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});x.config.globalProperties.$http=m;x.use(N);x.use(Qe,{router:N,siteIdList:[1280510106]});x.mount("#app");export{oe as b,m as i,It as n,ot as p};
