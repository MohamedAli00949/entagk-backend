"use strict";(self.webpackChunkpomodoro_=self.webpackChunkpomodoro_||[]).push([[325],{6325:function(e,t,n){n.r(t);var a=n(4942),s=n(1413),o=n(885),r=n(2791),i=n(9434),c=n(5230),l=n(6409),d=n(184),u={name:"",est:1,notes:"",project:""};t.default=function(e){var t=e.oldData,n=e.setOpen,m=e.isLoading,x=e.setIsLoading,h=e.setMessage,f=(0,i.I0)(),p=(0,r.useState)(null===t?u:t),j=(0,o.Z)(p,2),g=j[0],b=j[1],v=(0,r.useState)(""!==g.notes),N=(0,o.Z)(v,2),y=N[0],k=N[1],C=(0,r.useState)(""!==g.project),Z=(0,o.Z)(C,2),S=Z[0],z=Z[1],w=(0,i.v9)((function(e){return e.timer})),F=w.activites,I=w.active,L=function(e){"est"===e.target.name||"act"===e.target.name?b((0,s.Z)((0,s.Z)({},g),{},(0,a.Z)({},e.target.name,Number(e.target.value)))):b((0,s.Z)((0,s.Z)({},g),{},(0,a.Z)({},e.target.name,e.target.value)))};return(0,d.jsxs)(d.Fragment,{children:[m===(null===g||void 0===g?void 0:g._id)&&(0,d.jsx)("div",{className:"loading-container",style:{position:"fixed",top:"0",right:"0",background:"#ffffff73",width:"100%",height:"100%",zIndex:"1000",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,d.jsx)(l.Z,{size:"100",strokeWidth:"5",color:F[I].color,backgroud:"transperent"})}),(0,d.jsxs)("form",{className:"task-form","data-aos":"zoom-in",style:{margin:null!==t&&"20px 0 20px"},onSubmit:function(e){e.preventDefault(),n((function(e){return!e})),g.name&&g.est||h("Error at name or est"),f(t?(0,c.HZ)(g,g._id,x,h):(0,c.Pb)(g,x,h))},children:[(0,d.jsx)("div",{className:"form-container",children:(0,d.jsxs)("div",{className:"form-inner-container",children:[(0,d.jsxs)("div",{className:"block",style:{position:"relative"},children:[(0,d.jsx)("input",{autoFocus:!0,className:"".concat(!g.name&&"error"," name"),maxLength:"50",required:!0,name:"name",type:"text",value:g.name,placeholder:"What are you working on?",onChange:L}),(0,d.jsx)("div",{className:"text-counter",style:{color:"".concat(50-g.name.length>10?"#4caf50":"#ff002f")},children:(0,d.jsx)("p",{style:{fontSize:"16px",fontWeight:"500",marginBottom:"15px"},children:50-g.name.length})})]}),(0,d.jsxs)("div",{className:"block",children:[(0,d.jsxs)("p",{children:[g.act>=0&&(0,d.jsx)(d.Fragment,{children:"act / "}),"est pomodoros"]}),(0,d.jsxs)("div",{className:"pomodoros",children:[g.act>=0&&(0,d.jsx)("div",{className:"input-number",children:(0,d.jsx)("input",{name:"act",className:"act",type:"number",min:"0",max:"1000",defaultValue:g.act,onChange:L})}),g.act>=0&&(0,d.jsx)(d.Fragment,{children:"/"}),(0,d.jsx)("div",{className:"input-number",children:(0,d.jsx)("input",{name:"est",required:!0,className:"".concat(!g.est&&"error"),type:"number",min:"1",max:"1000",defaultValue:g.est,onChange:L})})]})]}),(0,d.jsxs)("div",{className:"block",children:[y&&(0,d.jsxs)("div",{className:"notes",children:[(0,d.jsx)("textarea",{name:"notes",type:"text",maxLength:"500",onChange:L,value:g.notes}),(0,d.jsx)("div",{className:"text-counter",style:{color:"".concat(500-g.notes.length>100?"#4caf50":"#ff002f")},children:(0,d.jsx)("p",{style:{fontSize:"16px",fontWeight:"500"},children:500-g.notes.length})})]}),S&&(0,d.jsx)("div",{className:"project",children:(0,d.jsx)("input",{name:"project",type:"text",onChange:L,value:g.project})}),(0,d.jsxs)("div",{className:"add-buttons",children:[!y&&(0,d.jsx)("button",{"aria-label":"add notes button",type:"button",onClick:function(){return k((function(e){return!e}))},children:"+ add notes"}),!S&&(0,d.jsx)("button",{"aria-label":"add project button",type:"button",onClick:function(){return z((function(e){return!e}))},children:"+ add project"})]})]})]})}),(0,d.jsxs)("div",{className:"task-footer",children:[(0,d.jsx)("button",{"aria-label":"cancel form button",type:"button",onClick:function(){return n((function(e){return!e}))},children:"cancel"}),(0,d.jsx)("div",{children:(0,d.jsx)("button",{"aria-label":"submit form button",type:"submit",className:"save",disabled:!g.name||!g.est,children:"save"})})]})]})]})}}}]);
//# sourceMappingURL=325.783f4e13.chunk.js.map