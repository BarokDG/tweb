import{a as o,A as s,_ as r,S as m}from"./index-417f2e5a.js";import{p as h}from"./putPreloader-089954fb.js";import{P as d}from"./page-5af70d28.js";let i;const g=async()=>{const{dcId:e,token:u,tgAddr:n}=i;let a;try{o.managers.apiManager.setBaseDcId(e);const t=await o.managers.apiManager.invokeApi("auth.importWebTokenAuthorization",{api_id:s.id,api_hash:s.hash,web_auth_token:u},{dcId:e,ignoreErrors:!0});t._==="auth.authorization"&&(o.managers.apiManager.setUser(t.user),a=r(()=>import("./pageIm-de620871.js"),["./pageIm-de620871.js","./index-417f2e5a.js","./index-a90fa790.css","./page-5af70d28.js"],import.meta.url))}catch(t){switch(t.type){case"SESSION_PASSWORD_NEEDED":{t.handled=!0,a=r(()=>import("./pagePassword-5383d4de.js"),["./pagePassword-5383d4de.js","./index-417f2e5a.js","./index-a90fa790.css","./putPreloader-089954fb.js","./page-5af70d28.js","./button-bdc02c1a.js","./htmlToSpan-94c3c226.js","./wrapEmojiText-17e48f20.js","./loginPage-1a7c0943.js","./toggleDisability-6f5940d7.js"],import.meta.url);break}default:{console.error("authorization import error:",t);const p=m.authState._;p==="authStateSignIn"?a=r(()=>import("./pageSignIn-09c6d25e.js"),["./pageSignIn-09c6d25e.js","./index-417f2e5a.js","./index-a90fa790.css","./putPreloader-089954fb.js","./page-5af70d28.js","./countryInputField-f97149f0.js","./button-bdc02c1a.js","./wrapEmojiText-17e48f20.js","./scrollable-2e4cd86b.js","./pageSignQR-dfd32b52.js","./textToSvgURL-c6ebb454.js","./toggleDisability-6f5940d7.js"],import.meta.url):p==="authStateSignQr"&&(a=r(()=>import("./pageSignQR-dfd32b52.js").then(_=>_.a),["./pageSignQR-dfd32b52.js","./index-417f2e5a.js","./index-a90fa790.css","./page-5af70d28.js","./button-bdc02c1a.js","./putPreloader-089954fb.js","./textToSvgURL-c6ebb454.js"],import.meta.url));break}}}location.hash=n?.trim()?"#?tgaddr="+encodeURIComponent(n):"",a&&a.then(t=>t.default.mount())},l=new d("page-signImport",!0,()=>{h(l.pageEl.firstElementChild,!0),g()},e=>{i=e,o.managers.appStateManager.pushToState("authState",{_:"authStateSignImport",data:i})});export{l as default};
//# sourceMappingURL=pageSignImport-6d06cb8a.js.map