"use strict";(self.webpackChunkpomodoro_=self.webpackChunkpomodoro_||[]).push([[77],{77:function(e,n,t){t.r(n);var a=t(4942),o=t(1413),c=t(885),l=t(2791),i=t(601),r=t(771),s=t(184),u=(0,l.lazy)((function(){return Promise.all([t.e(425),t.e(871)]).then(t.bind(t,871))})),m=(0,l.lazy)((function(){return t.e(60).then(t.bind(t,2060))}));n.default=function(e){var n=e.type,t=e.data,d=e.setData,p="alarm"===n?i.Gn:"ticking"===n?i._J:i.mA,h=(0,l.useRef)((0,r.Z)({src:t["".concat(n,"Type")].src,volume:t["".concat(n,"Volume")]})),f=(0,l.useState)(null),y=(0,c.Z)(f,2),g=y[0],v=y[1];return(0,l.useEffect)((function(){null!==g&&"none"!==t["".concat(n,"Type")].name&&(h.current.changeFile(t["".concat(n,"Type")].src),h.current.chengeVolume(t["".concat(n,"Volume")]),h.current.handlePlay(),console.log(n)),console.log(g)}),[g]),(0,s.jsxs)("div",{className:"alarm-details",children:[(0,s.jsxs)("div",{className:"alarm-type",children:[(0,s.jsx)("p",{style:{width:"inherit",fontSize:18,fontWeight:400},children:"Sound type"}),(0,s.jsx)(u,{data:t,options:p,setData:d,type:"".concat(n,"Type"),setChange:v})]}),"none"!==t["".concat(n,"Type")].name&&(0,s.jsxs)("div",{className:"alarm-type",children:[(0,s.jsx)("p",{style:{width:"inherit",fontSize:18,fontWeight:400},children:"Sound Volume"}),(0,s.jsxs)("div",{className:"range-container",children:[(0,s.jsx)("p",{children:t["".concat(n,"Volume")]}),(0,s.jsx)("input",{type:"range",className:"range",min:"0",max:"100",value:t["".concat(n,"Volume")],name:"".concat(n,"Volume"),onChange:function(e){d((0,o.Z)((0,o.Z)({},t),{},(0,a.Z)({},e.target.name,Number(e.target.value)))),v(!g)}})]})]}),"alarm"===n&&(0,s.jsxs)("div",{className:"alarm-type",children:[(0,s.jsx)("p",{style:{width:"inherit",fontSize:18,fontWeight:400},children:"Repet"}),(0,s.jsx)(m,{type:"alarmRepet",data:t,setData:d})]})]})}},771:function(e,n){n.Z=function(e){var n=e.src,t=e.volume,a=void 0===t?50:t,o=e.loop,c=void 0!==o&&o,l=new Audio;l.src=n,l.volume=a/100,l.loop=c;return{handlePlay:function(){!l.paused&&l.currentTime||l.play().catch((function(){}))},handleStop:function(){l.pause()},chengeVolume:function(e){return l.volume=e/100},changeFile:function(e){l.pause(),l.src=e},changeLoop:function(e){l.loop=e}}}}}]);
//# sourceMappingURL=77.feb4518f.chunk.js.map