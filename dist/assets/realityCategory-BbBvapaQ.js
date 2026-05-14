import{j as o}from"./ui-vendor-ZQqktRUm.js";import{c as s,M as t}from"./index-D__iBCz6.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i=s("Archive",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=s("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=s("Map",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]),d=({height:a="400px"})=>o.jsxs("div",{className:"flex flex-col items-center justify-center rounded-lg border border-border bg-muted/30",style:{height:a},children:[o.jsx(c,{className:"text-muted-foreground mb-2 animate-pulse",size:32}),o.jsx("p",{className:"text-sm text-muted-foreground font-body",children:"Caricamento mappa…"})]}),m=(a,r)=>{const e=a==="con-sede";return r==="archiviato"?e?"spazio-fu-spazio":"spazio-fu-senza":e?"spazio":"spazio-senza-spazio"},y={spazio:{label:"Spazio",icon:t,badgeClass:"bg-primary/10 text-primary border-primary/30",markerColor:"hsl(var(--primary))",outline:!1},"spazio-senza-spazio":{label:"Spazio senza spazio",icon:n,badgeClass:"bg-secondary/10 text-secondary border-secondary/30",markerColor:"hsl(var(--secondary))",outline:!1},"spazio-fu-spazio":{label:"Spazio che fu",icon:i,badgeClass:"bg-card text-primary border-primary/40",markerColor:"hsl(var(--primary))",outline:!0},"spazio-fu-senza":{label:"Spazio che fu (itinerante)",icon:i,badgeClass:"bg-card text-secondary border-secondary/40",markerColor:"hsl(var(--secondary))",outline:!0}},u=(a,r,e)=>a==="spazi-che-furono"?e==="archiviato":a==="spazi"?e==="attivo"&&r==="con-sede":e==="attivo"&&r==="nomade";export{d as M,c as a,y as c,m as g,u as m};
