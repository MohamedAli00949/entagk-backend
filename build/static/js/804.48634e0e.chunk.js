"use strict";(self.webpackChunkpomodoro_=self.webpackChunkpomodoro_||[]).push([[804],{2804:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var o=t(885),c=t(2791),r=t(9434),i=t(601),a=t(7710),u=t(771),l=t(6409),s=t(184),d=(0,c.lazy)((function(){return t.e(178).then(t.bind(t,2178))})),m=(0,c.lazy)((function(){return Promise.all([t.e(856),t.e(578),t.e(23)]).then(t.bind(t,9023))})),f=new window.Worker("worker.js"),p=function(){var e=(0,r.v9)((function(e){return e.timer})),n=e.active,t=e.activites,p=e.setting,h=e.started,g=e.periodNum,y=e.restOfTime,k=(0,c.useState)(null===y?0:y),v=(0,o.Z)(k,2),b=v[0],T=v[1],w=p.time[n],P=(0,r.I0)(),j=(0,c.useRef)("none"!==p.tickingType.name?(0,u.Z)({src:p.tickingType.src,volume:p.tickingVolume,loop:!0}):null),x=(0,c.useRef)((0,u.Z)({src:p.alarmType.src,volume:p.alarmVolume,loop:p.alarmRepet})),V=(0,c.useRef)("none"!==p.clickType.name?(0,u.Z)({src:p.clickType.src,volume:p.clickVolume}):null);(0,c.useEffect)((function(){"default"===Notification.permission&&Notification.requestPermission()})),(0,c.useEffect)((function(){document.body.style.backgroundColor=t[n].color,void 0!==p.time&&T((null===p||void 0===p?void 0:p.time[n])-y)}),[n,p.time]),(0,c.useEffect)((function(){"none"!==p.tickingType.name&&(j.current.chengeVolume(p.tickingVolume),j.current.changeFile(p.tickingType.src)),x.current.chengeVolume(p.alarmVolume),x.current.changeFile(p.alarmType.src),x.current.changeLoop(p.alarmRepet),"none"!==p.clickType.name&&(V.current.chengeVolume(p.clickVolume),V.current.changeFile(p.clickType.src))}),[p]),(0,c.useEffect)((function(){(n!==i.aI&&p.autoBreaks||n===i.aI&&p.autoPomodors&&0!==g)&&setTimeout((function(){x.current.handleStop(),"none"!==p.tickingType.name&&j.current.handlePlay(),f.postMessage({started:!h,count:p.time[n]}),P({type:i.BG,data:0})}),1e4)}),[n,p.autoBreaks,p.autoPomodors]),(0,c.useEffect)((function(){h?(document.body.onbeforeunload=function(){return function(){return"Hello, world!"}},p.focusMode&&(document.body.style.backgroundColor="rgb(30 30 30)",document.body.style.overflow="hidden")):(document.body.onbeforeunload=null,p.focusMode&&(document.body.style.backgroundColor=t[n].color,document.body.style.overflow="auto"))}),[h]),f.onmessage=function(e){"stop"!==e.data?(T(e.data),"granted"===Notification.permission&&0!==b&&("every"===p.notificationType?b%(60*p.notificationInterval)===0&&b!==w&&(0,a.h)("".concat(b/60," minutes left!")):b-60*p.notificationInterval===0&&b!==w&&(0,a.h)("".concat(b/60," minutes left!")))):(P({type:i.pt,data:0}),x.current.handlePlay(),"none"!==p.tickingType.name&&j.current.handleStop(),"granted"===Notification.permission&&(n===i.aI?(0,a.h)("It's time to take a break"):(0,a.h)("It's time to focus!")),P((0,i.P8)(n)))};var I=(0,c.useCallback)((function(){console.log("toggle start"),"none"!==p.clickType.name&&V.current.handlePlay(),x.current.handleStop(),h?(f.postMessage("stop"),"none"!==p.tickingType.name&&j.current.handleStop(),P({type:i.pt,data:p.time[n]-b})):("none"!==p.tickingType.name&&j.current.handlePlay(),f.postMessage({started:!h,count:b}),P({type:i.BG,data:0}))}),[h,b]),S=function(){T(w),"none"!==p.clickType.name&&V.current.handlePlay()};return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:"clock-container",style:{background:"".concat(t[n].timerBorder)},children:(0,s.jsx)("div",{className:"clock",children:(0,s.jsx)(c.Suspense,{fallback:(0,s.jsx)(l.Z,{color:t[n].color,backgroud:"transparent",width:"200",height:"200",cx:"50",cy:"50",r:"20",strokeWidth:"2.5"}),children:"digital"===p.format?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(m,{handleReset:S,toggleStart:I,setTime:T,time:b})}):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(d,{handleReset:S,toggleStart:I,setTime:T,time:b})})})})})})}},771:function(e,n){n.Z=function(e){var n=e.src,t=e.volume,o=void 0===t?50:t,c=e.loop,r=void 0!==c&&c,i=new Audio;i.src=n,i.volume=o/100,i.loop=r;return{handlePlay:function(){!i.paused&&i.currentTime||i.play().catch((function(){}))},handleStop:function(){i.pause()},chengeVolume:function(e){return i.volume=e/100},changeFile:function(e){i.pause(),i.src=e},changeLoop:function(e){i.loop=e}}}},7710:function(e,n,t){t.d(n,{h:function(){return c},m:function(){return o}});var o=function(e){var n=e%60,t=Math.floor(e/60);return"".concat(t>=10?t:"0"+t,":").concat(n>=10?n:"0"+n)},c=function(e){new Notification(e,{icon:"favicon.ico",tag:"mohamed ali",requireInteraction:!0,renotify:!0})}}}]);
//# sourceMappingURL=804.48634e0e.chunk.js.map