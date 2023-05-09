(()=>{"use strict";var e={4237:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var o=t(885),a=t(9526),i=t(2365),n=t(4637),s=t(9233),l=t(1133),d=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];function u(e){var r=function(e){for(var r=!1,t=!1,o=new Array(9),a=0;a<=7;a++){var i=d[a],n=e[i[0]],s=e[i[1]],l=e[i[2]];if(void 0!==n&&void 0!==s&void 0!==l&&n===s&&s===l){r=!0,o[i[0]]=!0,o[i[1]]=!0,o[i[2]]=!0;break}}return r||9==e.filter((function(e){return"X"===e})).length+e.filter((function(e){return"O"===e})).length&&(t=!0),{venceu:r,empatou:t,posicaoVitoria:o}}(e);return{venceu:r.venceu,empatou:r.empatou,posicaoVitoria:r.posicaoVitoria}}var c=t(4836);const f=c.default.create({coluna:{display:"flex",justifyContent:"center",alignItems:"center",width:110,height:110},marcadorJogador:{fontSize:60}});var j=t(7557);function h(e){var r=e.jogador,t=void 0===r?null:r,o=e.temBordaDireita,a=void 0!==o&&o,i=e.temBordaInferior,n=void 0!==i&&i,d=e.pecaVitorisosa,u=a?3:0,c=n?3:0,h=void 0!==d&&d?"red":"black";return(0,j.jsx)(l.default,{style:[f.coluna,{borderRightWidth:u,borderBottomWidth:c}],children:(0,j.jsx)(s.default,{style:[f.marcadorJogador,{color:h}],children:t})})}const v=c.default.create({container:{flex:1,backgroundColor:"#fff",alignItems:"center",justifyContent:"center"},titulo:{fontSize:32,marginBottom:24},linha:{display:"flex",flexDirection:"row"},tabuleiro:{marginTop:24},areaReinicio:{display:"flex",alignItems:"center"},status:{fontSize:20,marginBottom:12}});function x(){var e=(0,a.useState)("X"),r=(0,o.default)(e,2),t=r[0],d=r[1],c=(0,a.useState)(new Array(9)),f=(0,o.default)(c,2),x=f[0],p=f[1],m=(0,a.useState)(!1),g=(0,o.default)(m,2),y=g[0],b=g[1],B=(0,a.useState)(!1),V=(0,o.default)(B,2),O=V[0],P=V[1],S=(0,a.useState)(new Array(9)),w=(0,o.default)(S,2),I=w[0],k=w[1];function D(e){if(void 0===x[e]&&!y){!function(e){var r=x;r[e]=t,p(r)}(e),d("X"==t?"O":"X");var r=u(x);b(r.venceu),P(r.empatou),k(r.posicaoVitoria)}}return(0,j.jsxs)(l.default,{style:v.container,children:[(0,j.jsx)(s.default,{style:v.titulo,children:"Jogo da Velha"}),(0,j.jsxs)(s.default,{style:v.status,children:["Jogador da vez: ",t]}),y?(0,j.jsx)(l.default,{style:v.areaReinicio,children:(0,j.jsx)(s.default,{style:v.status,children:"Vit\xf3ria!"})}):"",O?(0,j.jsx)(l.default,{style:v.areaReinicio,children:(0,j.jsx)(s.default,{style:v.status,children:"Empate!"})}):"",y||O?(0,j.jsx)(i.default,{title:"Reiniciar Partida",onPress:function(){d("X"),p(new Array(9)),b(!1),P(!1),k(new Array(9))}}):"",(0,j.jsxs)(l.default,{style:v.tabuleiro,children:[(0,j.jsxs)(l.default,{style:v.linha,children:[(0,j.jsx)(n.default,{onPress:function(){return D(0)},children:(0,j.jsx)(h,{jogador:x[0],temBordaDireita:!0,temBordaInferior:!0,pecaVitorisosa:I[0]})}),(0,j.jsx)(n.default,{onPress:function(){return D(1)},children:(0,j.jsx)(h,{jogador:x[1],temBordaDireita:!0,temBordaInferior:!0,pecaVitorisosa:I[1]})}),(0,j.jsx)(n.default,{onPress:function(){return D(2)},children:(0,j.jsx)(h,{jogador:x[2],temBordaInferior:!0,pecaVitorisosa:I[2]})})]}),(0,j.jsxs)(l.default,{style:v.linha,children:[(0,j.jsx)(n.default,{onPress:function(){return D(3)},children:(0,j.jsx)(h,{jogador:x[3],temBordaDireita:!0,temBordaInferior:!0,pecaVitorisosa:I[3]})}),(0,j.jsx)(n.default,{onPress:function(){return D(4)},children:(0,j.jsx)(h,{jogador:x[4],temBordaDireita:!0,temBordaInferior:!0,pecaVitorisosa:I[4]})}),(0,j.jsx)(n.default,{onPress:function(){return D(5)},children:(0,j.jsx)(h,{jogador:x[5],temBordaInferior:!0,pecaVitorisosa:I[5]})})]}),(0,j.jsxs)(l.default,{style:v.linha,children:[(0,j.jsx)(n.default,{onPress:function(){return D(6)},children:(0,j.jsx)(h,{jogador:x[6],temBordaDireita:!0,pecaVitorisosa:I[6]})}),(0,j.jsx)(n.default,{onPress:function(){return D(7)},children:(0,j.jsx)(h,{jogador:x[7],temBordaDireita:!0,pecaVitorisosa:I[7]})}),(0,j.jsx)(n.default,{onPress:function(){return D(8)},children:(0,j.jsx)(h,{jogador:x[8],pecaVitorisosa:I[8]})})]})]})]})}function p(){return(0,j.jsx)(j.Fragment,{children:(0,j.jsx)(x,{})})}}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var i=r[o]={exports:{}};return e[o](i,i.exports,t),i.exports}t.m=e,(()=>{var e=[];t.O=(r,o,a,i)=>{if(!o){var n=1/0;for(u=0;u<e.length;u++){for(var[o,a,i]=e[u],s=!0,l=0;l<o.length;l++)(!1&i||n>=i)&&Object.keys(t.O).every((e=>t.O[e](o[l])))?o.splice(l--,1):(s=!1,i<n&&(n=i));if(s){e.splice(u--,1);var d=a();void 0!==d&&(r=d)}}return r}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}})(),t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};t.O.j=r=>0===e[r];var r=(r,o)=>{var a,i,[n,s,l]=o,d=0;if(n.some((r=>0!==e[r]))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(l)var u=l(t)}for(r&&r(o);d<n.length;d++)i=n[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},o=self.webpackChunkweb=self.webpackChunkweb||[];o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o))})();var o=t.O(void 0,[199],(()=>t(4620)));o=t.O(o)})();
//# sourceMappingURL=main.43259fcd.js.map