"use strict";(self["webpackChunklist"]=self["webpackChunklist"]||[]).push([[663],{663:function(e,l,t){t.r(l),t.d(l,{default:function(){return H}});var n=t(252);const a={class:"c"};function o(e,l,t,o,r,i){const s=(0,n.up)("nav-header"),d=(0,n.up)("nav-main"),c=(0,n.up)("nav-footer");return(0,n.wg)(),(0,n.iD)("div",a,[(0,n.Wm)(s,{onAdd:e.add},null,8,["onAdd"]),(0,n.Wm)(d,{list:e.list,onDel:e.del},null,8,["list","onDel"]),(0,n.Wm)(c,{list:e.list,onClear:e.clear},null,8,["list","onClear"])])}var r=t(963);function i(e,l,t,a,o,i){return(0,n.wg)(),(0,n.iD)("div",null,[(0,n.wy)((0,n._)("input",{placeholder:" INPUT ","onUpdate:modelValue":l[0]||(l[0]=l=>e.value=l),onKeyup:l[1]||(l[1]=(0,r.D2)(((...l)=>e.enter&&e.enter(...l)),["enter"]))},null,544),[[r.nr,e.value]])])}var s=t(262),d=(0,n.aZ)({name:"navHeader",setup(e,l){let t=(0,s.iH)(""),n=()=>{l.emit("add",t.value),t.value=""};return{value:t,enter:n}}}),c=t(744);const u=(0,c.Z)(d,[["render",i],["__scopeId","data-v-2a723ccc"]]);var v=u,p=t(577);const m={key:0},w={class:"item"},C=["onUpdate:modelValue"],D=["onClick"],k={key:1,class:"m"};function _(e,l,t,a,o,i){return e.list.length>0?((0,n.wg)(),(0,n.iD)("div",m,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.list,((l,t)=>((0,n.wg)(),(0,n.iD)("div",{key:t},[(0,n._)("div",w,[(0,n.wy)((0,n._)("input",{type:"checkbox","onUpdate:modelValue":e=>l.complete=e},null,8,C),[[r.e8,l.complete]]),(0,n.Uk)(" "+(0,p.zw)(l.title)+" ",1),(0,n._)("button",{class:"del",onClick:n=>e.del(l,t)}," DELETE ",8,D)])])))),128))])):((0,n.wg)(),(0,n.iD)("div",k," MISSION COMPLETED~ !!沒事情拉～～ "))}var g=(0,n.aZ)({name:"navMain",props:{list:{type:Array,required:!0}},emits:["del"],setup(e,l){let t=(e,t)=>{l.emit("del",t)};return{del:t}}});const y=(0,c.Z)(g,[["render",_],["__scopeId","data-v-51978914"]]);var f=y;const E={class:"container"},b={key:0,class:"btn"};function h(e,l,t,a,o,r){return(0,n.wg)(),(0,n.iD)("div",E,[(0,n._)("div",null," COMPLETED: "+(0,p.zw)(e.isComplete)+" / ALL: "+(0,p.zw)(e.list.length),1),e.isComplete>0?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("button",{onClick:l[0]||(l[0]=(...l)=>e.clear&&e.clear(...l))},"CLEAR COMPLETED")])):(0,n.kq)("",!0)])}var Z=(0,n.aZ)({name:"navFooter",props:{list:{type:Array,required:!0}},setup(e,l){let t=(0,n.Fl)((()=>{let l=e.list.filter((e=>e.complete));return l.length})),a=()=>{let t=e.list.filter((e=>!1===e.complete));l.emit("clear",t)};return{isComplete:t,clear:a}}});const I=(0,c.Z)(Z,[["render",h],["__scopeId","data-v-c8bdb9ec"]]);var L=I,M=t(907),T=(0,n.aZ)({name:"MyComponent",components:{NavHeader:v,NavMain:f,NavFooter:L},setup(){let e=(0,s.iH)(""),l=l=>{e.value=l;let t=!0;r.value.map((l=>{l.title===e.value&&(t=!1,alert("事項已經重複！！"))})),t&&o.commit("addTodo",{title:e.value,complete:!1}),console.log(l)},t=e=>{o.commit("delTodo",e),console.log(e)},a=e=>{o.commit("clear",e)},o=(0,M.oR)(),r=(0,n.Fl)((()=>o.state.list));return{add:l,value:e,list:r,del:t,clear:a}}});const A=(0,c.Z)(T,[["render",o],["__scopeId","data-v-5d96b61a"]]);var H=A}}]);
//# sourceMappingURL=663.abfb4aad.js.map