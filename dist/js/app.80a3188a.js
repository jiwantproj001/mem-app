(function(e){function t(t){for(var c,a,l=t[0],o=t[1],u=t[2],s=0,b=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&b.push(n[a][0]),n[a]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);p&&p(t);while(b.length)b.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],c=!0,l=1;l<r.length;l++){var o=r[l];0!==n[o]&&(c=!1)}c&&(i.splice(t--,1),e=a(a.s=r[0]))}return e}var c={},n={app:0},i=[];function a(t){if(c[t])return c[t].exports;var r=c[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=c,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)a.d(r,c,function(t){return e[t]}.bind(null,c));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/mem-app/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var p=o;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var c=r("7a23");function n(e,t,r,n,i,a){const l=Object(c["e"])("Memorize");return Object(c["d"])(),Object(c["b"])(l)}const i=Object(c["c"])("h1",null," Memorize Application ",-1),a=Object(c["c"])("label",{for:"memorize"},"Memorize",-1),l=Object(c["c"])("br",null,null,-1),o=Object(c["c"])("label",{for:"revise"},"Revise",-1),u=Object(c["c"])("br",null,null,-1),p=Object(c["c"])("label",{for:"practise"},"Practise",-1),s=Object(c["c"])("label",{for:"practise"},"Straight",-1),b=Object(c["c"])("label",{for:"practise"},"Reverse",-1),d=Object(c["c"])("label",{for:"practise"},"Jumble",-1),h=Object(c["c"])("hr",null,null,-1),y=Object(c["c"])("label",{for:"practise"},"Count",-1),f=Object(c["c"])("label",{for:"practise"},"Rep",-1),O=Object(c["c"])("hr",null,null,-1),j=Object(c["c"])("hr",null,null,-1);function m(e,t,r,n,m,v){return Object(c["d"])(),Object(c["b"])("div",null,[i,Object(c["i"])(Object(c["c"])("input",{type:"radio",id:"memorize",name:"type",value:"memorize","onUpdate:modelValue":t[1]||(t[1]=t=>e.type=t)},null,512),[[c["g"],e.type]]),a,l,Object(c["i"])(Object(c["c"])("input",{type:"radio",id:"revise",name:"type",value:"revise","onUpdate:modelValue":t[2]||(t[2]=t=>e.type=t)},null,512),[[c["g"],e.type]]),o,u,Object(c["i"])(Object(c["c"])("input",{type:"radio",id:"practise",name:"type",value:"practise","onUpdate:modelValue":t[3]||(t[3]=t=>e.type=t)},null,512),[[c["g"],e.type]]),p,Object(c["i"])(Object(c["c"])("input",{type:"radio",id:"straight",name:"practise",value:"straight","onUpdate:modelValue":t[4]||(t[4]=t=>e.practise=t)},null,512),[[c["g"],e.practise]]),s,Object(c["i"])(Object(c["c"])("input",{type:"radio",id:"reverse",name:"type",value:"reverse","onUpdate:modelValue":t[5]||(t[5]=t=>e.practise=t)},null,512),[[c["g"],e.practise]]),b,Object(c["i"])(Object(c["c"])("input",{type:"radio",id:"jumble",name:"type",value:"jumble","onUpdate:modelValue":t[6]||(t[6]=t=>e.practise=t)},null,512),[[c["g"],e.practise]]),d,h,y,Object(c["i"])(Object(c["c"])("input",{type:"number","onUpdate:modelValue":t[7]||(t[7]=t=>e.count=t)},null,512),[[c["h"],e.count]]),f,Object(c["i"])(Object(c["c"])("input",{type:"number","onUpdate:modelValue":t[8]||(t[8]=t=>e.rep=t)},null,512),[[c["h"],e.rep]]),O,Object(c["c"])("button",{type:"button",onClick:t[9]||(t[9]=(...e)=>v.setPractise(...e))},"Practise"),Object(c["c"])("button",{type:"button",onClick:t[10]||(t[10]=(...e)=>v.clearPractise(...e))},"Clear"),j,Object(c["c"])("h1",null,Object(c["f"])(e.type),1),Object(c["c"])("h1",null,Object(c["f"])(e.practiseArray),1),Object(c["c"])("h1",null,Object(c["f"])(e.practiseArray[e.practiseIndex]),1),Object(c["c"])("button",{type:"button",onClick:t[11]||(t[11]=(...e)=>v.nextOption(...e))},"Next")])}var v={name:"Memorize",data:function(){return{type:null,practise:null,count:0,rep:0,practiseArray:[],practiseIndex:0}},methods:{setPractise(){switch(console.log("Set the Practise Mode"),this.practiseArray=[],this.practiseIndex=0,this.type){case"memorize":this.practiseArray=this.buildPractiseArray(this.count,10,5,10,3);break;case"revise":this.practiseArray=this.buildPractiseArray(this.count,5,3,5,3);break;case"practise":"straight"===this.practise?this.practiseArray=this.buildPractiseArray(this.count,this.rep,0,0,0):"reverse"===this.practise?this.practiseArray=this.buildPractiseArray(this.count,0,this.rep,0,0):"jumble"===this.practise&&(this.practiseArray=this.buildPractiseArray(this.count,0,0,this.rep,0));break}},clearPractise(){console.log("Reset Practise")},nextOption(){console.log("Next Option"),this.practiseIndex+=1},buildPractiseArray(e,t,r,c,n){let i=[];const a=Array.from({length:e},(e,t)=>t+1),l=Array.from({length:e},(t,r)=>e-r);for(let o=0;o<t;o++)i.push(...a);for(let o=0;o<r;o++)i.push(...l);for(let o=0;o<c;o++)i.push(...Array.from({length:e},(t,r)=>Math.floor(Math.random()*e)+1));for(let o=0;o<n;o++)i.push(...a);return i}}};r("e34d");v.render=m;var g=v,P={name:"App",components:{Memorize:g}};P.render=n;var A=P;Object(c["a"])(A).mount("#app")},7606:function(e,t,r){},e34d:function(e,t,r){"use strict";r("7606")}});
//# sourceMappingURL=app.80a3188a.js.map