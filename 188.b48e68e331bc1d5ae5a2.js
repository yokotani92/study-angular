(self.webpackChunkstudy_angular=self.webpackChunkstudy_angular||[]).push([[188],{8188:(r,e,a)=>{"use strict";a.r(e),a.d(e,{FormModule:()=>b});var l=a(1116),t=a(2937),n=a(1041),s=a(4369),o=a(2797),i=a(3070),u=a(7307),d=a(9550),m=a(2751),p=a(1690);const Z=r=>{const e=r.get("password"),a=r.get("verifyPassword");return e&&a&&e.value!==a.value?{notMatchPassword:!0}:null};class c{isErrorState(r,e){var a,l,t;return!0===(e&&e.submitted)&&null!==r&&(null!==r.errors||null!==(t=null===(l=null===(a=null==e?void 0:e.form)||void 0===a?void 0:a.errors)||void 0===l?void 0:l.notMatchPassword)&&void 0!==t&&t)}}var f=a(5366),g=a(5965);function w(r,e){1&r&&(f.TgZ(0,"div"),f._uU(1," \u30e6\u30fc\u30b6\u30fc\u540d\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059 "),f.qZA())}function v(r,e){1&r&&(f.TgZ(0,"div"),f._uU(1," 6\u6587\u5b57\u4ee5\u4e0a\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044 "),f.qZA())}function h(r,e){1&r&&(f.TgZ(0,"div"),f._uU(1," 12\u6587\u5b57\u4ee5\u5185\u3067\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044 "),f.qZA())}function q(r,e){if(1&r&&(f.TgZ(0,"mat-error"),f.YNc(1,w,2,0,"div",5),f.YNc(2,v,2,0,"div",5),f.YNc(3,h,2,0,"div",5),f.qZA()),2&r){const r=f.oxw();f.xp6(1),f.Q6J("ngIf",null==r.name||null==r.name.errors?null:r.name.errors.required),f.xp6(1),f.Q6J("ngIf",null==r.name||null==r.name.errors?null:r.name.errors.minlength),f.xp6(1),f.Q6J("ngIf",null==r.name||null==r.name.errors?null:r.name.errors.maxLength)}}function x(r,e){1&r&&(f.TgZ(0,"div"),f._uU(1," \u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059 "),f.qZA())}function A(r,e){if(1&r&&(f.TgZ(0,"mat-error"),f.YNc(1,x,2,0,"div",5),f.qZA()),2&r){const r=f.oxw();f.xp6(1),f.Q6J("ngIf",null==r.password||null==r.password.errors?null:r.password.errors.required)}}function T(r,e){1&r&&(f.TgZ(0,"div"),f._uU(1," \u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9\u306f\u5fc5\u9808\u9805\u76ee\u3067\u3059 "),f.qZA())}function y(r,e){1&r&&(f.TgZ(0,"div"),f._uU(1," \u30d1\u30b9\u30ef\u30fc\u30c9\u304c\u4e00\u81f4\u3057\u307e\u305b\u3093 "),f.qZA())}function _(r,e){if(1&r&&(f.TgZ(0,"mat-error"),f.YNc(1,T,2,0,"div",5),f.YNc(2,y,2,0,"div",5),f.qZA()),2&r){const r=f.oxw();f.xp6(1),f.Q6J("ngIf",null==r.verifyPassword||null==r.verifyPassword.errors?null:r.verifyPassword.errors.required),f.xp6(1),f.Q6J("ngIf",!(null!=r.verifyPassword&&null!=r.verifyPassword.errors&&r.verifyPassword.errors.required)&&(null==r.sampleForm.errors?null:r.sampleForm.errors.notMatchPassword))}}const U=[{path:"",component:(()=>{class r{constructor(){this.submittedData="",this.isSubmitted=!1,this.verifyPasswordFormMatcher=new c,this.nameControl=new n.NI("",{validators:[n.kI.required,n.kI.minLength(6),n.kI.maxLength(12)],updateOn:"blur"}),this.passwordControl=new n.NI("",{validators:[n.kI.required],updateOn:"submit"}),this.verifyPasswordControl=new n.NI("",{validators:[n.kI.required],updateOn:"submit"}),this.sampleForm=new n.cw({name:this.nameControl,password:this.passwordControl,verifyPassword:this.verifyPasswordControl},{validators:Z,updateOn:"submit"})}onSubmit(){this.isSubmitted=!0,this.sampleForm.invalid||(this.submittedData=JSON.stringify(this.sampleForm.value))}get name(){return this.sampleForm.get("name")}get password(){return this.sampleForm.get("password")}get verifyPassword(){return this.sampleForm.get("verifyPassword")}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275cmp=f.Xpm({type:r,selectors:[["app-form"]],decls:82,vars:25,consts:[["fxLayout","column","fxLayoutGap","16px","fxLayoutAlign","center","fxFlex","80%","fxFlex.lt-sm","100%",1,"container"],[3,"formGroup","ngSubmit"],["fxLayout","row wrap","fxLayoutGap","8px"],["appearance","fill","fxFlex","calc(20% - 8px)","fxFlex.lt-md","calc(50% - 8px)","fxFlex.lt-sm","100%"],["matInput","","placeholder","\u30e6\u30fc\u30b6\u30fc\u540d","id","name","name","name","formControlName","name","required","",3,"minlength","maxLength"],[4,"ngIf"],["type","password","matInput","","placeholder","\u30d1\u30b9\u30ef\u30fc\u30c9","id","password","name","password","formControlName","password","required",""],["type","password","matInput","","placeholder","\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9","id","verifyPassword","name","verifyPassword","formControlName","verifyPassword","required","",3,"errorStateMatcher"],["align","end"],["mat-stroked-button","","type","submit","color","primary"],["aria-hidden","false","aria-label","info icon"]],template:function(r,e){1&r&&(f.TgZ(0,"div",0),f.TgZ(1,"div"),f.TgZ(2,"form",1),f.NdJ("ngSubmit",function(){return e.onSubmit()}),f.TgZ(3,"mat-card"),f.TgZ(4,"mat-card-title"),f._uU(5,"\u30d5\u30a9\u30fc\u30e0"),f.qZA(),f.TgZ(6,"mat-card-subtitle"),f._uU(7," \u30d0\u30ea\u30c7\u30fc\u30b7\u30e7\u30f3\u306e\u5236\u5fa1\u3092\u52a0\u3048\u305f\u30d5\u30a9\u30fc\u30e0\u306e\u30b5\u30f3\u30d7\u30eb "),f.qZA(),f.TgZ(8,"mat-card-content"),f.TgZ(9,"ul"),f.TgZ(10,"li"),f._uU(11,"\u30e6\u30fc\u30b6\u30fc\u540d\u306f6\u6587\u5b57\u4ee5\u4e0a12\u6587\u5b57\u4ee5\u5185"),f.qZA(),f.TgZ(12,"li"),f._uU(13,"\u30e6\u30fc\u30b6\u30fc\u540d\u306fblur\u3067formControl\u306b\u5024\u304c\u30bb\u30c3\u30c8\u3055\u308c\u308b"),f.qZA(),f.TgZ(14,"li"),f._uU(15,"\u30d1\u30b9\u30ef\u30fc\u30c9\u306fsubmit\u3067formControl\u306b\u5024\u304c\u30bb\u30c3\u30c8\u3055\u308c\u308b"),f.qZA(),f.qZA(),f.TgZ(16,"div",2),f.TgZ(17,"mat-form-field",3),f.TgZ(18,"mat-label"),f._uU(19,"\u30e6\u30fc\u30b6\u30fc\u540d"),f.qZA(),f._UZ(20,"input",4),f.YNc(21,q,4,3,"mat-error",5),f.qZA(),f.TgZ(22,"mat-form-field",3),f.TgZ(23,"mat-label"),f._uU(24,"\u30d1\u30b9\u30ef\u30fc\u30c9"),f.qZA(),f._UZ(25,"input",6),f.YNc(26,A,2,1,"mat-error",5),f.qZA(),f.TgZ(27,"mat-form-field",3),f.TgZ(28,"mat-label"),f._uU(29,"\u78ba\u8a8d\u7528\u30d1\u30b9\u30ef\u30fc\u30c9"),f.qZA(),f._UZ(30,"input",7),f.YNc(31,_,3,2,"mat-error",5),f.qZA(),f.qZA(),f.qZA(),f.TgZ(32,"mat-card-actions",8),f.TgZ(33,"button",9),f.TgZ(34,"mat-icon",10),f._uU(35,"send"),f.qZA(),f._uU(36," \u9001\u4fe1 "),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(37,"mat-card"),f.TgZ(38,"mat-card-title"),f._uU(39,"\u30d5\u30a9\u30fc\u30e0\u306e\u5024\u3068\u30d1\u30e9\u30e1\u30fc\u30bf"),f.qZA(),f.TgZ(40,"mat-card-content"),f.TgZ(41,"ul"),f.TgZ(42,"li"),f._uU(43),f.qZA(),f.TgZ(44,"li"),f._uU(45),f.qZA(),f.TgZ(46,"li"),f._uU(47),f.qZA(),f.TgZ(48,"li"),f._uU(49),f.qZA(),f.TgZ(50,"li"),f._uU(51),f.qZA(),f.TgZ(52,"li"),f._uU(53),f.qZA(),f.TgZ(54,"li"),f._uU(55),f.qZA(),f.TgZ(56,"li"),f._uU(57),f.qZA(),f.TgZ(58,"li"),f._uU(59),f.qZA(),f.TgZ(60,"li"),f._uU(61),f.qZA(),f.TgZ(62,"li"),f._uU(63),f.qZA(),f.TgZ(64,"li"),f._uU(65),f.qZA(),f.TgZ(66,"li"),f._uU(67),f.qZA(),f.TgZ(68,"li"),f._uU(69),f.qZA(),f.TgZ(70,"li"),f._uU(71),f.qZA(),f.TgZ(72,"li"),f._uU(73),f.qZA(),f.TgZ(74,"li"),f._uU(75),f.qZA(),f.qZA(),f.qZA(),f.qZA(),f.TgZ(76,"mat-card"),f.TgZ(77,"mat-card-title"),f._uU(78,"\u9001\u4fe1\u3055\u308c\u305f\u5024"),f.qZA(),f.TgZ(79,"mat-card-content"),f.TgZ(80,"code"),f._uU(81),f.qZA(),f.qZA(),f.qZA(),f.qZA()),2&r&&(f.xp6(2),f.Q6J("formGroup",e.sampleForm),f.xp6(18),f.Q6J("minlength",6)("maxLength",12),f.xp6(1),f.Q6J("ngIf",e.sampleForm.touched||e.sampleForm.dirty||e.isSubmitted),f.xp6(5),f.Q6J("ngIf",e.isSubmitted),f.xp6(4),f.Q6J("errorStateMatcher",e.verifyPasswordFormMatcher),f.xp6(1),f.Q6J("ngIf",e.isSubmitted),f.xp6(12),f.hij('name value: "',null==e.name?null:e.name.value,'"'),f.xp6(2),f.hij('password value: "',null==e.password?null:e.password.value,'"'),f.xp6(2),f.hij('verifyPassword value: "',null==e.verifyPassword?null:e.verifyPassword.value,'"'),f.xp6(2),f.hij("name valid: ",null==e.name?null:e.name.valid,""),f.xp6(2),f.hij("password valid: ",null==e.password?null:e.password.valid,""),f.xp6(2),f.hij("verifyPassword valid: ",null==e.verifyPassword?null:e.verifyPassword.valid,""),f.xp6(2),f.hij("name touched: ",null==e.name?null:e.name.touched,""),f.xp6(2),f.hij("password touched: ",null==e.password?null:e.password.touched,""),f.xp6(2),f.hij("verifyPassword touched: ",null==e.verifyPassword?null:e.verifyPassword.touched,""),f.xp6(2),f.hij("name dirty: ",null==e.name?null:e.name.dirty,""),f.xp6(2),f.hij("password dirty: ",null==e.password?null:e.password.dirty,""),f.xp6(2),f.hij("verifyPassword dirty: ",null==e.verifyPassword?null:e.verifyPassword.dirty,""),f.xp6(2),f.hij("name length > 6: ",null===(null==e.name||null==e.name.errors?null:e.name.errors.minlength),""),f.xp6(2),f.hij("name length < 12: ",null===(null==e.name||null==e.name.errors?null:e.name.errors.maxlength),""),f.xp6(2),f.hij("form password match: ",!(null!=e.sampleForm.errors&&e.sampleForm.errors.notMatchPassword),""),f.xp6(2),f.hij("form isSubmitted: ",e.isSubmitted,""),f.xp6(2),f.hij("form status: ",null==e.sampleForm?null:e.sampleForm.status,""),f.xp6(6),f.Oqu(e.submittedData))},directives:[g.xw,g.SQ,g.Wh,g.yH,n._Y,n.JL,n.sg,o.a8,o.n5,o.$j,o.dn,i.KE,i.hX,d.Nt,n.Fj,n.JJ,n.u,n.Q7,n.wO,l.O5,o.hq,s.lW,u.Hw,i.TO],styles:["[_nghost-%COMP%]{justify-content:center;margin:16px}"]}),r})()}];let P=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=f.oAB({type:r}),r.\u0275inj=f.cJS({imports:[[p.Bz.forChild(U)],p.Bz]}),r})(),b=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=f.oAB({type:r}),r.\u0275inj=f.cJS({imports:[[l.ez,P,t.o9,n.UX,n.u5,o.QW,s.ot,u.Ps,d.c,i.lN,m.v]]}),r})()}}]);