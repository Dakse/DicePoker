(this.webpackJsonpgrapejs=this.webpackJsonpgrapejs||[]).push([[0],{12:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),i=r(5),u=r.n(i),c=r(6),l=r(1);var o=function(){var e=a.a.useState("pl"),n=Object(l.a)(e,2),r=n[0],t=n[1],i=a.a.useState(),u=Object(l.a)(i,2)[1],o=a.a.useCallback((function(){return u({})}),[]),f=a.a.useState(0),s=Object(l.a)(f,2),p=s[0],d=s[1],g=a.a.useState([0,0,0,0,0]),v=Object(l.a)(g,2),m=v[0],y=v[1],E=a.a.useState([0,0,0,0,0]),k=Object(l.a)(E,2),b=k[0],I=k[1],O=a.a.useState([]),R=Object(l.a)(O,2),h=R[0],N=R[1],C=a.a.useState(""),Z=Object(l.a)(C,2),A=Z[0],j=Z[1],U=function(e){switch(e){case"Nic":if("pl"===r)return e;if("eng"===r)return"Nothing";break;case"Para":if("pl"===r)return e;if("eng"===r)return"Pair";break;case"Dwie pary":if("pl"===r)return e;if("eng"===r)return"Two Pairs";break;case"Tr\xf3jka":if("pl"===r)return e;if("eng"===r)return"Three-of-a-Kind";break;case"Kareta":if("pl"===r)return e;if("eng"===r)return"Four-of-a-Kind";break;case"Poker":if("pl"===r)return e;if("eng"===r)return"Five-of-a-Kind";break;case"Ma\u0142y strit":if("pl"===r)return e;if("eng"===r)return"Five High Straight";break;case"Du\u017cy strit":if("pl"===r)return e;if("eng"===r)return"Six High Straight";break;case"Full":if("pl"===r)return e;if("eng"===r)return"Full House";break;case"PORA\u017bKA!":if("pl"===r)return e;if("eng"===r)return"FAILURE!";break;case"ZWYCI\u0118STWO!":if("pl"===r)return e;if("eng"===r)return"VICTORY!";break;case"REMIS!":if("pl"===r)return e;if("eng"===r)return"DRAW!";break;case"Runda":if("pl"===r)return e;if("eng"===r)return"Round";break;case"ROZPOCZNIJ GR\u0118":if("pl"===r)return e;if("eng"===r)return"START";break;case"PRZERZU\u0106 KO\u015aCI I KONTYNUUJ":if("pl"===r)return e;if("eng"===r)return"RE-ROLL AND CONTINUE";break;case"KONTYNUUJ BEZ PRZERZUCANIA":if("pl"===r)return e;if("eng"===r)return"CONTINUE WITHOUT RE-ROLLING";break;case"ZAKO\u0143CZ GR\u0118":if("pl"===r)return e;if("eng"===r)return"FINISH";break;case"ZACZNIJ OD NOWA":if("pl"===r)return e;if("eng"===r)return"PLAY AGAIN";break;case"PODDAJ SI\u0118":if("pl"===r)return e;if("eng"===r)return"GIVE UP";break;case"Ko\u015bci przeciwnika":if("pl"===r)return e;if("eng"===r)return"Opponent dice";break;case"Twoje ko\u015bci":if("pl"===r)return e;if("eng"===r)return"Your dice";break;case"Kliknij na ko\u015b\u0107 \u017ceby oznaczy\u0107 j\u0105 do przerzucenia":if("pl"===r)return e;if("eng"===r)return"Click on a dice to mark it for re-rolling"}},K=function(e){var n=function(e){var n={};return e.forEach((function(e){n[e]=(n[e]||0)+1})),Object(c.a)(new Array(6)).map((function(e,r){return{value:r+1,occurances:n[r+1]||0}}))}(e),r={value:1,name:U("Nic")},t=n.findIndex((function(e){return e.occurances>1})),a=-1!==t?n.findIndex((function(e){return e.value!==n[t].value&&e.occurances>1})):-1;return-1===t&&(r={value:5,name:U("Ma\u0142y Strit")}),-1!==t||n.find((function(e){return 1===e.value&&e.occurances>0}))||(r={value:6,name:U("Du\u017cy Strit")}),-1!==t&&(r={value:2,name:U("Para")},3===n[t].occurances&&(r={value:4,name:U("Tr\xf3jka")}),4===n[t].occurances&&(r={value:8,name:U("Kareta")}),5===n[t].occurances&&(r={value:9,name:U("Poker")}),-1!==a&&(r={value:3,name:U("Dwie pary")},3===n[t].occurances&&-1!==a&&(r={value:7,name:U("Full")}),-1!==a&&3===n[a].occurances&&-1!==t&&(r={value:7,name:U("Full")}))),r},P=function(e,n){var r=e;return e.forEach((function(e,t){(0===e||n.includes(t))&&(r[t]=Math.floor(6*Math.random())+1)})),r},S=function(){j("inprogress"),y(P(m,h)),I(P(b,function(){var e=K(m).value,n=K(b).value;if(p>=2&&K(m).value===K(b).value||p>=1&&e>=n||h.length>0){var r={};b.forEach((function(e){r[e]=(r[e]||0)+1}));var t=[];return Object.keys(r).map((function(e){return{value:e,occurances:r[e]}})).forEach((function(e,n){1===e.occurances&&t.push(b.findIndex((function(n){return parseInt(n)===parseInt(e.value)})))})),t}return[]}())),d(p+1),N([]),o()},T=function(e){var n={};e.forEach((function(e){n[e]=(n[e]||0)+1}));var r=0;return Object.keys(n).map((function(e){return{value:e,occurances:n[e]}})).forEach((function(e,n){e.occurances>1&&(r+=e.value*e.occurances)})),r},x=function(e){""===A||"inprogress"===A?j(function(e){if(!0===e)return"failure";var n=K(m).value,r=K(b).value;if(n>r)return"victory";if(n<r)return"failure";if(n===r){var t=m.reduce((function(e,n){return e+n})),a=b.reduce((function(e,n){return e+n}));if(t>a)return"victory";if(t<a)return"failure";if(t===a)return"draw"}}(T(m),T(b))):w()},w=function(){y([0,0,0,0,0]),I([0,0,0,0,0]),N([]),d(0),j(""),o()};return a.a.createElement("div",null,a.a.createElement("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center"}},a.a.createElement("p",{style:{cursor:"pointer",padding:4},onClick:function(){return t("pl")}},"PL")," ","/",a.a.createElement("p",{style:{cursor:"pointer",padding:4},onClick:function(){return t("eng")}},"ENG")),a.a.createElement("div",{style:{display:"flex",padding:12,alignItems:"center",justifyContent:"center",flexDirection:"column",textAlign:"center"}},"inprogress"===A&&a.a.createElement("div",{style:{color:"gray"}},U("Kliknij na ko\u015b\u0107 \u017ceby oznaczy\u0107 j\u0105 do przerzucenia")),a.a.createElement("br",null),a.a.createElement("br",null),U("Twoje ko\u015bci"),a.a.createElement("div",{style:{display:"flex"}},m.map((function(e,n){return a.a.createElement("div",null,a.a.createElement("img",{style:{padding:3,cursor:"pointer",filter:-1!==h.findIndex((function(e){return e===n}))&&"sepia(100%) hue-rotate(90deg) saturate(400%) brightness(80%)"},alt:e,height:"30",width:"30",src:"./images/dice".concat(e,".png"),onClick:function(){if("inprogress"===A){var e=h.findIndex((function(e){return e===n}));if(-1!==e){var r=h;r.splice(e,1),N(r)}else{var t=h;t.push(n),N(t)}o()}}}))}))),0!==p&&"".concat(K(m).name)),a.a.createElement("div",{style:{display:"flex",padding:12,alignItems:"center",justifyContent:"center",flexDirection:"column"}},U("Ko\u015bci przeciwnika"),a.a.createElement("div",{style:{display:"flex"}},b.map((function(e){return a.a.createElement("div",{style:{filter:"brightness(60%)"}},a.a.createElement("img",{style:{padding:3},alt:e,height:"30",width:"30",src:"./images/dice".concat(e,".png")}))}))),0!==p&&"".concat(K(b).name)),a.a.createElement("div",{style:{display:"flex",padding:12,alignItems:"center",justifyContent:"center"}},a.a.createElement("button",{style:{margin:12},onClick:function(){return p>=2&&K(m).value!==K(b).value?x():S()}},0===p&&U("ROZPOCZNIJ GR\u0118"),1===p&&(h.length>0?U("PRZERZU\u0106 KO\u015aCI I KONTYNUUJ"):U("KONTYNUUJ BEZ PRZERZUCANIA")),p>=2&&K(m).value!==K(b).value&&U("inprogress"===A?"ZAKO\u0143CZ GR\u0118":"ZACZNIJ OD NOWA"),p>=2&&K(m).value===K(b).value&&(h.length>0?U("PRZERZU\u0106 KO\u015aCI I KONTYNUUJ"):U("KONTYNUUJ BEZ PRZERZUCANIA"))),a.a.createElement("button",{disabled:0===p||p>=2&&K(m).value!==K(b).value,style:{margin:12},onClick:function(){return x()}},U("PODDAJ SI\u0118"))),a.a.createElement("div",{style:{display:"flex",padding:12,alignItems:"center",justifyContent:"center",flexDirection:"column"}},a.a.createElement("h3",{style:{color:"victory"===A?"green":"failure"===A?"red":"draw"===A&&"gray"}},"victory"===A&&U("ZWYCI\u0118STWO!"),"failure"===A&&U("PORA\u017bKA!"),"draw"===A&&U("REMIS!"),"inprogress"===A&&U("Runda")+" "+parseInt(p)),a.a.createElement("button",{onClick:w},"Reset")))};u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(o,null)),document.getElementById("root"))},7:function(e,n,r){e.exports=r(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.60f6c455.chunk.js.map