(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{NodO:function(t,e,o){"use strict";o.r(e);var n=o("ofXK"),r=o("tyNb"),a=o("fXoL"),i=o("jhN1"),s=o("3Pt+");function c(t,e){1&t&&(a.Rb(0,"span",3),a.wc(1,"*"),a.Qb())}let l=(()=>{class t{constructor(){this.required=!1,this.autocomplete=!1,this.type="text",this.id=Date.now()*Math.random(),this.control=new s.c("")}registerOnChange(t){this.control.valueChanges.subscribe(t)}registerOnTouched(t){}setDisabledState(t){t?this.control.disable():this.control.enable()}writeValue(t){this.control.setValue(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Gb({type:t,selectors:[["app-ui-input"]],inputs:{label:"label",required:"required",autocomplete:"autocomplete",type:"type"},features:[a.Ab([{provide:s.g,useExisting:t,multi:!0}])],decls:4,vars:11,consts:[[3,"type","required","autocomplete","id","formControl","name"],[3,"for"],["class","req",4,"ngIf"],[1,"req"]],template:function(t,e){1&t&&(a.Nb(0,"input",0),a.Rb(1,"label",1),a.wc(2),a.uc(3,c,2,0,"span",2),a.Qb()),2&t&&(a.Eb("active",e.control.value.length),a.jc("type",e.type)("required",e.required)("autocomplete",e.autocomplete?"on":"off")("id",e.id)("formControl",e.control)("name",e.label),a.Bb(1),a.jc("for",e.id),a.Bb(1),a.yc(" ",e.label," "),a.Bb(1),a.jc("ngIf",e.required))},directives:[s.a,s.m,s.i,s.d,n.l],styles:["[_nghost-%COMP%]{position:relative;margin-bottom:40px;display:block}[_nghost-%COMP%]   label[_ngcontent-%COMP%]{display:block;position:absolute;transform:translateY(6px);left:13px;top:-3px;color:hsla(0,0%,100%,.5);transition:all .25s ease;-webkit-backface-visibility:hidden;pointer-events:none;font-size:22px}[_nghost-%COMP%]   label[_ngcontent-%COMP%]   .req[_ngcontent-%COMP%]{margin:2px;color:#1ab188}[_nghost-%COMP%]   input[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{font-size:22px;display:block;width:100%;height:100%;padding:5px 10px;background:none;border:1px solid #a0b3b0;color:#fff;border-radius:0;transition:border-color .25s ease,box-shadow .25s ease}[_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus, [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:focus{outline:0;border-color:#1ab188}[_nghost-%COMP%]   input.active[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], [_nghost-%COMP%]   input[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea.active[_ngcontent-%COMP%] + label[_ngcontent-%COMP%], [_nghost-%COMP%]   textarea[_ngcontent-%COMP%]:focus + label[_ngcontent-%COMP%]{transform:translateY(50px);left:2px;font-size:14px;color:#fff}[_nghost-%COMP%]   textarea[_ngcontent-%COMP%]{border:2px solid #a0b3b0;resize:vertical}"]}),t})(),b=(()=>{class t{constructor(t){this.fb=t,this.form=this.fb.group({firstName:["",[s.n.required]],lastName:["",[s.n.required]],email:["",[s.n.required]],password:["",[s.n.required]]})}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(s.b))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-sign-up"]],decls:10,vars:1,consts:[[3,"formGroup"],[1,"top-row"],["label","First Name","required","true","formControlName","firstName"],["label","Last Name","required","true","formControlName","lastName"],["label","Email Address","type","email","required","true","formControlName","email"],["label","Set A Password","type","password","required","true","formControlName","password"],["type","submit",1,"button","button-block"]],template:function(t,e){1&t&&(a.Rb(0,"h1"),a.wc(1,"Sign Up for Free"),a.Qb(),a.Rb(2,"form",0),a.Rb(3,"div",1),a.Nb(4,"app-ui-input",2),a.Nb(5,"app-ui-input",3),a.Qb(),a.Nb(6,"app-ui-input",4),a.Nb(7,"app-ui-input",5),a.Rb(8,"button",6),a.wc(9,"Get Started"),a.Qb(),a.Qb()),2&t&&(a.Bb(2),a.jc("formGroup",e.form))},directives:[s.o,s.j,s.f,l,s.m,s.i,s.e],styles:[""]}),t})(),p=(()=>{class t{constructor(t){this.fb=t,this.form=this.fb.group({email:[""],password:[""]})}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(s.b))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-log-in"]],decls:10,vars:1,consts:[[3,"formGroup"],["label","Email Address","type","email","required","true","formControlName","email"],["label","Password","type","password","required","true","formControlName","password"],[1,"forgot"],["href","#"],[1,"button","button-block"]],template:function(t,e){1&t&&(a.Rb(0,"h1"),a.wc(1,"Welcome Back!"),a.Qb(),a.Rb(2,"form",0),a.Nb(3,"app-ui-input",1),a.Nb(4,"app-ui-input",2),a.Rb(5,"p",3),a.Rb(6,"a",4),a.wc(7,"Forgot Password?"),a.Qb(),a.Qb(),a.Rb(8,"button",5),a.wc(9,"Log In"),a.Qb(),a.Qb()),2&t&&(a.Bb(2),a.jc("formGroup",e.form))},directives:[s.o,s.j,s.f,l,s.m,s.i,s.e],styles:[""]}),t})();function u(t,e){1&t&&a.Nb(0,"app-sign-up")}function d(t,e){1&t&&a.Nb(0,"app-log-in")}let f=(()=>{class t{constructor(t){this.titleService=t,this.title="Login form",this.tab="sign-up",this.titleService.setTitle(this.title)}}return t.\u0275fac=function(e){return new(e||t)(a.Mb(i.d))},t.\u0275cmp=a.Gb({type:t,selectors:[["app-login-form"]],decls:11,vars:6,consts:[[1,"form"],[1,"tab-group"],[1,"tab"],[3,"click"],[1,"tab-content"],[4,"ngIf"]],template:function(t,e){1&t&&(a.Rb(0,"div",0),a.Rb(1,"ul",1),a.Rb(2,"li",2),a.Rb(3,"button",3),a.Zb("click",(function(){return e.tab="sign-up"})),a.wc(4,"Sign Up"),a.Qb(),a.Qb(),a.Rb(5,"li",2),a.Rb(6,"button",3),a.Zb("click",(function(){return e.tab="log-in"})),a.wc(7,"Log In"),a.Qb(),a.Qb(),a.Qb(),a.Rb(8,"div",4),a.uc(9,u,1,0,"app-sign-up",5),a.uc(10,d,1,0,"app-log-in",5),a.Qb(),a.Qb()),2&t&&(a.Bb(2),a.Eb("active","sign-up"===e.tab),a.Bb(3),a.Eb("active","log-in"===e.tab),a.Bb(4),a.jc("ngIf","sign-up"===e.tab),a.Bb(1),a.jc("ngIf","log-in"===e.tab))},directives:[n.l,b,p],styles:['app-login-form{display:block;background:#c1bdba;min-height:100vh;padding-top:60px}a{text-decoration:none;color:#1ab188;transition:.5s ease}a:hover{color:#179b77}.form{background:rgba(19,35,47,.9);padding:40px;max-width:600px;margin:40px auto;border-radius:4px;box-shadow:0 4px 10px 4px rgba(19,35,47,.3)}.tab-group{list-style:none;padding:0;margin:0 0 40px}.tab-group:after{content:"";display:table;clear:both}.tab-group li button{display:block;text-decoration:none;padding:15px;background:rgba(160,179,176,.25);color:#a0b3b0;font-size:20px;float:left;width:50%;text-align:center;cursor:pointer;transition:.5s ease;border:none}.tab-group li button:hover{background:#179b77;color:#fff}.tab-group .active button{background:#1ab188;color:#fff}.tab-content>*{display:block;opacity:0;animation:fadeIn .5s ease-in-out forwards}h1{text-align:center;color:#fff;font-weight:300;margin:0 0 40px}.top-row{display:grid;grid-template-columns:1fr 1fr;grid-gap:20px}.button{border:0;outline:none;border-radius:0;padding:15px 0;font-size:2rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;background:#1ab188;color:#fff;transition:all .5s ease;-webkit-appearance:none;cursor:pointer}.button:focus,.button:hover{background:#179b77}.button-block{display:block;width:100%}.forgot{margin-top:-20px;text-align:right}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}'],encapsulation:2,changeDetection:0}),t})();o.d(e,"LoginFormModule",(function(){return g}));let g=(()=>{class t{constructor(){console.log("5. LoginFormModule")}}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},providers:[],imports:[[n.c,r.b.forChild([{path:"",component:f},{path:"**",redirectTo:""}]),s.l]]}),t})()}}]);