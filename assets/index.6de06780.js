var pe=Object.defineProperty;var U=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable;var H=(e,t,o)=>t in e?pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,W=(e,t)=>{for(var o in t||(t={}))de.call(t,o)&&H(e,o,t[o]);if(U)for(var o of U(t))me.call(t,o)&&H(e,o,t[o]);return e};import{d as C,u as _e,r as f,o as K,a as Y,b as v,c as G,w as c,e as i,f as n,N as ge,g as he,h as fe,z as ve,i as ke,j as ye,k as Z,l as Ee,m as we,n as Fe,p as xe,q as Ne,s as y,t as be,v as Ae,x as Ie,y as w,A as L,B as Ce,C as Le,D as A,E as g,F as q,G as Pe,H as De,I as P,L as $e,J as X,K as Se,M as Be,O as Oe,P as Te,Q as Re,R as Ve,S as je,T as Me,U as Q,V as ze,W as Je,X as Ue,Y as He,Z as We,_ as Ke,$ as Ye,a0 as Ge,a1 as Ze,a2 as qe,a3 as Xe}from"./vendor.64da71ad.js";const Qe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function o(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=o(a);fetch(a.href,r)}};Qe();const et=C({setup(e){return window.$message=_e(),(t,o)=>null}}),tt=["https://pikpak.tjsky.top","https://pikpak.995579.xyz"],ot=C({setup(e){const t=f({common:{primaryColor:"#306eff",hoverColor:"#306eff",primaryColorHover:"#306eff",heightMedium:"42px"},Layout:{siderColor:"#f5f5f6"},Breadcrumb:{fontSize:"16px"},Dropdown:{optionTextColorHover:"#fff"},InternalSelectMenu:{optionTextColorActive:"#fff"},Upload:{itemColorHover:"#F3F3F5FF",itemTextColorSuccess:"#18A058FF"}});return K(()=>{localStorage.getItem("isSettingProxy")||localStorage.setItem("proxy",JSON.stringify(tt))}),(o,s)=>{const a=Y("router-view");return v(),G(n(ye),{locale:n(ve),"date-locale":n(ke),"theme-overrides":t.value},{default:c(()=>[i(n(fe),null,{default:c(()=>[i(n(ge),null,{default:c(()=>[i(n(he),null,{default:c(()=>[i(et),i(a)]),_:1})]),_:1})]),_:1})]),_:1},8,["locale","date-locale","theme-overrides"])}}}),at="modulepreload",ee={},st="/pikpak/",d=function(t,o){return!o||o.length===0?t():Promise.all(o.map(s=>{if(s=`${st}${s}`,s in ee)return;ee[s]=!0;const a=s.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":at,a||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),a)return new Promise((N,_)=>{u.addEventListener("load",N),u.addEventListener("error",_)})})).then(()=>t())};var nt="/pikpak/assets/logo1.08eb9157.png";const m=Z.create({});m.interceptors.request.use(e=>{var o;const t=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");if(e.headers=e.headers||{},t.access_token&&(e.headers.Authorization=`${t.token_type||"Bearer"} ${t.access_token}`),((o=e.url)==null?void 0:o.indexOf("https://",4))===-1){const s=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(s.length>0){const a=Math.floor(Math.random()*s.length);e.url=s[a]+"/"+e.url}}return e});let F=!1;m.interceptors.response.use(e=>e,e=>{var s;const{response:t,config:o}=e;if(t.status)switch(t.status){case 401:const a=window.localStorage.getItem("pikpakLoginData"),r=a?JSON.parse(a):{};return r.username&&r.password&&!F?(console.log("wait",o.url),F=!0,m.post("https://user.mypikpak.com/v1/auth/signin",W({captcha_token:"",client_id:"YNxT9w7GMdWvEOKa",client_secret:"dbw2OtmVEeuUvIptb1Coyg"},r)).then(u=>(u.data&&u.data.access_token&&window.localStorage.setItem("pikpakLogin",JSON.stringify(u.data)),F=!1,m(o))).catch(()=>(I.push("/login"),!1))):r.username&&r.password&&F?new Promise((u,N)=>{const _=setInterval(()=>{F||(clearInterval(_),u(m(o)))},100)}):(I.push("/login"),Promise.reject(e));default:window.$message.error(((s=t==null?void 0:t.data)==null?void 0:s.error_description)||"\u51FA\u9519\u4E86");break}return console.log(o.url,111),Promise.reject(e)});const te=Z.create({});te.interceptors.request.use(e=>{e.headers={Authorization:"Bearer secret_FErDcv3kgsFNLiWUDOWYdJhNqOIKj55eteBg3vIoiLt","Notion-Version":"2021-08-16","Content-Type":"application/json"};const t=JSON.parse(window.localStorage.getItem("proxy")||"[]");if(t.length>0){const o=Math.floor(Math.random()*t.length);e.url=t[o]+"/"+e.url}return e});const bt=te,oe=function(e){if(isNaN(e))return"";let t=["bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],o=Math.floor(Math.log(e)/Math.log(2));o<1&&(o=0);let s=Math.floor(o/10);return e=e/Math.pow(2,10*s),e.toString().length>e.toFixed(2).toString().length&&(e=parseFloat(e.toFixed(2))),e+" "+t[s]};const it=g("a",{href:"https://mypikpak.com/",target:"_blank",class:"logo-box"},[g("img",{src:"https://mypikpak.com/apple-touch-icon.png",class:"logo-box__icon",alt:""}),g("div",{class:"logo-box__text"},"PikPak")],-1),rt={key:0,class:"content-bottom"},ut=w("\u4F1A\u5458\u7801"),lt={style:{"margin-bottom":"0"}},ct=g("a",{style:{color:"#306eff"},target:"_blank",href:"https://s.click.taobao.com/mAJ4zyt"},"\uFFE5\u5B98\u65B9\u6388\u6743\u4EE3\u7406 229\u4F53\u9A8C\u5E74\u5361(\u9650\u65B0\u7528\u6237\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21\uFF0C\u53EF\u4E0Eapp\u9996\u6708/\u9996\u5E74\u4F18\u60E0\u53E0\u52A0\uFF09",-1),pt={class:"bottom-user-info"},dt={key:0,src:nt,class:"user-info-avatar"},mt={key:1,src:"https://www.mypikpak.com/logo.png",class:"user-info-avatar"},_t={class:"user-info-name"},gt={key:0},ht={class:"action"},ft=w(" \u9000\u51FA\u767B\u5F55 "),vt=g("p",null,[g("a",{style:{color:"#306eff"},target:"_blank",href:"https://s.click.taobao.com/mAJ4zyt"},"PikPak\u5B98\u65B9\u6388\u6743\u4EE3\u7406 229\u4F53\u9A8C\u5E74\u5361(\u53EF\u4E0Eapp\u9996\u6708/\u9996\u5E74\u4F18\u60E0\u53E0\u52A0\uFF09-\u9650\u65B0\u7528\u6237\u8D2D\u4E70\u4F7F\u7528\u4E00\u6B21")],-1),kt=w("\u6DFB\u52A0"),yt=C({setup(e){const t=f(!1),o=l=>()=>Q(P,null,{default:()=>Q(l)}),s=Ee(),a=we(),r=f([{label:"\u6587\u4EF6",key:"list",icon:o(Ke)},{label:"\u89C6\u9891",key:"video",icon:o(ze)},{label:"\u56FE\u7247",key:"image",icon:o(Je)},{label:"\u56DE\u6536\u7AD9",key:"trash",icon:o(Ue)},{label:"\u9080\u8BF7",key:"invited",icon:o(He)},{label:"\u8BBE\u7F6E",key:"setting",icon:o(We)}]),u=f(),N=()=>{m.get("https://user.mypikpak.com/v1/user/me").then(l=>{window.localStorage.setItem("pikpakUser",JSON.stringify(l.data)),u.value=l.data}).catch(l=>{console.log(l)})},_=f(),D=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/about").then(l=>{_.value=l.data}).catch(l=>{console.log(l)})},k=f(),ae=()=>{m.get("https://api-drive.mypikpak.com/drive/v1/privilege/vip").then(l=>{var p;k.value=(p=l.data)==null?void 0:p.data})},se=(l,p)=>{console.log(p),s.push("/"+p.key)};K(()=>{N(),D(),ae()});const b=f(),E=f(!1),ne=()=>{m.post("https://api-drive.mypikpak.com/vip/v1/order/activation-code",{activation_code:b.value,data:{}}).then(l=>{window.$message.success("\u5151\u6362\u6210\u529F"),D()}).catch(l=>{console.log(l)}).finally(()=>{E.value=!1})},$=f(!1),ie=l=>{$.value=l<800,t.value||(t.value=l<800)};Fe(a,()=>{$.value&&(t.value=!0)});const re=xe(),ue=()=>{re.warning({title:"\u8B66\u544A",content:"\u786E\u5B9A\u9000\u51FA\uFF1F",positiveText:"\u786E\u5B9A",negativeText:"\u4E0D\u786E\u5B9A",onPositiveClick:()=>{m.post("https://user.mypikpak.com/v1/auth/revoke",{}).then(l=>{window.localStorage.removeItem("pikpakLogin"),window.localStorage.removeItem("pikpakLoginData"),window.$message.success("\u9000\u51FA\u6210\u529F"),s.push("/login")}).catch(l=>{console.log(l)})}})};return(l,p)=>{const le=Y("router-view"),ce=Ne("resize");return v(),y(Me,null,[be(i(n(X),{"has-sider":"",onResize:ie},{default:c(()=>[i(n(Ae),{"content-style":{display:"flex",flexDirection:"column"},"collapse-mode":"width","collapsed-width":0,width:240,"show-trigger":"bar",collapsed:t.value,onCollapse:p[1]||(p[1]=h=>t.value=!0),onExpand:p[2]||(p[2]=h=>t.value=!1),bordered:""},{default:c(()=>{var h,S,B,O,T,R,V,j,M,z,J;return[it,i(n(Ie),{options:r.value,value:String(n(a).name),"onUpdate:value":se},null,8,["options","value"]),t.value?A("",!0):(v(),y("div",rt,[w(L(n(oe)((h=_.value)==null?void 0:h.quota.usage))+" / "+L(n(oe)((S=_.value)==null?void 0:S.quota.limit))+" ",1),i(n(Ce),{type:"primary",onClick:p[0]||(p[0]=Ft=>E.value=!0)},{default:c(()=>[ut]),_:1}),((B=_.value)==null?void 0:B.quota)?(v(),G(n(Le),{key:0,type:"line",percentage:Number((((O=_.value)==null?void 0:O.quota.usage)/((T=_.value)==null?void 0:T.quota.limit)*100).toFixed(2)),"indicator-placement":"inside",height:14,color:((R=k.value)==null?void 0:R.status)==="ok"?"#d1ae6a":void 0,processing:""},null,8,["percentage","color"])):A("",!0),g("p",lt,[i(n(q),{width:600,placement:"right"},{trigger:c(()=>[ct]),_:1})])])),t.value?A("",!0):(v(),y("div",{key:1,class:Pe(["sider-bottom",{vip:((V=k.value)==null?void 0:V.status)==="ok"}])},[g("div",pt,[((j=k.value)==null?void 0:j.status)==="ok"?(v(),y("img",dt)):(v(),y("img",mt)),g("div",_t,[w(L((M=u.value)==null?void 0:M.name)+" ",1),((z=k.value)==null?void 0:z.status)==="ok"&&((J=k.value)==null?void 0:J.expire)?(v(),y("div",gt,[i(n(De),{time:new Date(k.value.expire),type:"datetime"},null,8,["time"])])):A("",!0)]),g("div",ht,[i(n(q),null,{trigger:c(()=>[i(n(P),{onClick:ue},{default:c(()=>[i(n($e))]),_:1})]),default:c(()=>[ft]),_:1})])])],2))]}),_:1},8,["collapsed"]),i(n(X),null,{default:c(()=>[i(n(Se),{style:{height:"100vh"}},{default:c(()=>[i(n(Be),{style:{"max-height":"100vh"}},{default:c(()=>[i(le)]),_:1})]),_:1})]),_:1})]),_:1},512),[[ce]]),i(n(je),{show:E.value,"onUpdate:show":p[5]||(p[5]=h=>E.value=h)},{default:c(()=>[i(n(Oe),{style:{width:"600px"},title:"\u4F1A\u5458\u7801"},{"header-extra":c(()=>[i(n(P),{onClick:p[3]||(p[3]=h=>E.value=!1)},{default:c(()=>[i(n(Te))]),_:1})]),action:c(()=>[i(n(Re),{block:!0,type:"primary",disabled:!b.value,onClick:ne},{default:c(()=>[kt]),_:1},8,["disabled"])]),default:c(()=>[i(n(Ve),{placeholder:"\u4F1A\u5458\u7801",value:b.value,"onUpdate:value":p[4]||(p[4]=h=>b.value=h)},null,8,["value"]),vt]),_:1})]),_:1},8,["show"])],64)}}}),Et=[{path:"/",name:"home",component:yt,redirect:"/list",beforeEnter:(e,t,o)=>{const s=JSON.parse(window.localStorage.getItem("pikpakLogin")||"{}");(!s||!s.access_token)&&e.name!=="setting"?o("/login"):o()},children:[{path:"list/:id?",name:"list",component:()=>d(()=>import("./list.722f6d87.js"),["assets/list.722f6d87.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"video",name:"video",component:()=>d(()=>import("./list.722f6d87.js"),["assets/list.722f6d87.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"image",name:"image",component:()=>d(()=>import("./list.722f6d87.js"),["assets/list.722f6d87.js","assets/list.764e0448.css","assets/vendor.64da71ad.js","assets/clipboard.a54b99ef.js"])},{path:"trash",name:"trash",component:()=>d(()=>import("./trash.0d7bac28.js"),["assets/trash.0d7bac28.js","assets/trash.99a3677d.css","assets/vendor.64da71ad.js"])},{path:"setting",name:"setting",component:()=>d(()=>import("./setting.dd20e928.js"),["assets/setting.dd20e928.js","assets/setting.f947579c.css","assets/vendor.64da71ad.js"])},{path:"invited",name:"invited",component:()=>d(()=>import("./invited.c9253c4c.js"),["assets/invited.c9253c4c.js","assets/invited.74b24e1e.css","assets/clipboard.a54b99ef.js","assets/vendor.64da71ad.js"])},{path:"share",name:"share",component:()=>d(()=>import("./share.d5e5815d.js"),["assets/share.d5e5815d.js","assets/share.4f9c11c6.css","assets/vendor.64da71ad.js"])}]},{path:"/t/:id?",name:"test",component:()=>d(()=>import("./test.ee63e450.js"),["assets/test.ee63e450.js","assets/vendor.64da71ad.js"])},{path:"/s/:id/:password?",name:"shareInfo",component:()=>d(()=>import("./shareInfo.21bb22c7.js"),["assets/shareInfo.21bb22c7.js","assets/shareInfo.678356c6.css","assets/vendor.64da71ad.js"])},{path:"/login",name:"login",component:()=>d(()=>import("./login.dedcfb15.js"),["assets/login.dedcfb15.js","assets/login.a8b45006.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/sms",name:"sms",component:()=>d(()=>import("./sms.edd3b9c9.js"),["assets/sms.edd3b9c9.js","assets/sms.81a6d8ca.css","assets/phone-pc2.dbf6d71e.js","assets/vendor.64da71ad.js"])},{path:"/register",name:"register",component:()=>d(()=>import("./register.2fcee9e5.js"),["assets/register.2fcee9e5.js","assets/register.5588ce76.css","assets/vendor.64da71ad.js","assets/phone-pc2.dbf6d71e.js"])},{path:"/testtest",name:"testtest",component:()=>d(()=>import("./testtest.5a00d332.js"),["assets/testtest.5a00d332.js","assets/vendor.64da71ad.js"])}],wt=Ye({history:Ge(),routes:Et});var I=wt;const x=Ze(ot);x.directive("resize",{mounted(e,t,o){e.$$erd=qe({strategy:"scroll"}),e.$$erd.listenTo({},e,s=>{let a=s.offsetWidth,r=s.offsetHeight;e.$$time&&clearTimeout(e.$$time),e.$$time=setTimeout(()=>{var u;(u=o.props)==null||u.onResize(a,r)},300)})},unmounted(e){e.$$erd&&e.$$erd.uninstall(e),e.$$time&&clearTimeout(e.$$time)}});x.config.globalProperties.$http=m;x.use(I);x.use(Xe,{router:I,siteIdList:[1280510106]});x.mount("#app");export{oe as b,m as i,bt as n,tt as p};
