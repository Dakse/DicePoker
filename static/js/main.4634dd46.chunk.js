(this.webpackJsonpgrapejs=this.webpackJsonpgrapejs||[]).push([[0],{12:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(5),u=t.n(c),i=t(6),l=t(1);var o=function(){var e=r.a.useState(),n=Object(l.a)(e,2)[1],t=r.a.useCallback((function(){return n({})}),[]),a=r.a.useState(0),c=Object(l.a)(a,2),u=c[0],o=c[1],s=r.a.useState([0,0,0,0,0]),f=Object(l.a)(s,2),v=f[0],d=f[1],m=r.a.useState([0,0,0,0,0]),p=Object(l.a)(m,2),g=p[0],y=p[1],E=r.a.useState([]),h=Object(l.a)(E,2),I=h[0],O=h[1],b=r.a.useState(""),j=Object(l.a)(b,2),C=j[0],Z=j[1],x=function(e){var n=function(e){var n={};return e.forEach((function(e){n[e]=(n[e]||0)+1})),Object(i.a)(new Array(6)).map((function(e,t){return{value:t+1,occurances:n[t+1]||0}}))}(e),t={value:1,name:"Nic"},a=n.findIndex((function(e){return e.occurances>1})),r=-1!==a?n.findIndex((function(e){return e.value!==n[a].value&&e.occurances>1})):-1;return-1===a&&(t={value:5,name:"Ma\u0142y Strit"}),-1!==a||n.find((function(e){return 1===e.value&&e.occurances>0}))||(t={value:6,name:"Du\u017cy Strit"}),-1!==a&&(t={value:2,name:"Para"},3===n[a].occurances&&(t={value:4,name:"Tr\xf3jka"}),4===n[a].occurances&&(t={value:8,name:"Kareta"}),5===n[a].occurances&&(t={value:9,name:"Poker"}),-1!==r&&(t={value:3,name:"Dwie pary"},3===n[a].occurances&&-1!==r&&(t={value:7,name:"Full"}),-1!==r&&3===n[r].occurances&&-1!==a&&(t={value:7,name:"Full"}))),t},k=function(e,n){var t=e;return e.forEach((function(e,a){(0===e||n.includes(a))&&(t[a]=Math.floor(6*Math.random())+1)})),t},R=function(){Z("inprogress"),d(k(v,I)),y(k(g,function(){var e=x(v).value,n=x(g).value;if(u>=2&&x(v).value===x(g).value||u>=1&&e>=n||I.length>0){var t={};g.forEach((function(e){t[e]=(t[e]||0)+1}));var a=[];return Object.keys(t).map((function(e){return{value:e,occurances:t[e]}})).forEach((function(e,n){1===e.occurances&&a.push(g.findIndex((function(n){return parseInt(n)===parseInt(e.value)})))})),a}return[]}())),o(u+1),O([]),t()},N=function(e){var n={};e.forEach((function(e){n[e]=(n[e]||0)+1}));var t=0;return Object.keys(n).map((function(e){return{value:e,occurances:n[e]}})).forEach((function(e,n){e.occurances>1&&(t+=e.value*e.occurances)})),t},A=function(e){""===C||"inprogress"===C?Z(function(e){if(!0===e)return"failure";var n=x(v).value,t=x(g).value;if(n>t)return"victory";if(n<t)return"failure";if(n===t){var a=v.reduce((function(e,n){return e+n})),r=g.reduce((function(e,n){return e+n}));if(a>r)return"victory";if(a<r)return"failure";if(a===r)return"draw"}}(N(v),N(g))):S()},S=function(){d([0,0,0,0,0]),y([0,0,0,0,0]),O([]),o(0),Z(""),t()};return r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",padding:12,alignItems:"center",justifyContent:"center",flexDirection:"column",textAlign:"center"}},"inprogress"===C&&r.a.createElement("div",{style:{color:"gray"}},"Kliknij na ko\u015b\u0107 \u017ceby oznaczy\u0107 j\u0105 do przerzucenia"),r.a.createElement("br",null),r.a.createElement("br",null),"Twoje ko\u015bci",r.a.createElement("div",{style:{display:"flex"}},v.map((function(e,n){return r.a.createElement("div",null,r.a.createElement("img",{style:{padding:3,cursor:"pointer",filter:-1!==I.findIndex((function(e){return e===n}))&&"sepia(100%) hue-rotate(90deg) saturate(400%) brightness(80%)"},alt:e,height:"30",width:"30",src:"./images/dice".concat(e,".png"),onClick:function(){if("inprogress"===C){var e=I.findIndex((function(e){return e===n}));if(-1!==e){var a=I;a.splice(e,1),O(a)}else{var r=I;r.push(n),O(r)}t()}}}))}))),0!==u&&"".concat(x(v).name)),r.a.createElement("div",{style:{display:"flex",padding:12,alignItems:"center",justifyContent:"center",flexDirection:"column"}},"Ko\u015bci przeciwnika",r.a.createElement("div",{style:{display:"flex"}},g.map((function(e){return r.a.createElement("div",{style:{filter:"brightness(60%)"}},r.a.createElement("img",{style:{padding:3},alt:e,height:"30",width:"30",src:"./images/dice".concat(e,".png")}))}))),0!==u&&"".concat(x(g).name)),r.a.createElement("div",{style:{display:"flex",padding:12,alignItems:"center",justifyContent:"center"}},r.a.createElement("button",{style:{margin:12},onClick:function(){return u>=2&&x(v).value!==x(g).value?A():R()}},0===u&&"ROZPOCZNIJ GR\u0118",1===u&&(I.length>0?"PRZERZU\u0106 KO\u015aCI I KONTYNUUJ":"KONTYNUUJ BEZ PRZERZUCANIA"),u>=2&&x(v).value!==x(g).value&&("inprogress"===C?"ZAKO\u0143CZ GR\u0118":"ZACZNIJ OD NOWA"),u>=2&&x(v).value===x(g).value&&(I.length>0?"PRZERZU\u0106 KO\u015aCI I KONTYNUUJ":"KONTYNUUJ BEZ PRZERZUCANIA")),r.a.createElement("button",{disabled:0===u||u>=2&&x(v).value!==x(g).value,style:{margin:12},onClick:function(){return A()}},"PODDAJ SI\u0118")),r.a.createElement("div",{style:{display:"flex",padding:12,alignItems:"center",justifyContent:"center",flexDirection:"column"}},r.a.createElement("h3",{style:{color:"victory"===C?"green":"failure"===C?"red":"draw"===C&&"gray"}},"victory"===C&&"ZWYCI\u0118STWO!","failure"===C&&"PORA\u017bKA!","draw"===C&&"REMIS!","inprogress"===C&&"Runda "+parseInt(u)),r.a.createElement("button",{onClick:S},"Resetuj")))};u.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o,null)),document.getElementById("root"))},7:function(e,n,t){e.exports=t(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.4634dd46.chunk.js.map