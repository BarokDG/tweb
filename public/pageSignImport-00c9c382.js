import{a as o,A as s,_ as r,S as m}from"./index-5fba2eb8.js";import{p as h}from"./putPreloader-c5f2a7af.js";import{P as d}from"./page-606ec203.js";let i;const g=async()=>{const{dcId:e,token:u,tgAddr:n}=i;let a;try{o.managers.apiManager.setBaseDcId(e);const t=await o.managers.apiManager.invokeApi("auth.importWebTokenAuthorization",{api_id:s.id,api_hash:s.hash,web_auth_token:u},{dcId:e,ignoreErrors:!0});t._==="auth.authorization"&&(o.managers.apiManager.setUser(t.user),a=r(()=>import("./pageIm-5e89ace3.js"),["./pageIm-5e89ace3.js","./index-5fba2eb8.js","./index-d6ddf6d1.css","./page-606ec203.js"],import.meta.url))}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":{t.handled=!0,a=r(()=>import("./pagePassword-39da405f.js"),["./pagePassword-39da405f.js","./index-5fba2eb8.js","./index-d6ddf6d1.css","./putPreloader-c5f2a7af.js","./page-606ec203.js","./button-70faa287.js","./htmlToSpan-9159192c.js","./wrapEmojiText-acc340b9.js","./loginPage-a58177c8.js"],import.meta.url);break}default:{console.error("authorization import error:",t);const p=m.authState._;p==="authStateSignIn"?a=r(()=>import("./pageSignIn-08a51d23.js"),["./pageSignIn-08a51d23.js","./index-5fba2eb8.js","./index-d6ddf6d1.css","./putPreloader-c5f2a7af.js","./page-606ec203.js","./countryInputField-8bee422c.js","./button-70faa287.js","./wrapEmojiText-acc340b9.js","./scrollable-e4ff2dd9.js","./pageSignQR-d0e773c8.js","./textToSvgURL-c6ebb454.js"],import.meta.url):p==="authStateSignQr"&&(a=r(()=>import("./pageSignQR-d0e773c8.js").then(_=>_.a),["./pageSignQR-d0e773c8.js","./index-5fba2eb8.js","./index-d6ddf6d1.css","./page-606ec203.js","./button-70faa287.js","./putPreloader-c5f2a7af.js","./textToSvgURL-c6ebb454.js"],import.meta.url));break}}}location.hash=n?.trim()?"#?tgaddr="+encodeURIComponent(n):"",a&&a.then(t=>t.default.mount())},l=new d("page-signImport",!0,()=>{h(l.pageEl.firstElementChild,!0),g()},e=>{i=e,o.managers.appStateManager.pushToState("authState",{_:"authStateSignImport",data:i})});export{l as default};
//# sourceMappingURL=pageSignImport-00c9c382.js.map