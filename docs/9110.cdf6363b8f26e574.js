"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9110],{9110:(W,g,l)=>{l.r(g),l.d(g,{LoginPageModule:()=>K});var d=l(177),c=l(9417),i=l(4742),m=l(5559),o=l(4438),_=l(1626);let b=(()=>{var e;class a{constructor(t){this._httpClient=t}getLogin(){return this._httpClient.get("https://jsonplaceholder.typicode.com/users")}}return(e=a).\u0275fac=function(t){return new(t||e)(o.KVO(_.Qq))},e.\u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();var x=l(9565),u=l(5138),C=l(4576),f=l(9830),k=l(7673);let M=(()=>{var e;class a{constructor(){this.igrejas=["Igreja Batista","Igreja Universal","Igreja Cat\xf3lica","Igreja Evang\xe9lica","Igreja Adventista","Igreja Presbiteriana","Igreja Assembl\xe9ia de Deus","Igreja Metodista","Igreja Pentecostal","Igreja do Evangelho Quadrangular","Igreja da alian\xe7a de realengo","Igreja da alian\xe7a de manhumirim ","Igreja da alian\xe7a de queimados","Igreja da alian\xe7a de belo horizonte"]}buscarIgrejas(t){const n=this.igrejas.filter(s=>s.toLowerCase().includes(t.toLowerCase()));return(0,k.of)(n)}}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275prov=o.jDH({token:e,factory:e.\u0275fac,providedIn:"root"}),a})();function v(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Nome \xe9 obrigat\xf3rio"),o.k0s())}function P(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Nome deve ter pelo menos 3 caracteres"),o.k0s())}function j(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Sobrenome \xe9 obrigat\xf3rio"),o.k0s())}function O(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Sobrenome deve ter pelo menos 3 caracteres"),o.k0s())}function E(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Nome de usu\xe1rio \xe9 obrigat\xf3rio"),o.k0s())}function F(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Nickname deve ter pelo menos 3 caracteres"),o.k0s())}function w(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Senha \xe9 obrigat\xf3ria"),o.k0s())}function y(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Senha deve ter pelo menos 6 caracteres"),o.k0s())}function I(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"obrigatorio maiuscula, minuscula e numeros"),o.k0s())}function N(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"As senhas n\xe3o coincidem"),o.k0s())}function R(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"CPF \xe9 obrigat\xf3rio"),o.k0s())}function G(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"cpf deve ter 11 numeros"),o.k0s())}function T(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Telefone \xe9 obrigat\xf3rio"),o.k0s())}function L(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"celular invalido"),o.k0s())}function S(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Data de nascimento \xe9 obrigat\xf3ria"),o.k0s())}function $(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1," Sexo \xe9 obrigat\xf3rio "),o.k0s())}function z(e,a){1&e&&(o.j41(0,"ion-text",40),o.EFF(1,"Email inv\xe1lido"),o.k0s())}function D(e,a){if(1&e){const r=o.RV6();o.j41(0,"ion-item",43),o.bIt("click",function(){const n=o.eBV(r).$implicit,s=o.XpG(2);return o.Njj(s.selecionarIgreja(n))}),o.EFF(1),o.k0s()}if(2&e){const r=a.$implicit;o.R7$(),o.SpI(" ",r," ")}}function Y(e,a){if(1&e&&(o.j41(0,"ion-list",41),o.DNE(1,D,2,1,"ion-item",42),o.k0s()),2&e){const r=o.XpG();o.R7$(),o.Y8G("ngForOf",r.igrejasFiltradas)}}let h=(()=>{var e;class a{constructor(t,n,s){this._router=t,this._fb=n,this.buscaService=s,this.searchTerm="",this.igrejasFiltradas=[],this.cadastroChange=new o.bkB,this.form=(0,C.z)(this._fb),this.form.addControl("searchTerm",this._fb.control(""))}ngOnInit(){}enviar(){this.form.valid?(localStorage.setItem("formulario_completo",JSON.stringify(this.form.value)),console.log("Dados combinados salvos com sucesso:",this.form.value),this.form.reset(),this._router.navigate(["/inicio"]).then(()=>{window.location.reload()})):(console.log("Formul\xe1rio inv\xe1lido!"),this.form.markAllAsTouched())}back(){this.cadastro=!this.cadastro,this.cadastroChange.emit(this.cadastro)}buscarIgrejas(t){const n=t.target.value;n&&n.length>2?this.buscaService.buscarIgrejas(n).subscribe(s=>{this.igrejasFiltradas=s}):this.igrejasFiltradas=[]}selecionarIgreja(t){var n;null===(n=this.form.get("searchTerm"))||void 0===n||n.setValue(t),this.igrejasFiltradas=[]}}return(e=a).\u0275fac=function(t){return new(t||e)(o.rXU(m.Ix),o.rXU(c.ok),o.rXU(M))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-membro"]],inputs:{cadastro:"cadastro"},outputs:{cadastroChange:"cadastroChange"},standalone:!0,features:[o.Jv_([(0,f.Dw)()]),o.aNF],decls:88,vars:20,consts:[[1,"centralizar-avatar"],[1,"card"],[2,"border-bottom","1px solid black","margin","0 6px"],["color","letras",2,"padding","0"],["color","letras",2,"margin-left","3px"],[3,"ngSubmit","formGroup"],[1,"identar-lista"],[2,"display","flex","justify-content","space-between"],[1,"margin-input"],[1,"group"],["name","person-outline",1,"search-icon"],["type","text","placeholder","Nome","formControlName","name","name","name","id","name",1,"input",2,"color","black"],["style","margin-left: 15px; color: red;",4,"ngIf"],["type","text","placeholder","Sobrenome","formControlName","surName","name","surName","id","surName",1,"input",2,"color","black"],["style","margin-left: 15px;color: red",4,"ngIf"],[2,"margin-bottom","20px"],["name","person-circle-outline",1,"search-icon"],["type","text","placeholder","Crie um nome de usu\xe1rio","formControlName","nickName","name","nickName","id","nickName",1,"input",2,"color","black"],["name","lock-closed-outline",1,"search-icon"],["type","password","placeholder","Senha","formControlName","password","name","password","id","password",1,"input",2,"color","black"],["type","password","placeholder","confirmar senha","formControlName","confirmPassword","name","confirmPassword","id","confirmPassword",1,"input",2,"color","black"],["style","margin-left: 15px; color: red",4,"ngIf"],["name","id-card-outline",1,"search-icon"],["type","tel","placeholder","CPF","formControlName","cpf","name","cpf","id","cpf","mask","000.000.000.00",1,"input",2,"color","black"],["name","call-outline",1,"search-icon"],["type","text","placeholder","xx xxxxx xxxx","formControlName","phone","name","phone","id","phone","mask","00 00000 0000",1,"input",2,"color","black"],["name","calendar-outline",1,"search-icon"],["type","date","placeholder","Data de nascimento","formControlName","birthday","name","birthday","id","birthday",1,"input",2,"color","black"],["name","male-female-outline",1,"search-icon"],["label","Sexo","placeholder","","interface","popover","formControlName","sex","name","sex","id","sex",1,"input",2,"color","black","padding-right","10px"],["value","masculino"],["value","feminino"],["value","outro"],["name","mail-outline",1,"search-icon"],["type","email","placeholder","Email","formControlName","email","name","email","id","email",1,"input",2,"color","black"],["debounce","500","showClearButton","focus","placeholder","Digite o nome da sua igreja",1,"input","input-igreja",3,"ionInput","formControlName"],["name","home-outline",1,"search-icon",2,"bottom","17px"],["class","igrejas-lista",4,"ngIf"],["color","azul-claro","expand","block",2,"width","47%","padding","5px",3,"click"],["color","azul-claro","expand","block","type","submit",2,"width","47%","padding","5px"],[2,"margin-left","15px","color","red"],[1,"igrejas-lista"],["color","azul-claro",3,"click",4,"ngFor","ngForOf"],["color","azul-claro",3,"click"]],template:function(t,n){1&t&&(o.j41(0,"div",0)(1,"ion-card",1)(2,"ion-item",2)(3,"ion-title",3),o.EFF(4,"cadastro do responsavel"),o.k0s()(),o.j41(5,"ion-toolbar")(6,"ion-title",4),o.EFF(7,"cadastre-se"),o.k0s()(),o.j41(8,"form",5),o.bIt("ngSubmit",function(){return n.enviar()}),o.j41(9,"ion-list",6)(10,"section",7)(11,"div",8)(12,"div",9),o.nrm(13,"ion-icon",10)(14,"input",11),o.k0s(),o.DNE(15,v,2,0,"ion-text",12)(16,P,2,0,"ion-text",12),o.k0s(),o.j41(17,"div",8)(18,"div",9),o.nrm(19,"ion-icon",10)(20,"input",13),o.k0s(),o.DNE(21,j,2,0,"ion-text",14)(22,O,2,0,"ion-text",12),o.k0s()(),o.j41(23,"section")(24,"div",15)(25,"div",9),o.nrm(26,"ion-icon",16)(27,"input",17),o.k0s(),o.DNE(28,E,2,0,"ion-text",14)(29,F,2,0,"ion-text",12),o.k0s(),o.j41(30,"div",15)(31,"div",9),o.nrm(32,"ion-icon",18)(33,"input",19),o.k0s(),o.DNE(34,w,2,0,"ion-text",14)(35,y,2,0,"ion-text",14)(36,I,2,0,"ion-text",14),o.k0s(),o.j41(37,"div",15)(38,"div",9),o.nrm(39,"ion-icon",18)(40,"input",20),o.k0s(),o.DNE(41,N,2,0,"ion-text",21),o.k0s()(),o.j41(42,"section")(43,"div",7)(44,"div",8)(45,"div",9),o.nrm(46,"ion-icon",22)(47,"input",23),o.k0s(),o.DNE(48,R,2,0,"ion-text",12)(49,G,2,0,"ion-text",21),o.k0s(),o.j41(50,"div",8)(51,"div",9),o.nrm(52,"ion-icon",24)(53,"input",25),o.k0s(),o.DNE(54,T,2,0,"ion-text",14)(55,L,2,0,"ion-text",21),o.k0s()(),o.j41(56,"div",7)(57,"div",8)(58,"div",9),o.nrm(59,"ion-icon",26)(60,"input",27),o.k0s(),o.DNE(61,S,2,0,"ion-text",12),o.k0s(),o.j41(62,"div",8)(63,"div",9),o.nrm(64,"ion-icon",28),o.j41(65,"ion-select",29)(66,"ion-select-option",30),o.EFF(67,"Masculino"),o.k0s(),o.j41(68,"ion-select-option",31),o.EFF(69,"Feminino"),o.k0s(),o.j41(70,"ion-select-option",32),o.EFF(71,"N\xe3o informar"),o.k0s()()(),o.DNE(72,$,2,0,"ion-text",14),o.k0s()()(),o.j41(73,"section")(74,"div",15)(75,"div",9),o.nrm(76,"ion-icon",33)(77,"input",34),o.k0s(),o.DNE(78,z,2,0,"ion-text",14),o.k0s()(),o.j41(79,"ion-input",35),o.bIt("ionInput",function(p){return n.buscarIgrejas(p)}),o.nrm(80,"ion-icon",36),o.k0s(),o.DNE(81,Y,2,1,"ion-list",37),o.k0s(),o.nrm(82,"br"),o.j41(83,"div",7)(84,"ion-button",38),o.bIt("click",function(){return n.back()}),o.EFF(85,"VOLTAR"),o.k0s(),o.j41(86,"ion-button",39),o.EFF(87,"CONCLUIR"),o.k0s()()()()()),2&t&&(o.R7$(8),o.Y8G("formGroup",n.form),o.R7$(7),o.Y8G("ngIf",n.form.controls.name.hasError("required")&&n.form.controls.name.touched),o.R7$(),o.Y8G("ngIf",n.form.controls.name.hasError("minlength")&&n.form.controls.name.touched),o.R7$(5),o.Y8G("ngIf",n.form.controls.surName.hasError("required")&&n.form.controls.surName.touched),o.R7$(),o.Y8G("ngIf",n.form.controls.surName.hasError("minlength")&&n.form.controls.surName.touched),o.R7$(6),o.Y8G("ngIf",n.form.controls.nickName.hasError("required")&&n.form.controls.nickName.touched),o.R7$(),o.Y8G("ngIf",n.form.controls.nickName.hasError("minlength")&&n.form.controls.nickName.touched),o.R7$(5),o.Y8G("ngIf",n.form.controls.password.hasError("required")&&n.form.controls.password.touched),o.R7$(),o.Y8G("ngIf",n.form.controls.password.hasError("minlength")&&n.form.controls.password.touched),o.R7$(),o.Y8G("ngIf",n.form.controls.password.hasError("pattern")&&n.form.controls.password.touched),o.R7$(5),o.Y8G("ngIf",n.form.hasError("mismatch")&&n.form.controls.confirmPassword.touched),o.R7$(7),o.Y8G("ngIf",n.form.controls.cpf.hasError("required")&&n.form.controls.cpf.touched),o.R7$(),o.Y8G("ngIf",n.form.controls.cpf.hasError("minlength")&&n.form.controls.cpf.touched),o.R7$(5),o.Y8G("ngIf",n.form.controls.phone.hasError("required")&&n.form.controls.phone.touched),o.R7$(),o.Y8G("ngIf",n.form.controls.phone.hasError("minlength")&&n.form.controls.phone.touched),o.R7$(6),o.Y8G("ngIf",n.form.controls.birthday.hasError("required")&&n.form.controls.birthday.touched),o.R7$(11),o.Y8G("ngIf",n.form.controls.sex.hasError("required")&&n.form.controls.sex.touched),o.R7$(6),o.Y8G("ngIf",n.form.controls.email.hasError("email")||n.form.controls.email.touched&&n.form.controls.email.invalid),o.R7$(),o.Y8G("formControlName","searchTerm"),o.R7$(2),o.Y8G("ngIf",n.igrejasFiltradas.length>0))},dependencies:[d.MD,d.Sq,d.bT,c.YN,c.qT,c.me,c.BC,c.cb,i.bv,i.Jm,i.b_,i.iq,i.$w,i.uz,i.nf,i.Nm,i.Ip,i.IO,i.BC,i.ai,i.Je,i.Gw,c.X1,c.j4,c.JD,f.Zr],styles:['.centralizar-avatar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:17px}.card[_ngcontent-%COMP%]{width:600px;padding:20px}.identar-lista[_ngcontent-%COMP%]{margin-left:5px}.margin-input[_ngcontent-%COMP%]{width:47%;margin-bottom:20px}.group[_ngcontent-%COMP%]{display:flex;line-height:28px;align-items:center;position:relative;margin-bottom:5px}.input[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;width:100%;height:50px;padding-left:2.5rem;border:0;border-radius:10px;border:1px solid black;background-color:#fff;outline:none;color:#bdbecb;transition:all .25s cubic-bezier(.19,1,.22,1);cursor:text;z-index:0;font-size:larger}.input[_ngcontent-%COMP%]::placeholder{color:#64646a;font-size:larger}.input[_ngcontent-%COMP%]:active{transform:scale(.97)}.input-igreja[_ngcontent-%COMP%]{padding-left:2.5rem!important;color:#000}.search-icon[_ngcontent-%COMP%]{position:absolute;left:1rem;fill:#bdbecb;width:1.2rem;height:1.2rem;pointer-events:none;z-index:1;color:#000}.checkbox-wrapper-46[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{display:none;visibility:hidden}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]{margin:auto;-webkit-user-select:none;user-select:none;cursor:pointer}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;transform:translateZ(0);color:#000}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{position:relative;width:18px;height:18px;border-radius:3px;transform:scale(1);vertical-align:middle;border:1px solid #9098a9;transition:all .2s ease}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%]{position:absolute;top:3px;left:2px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:16px;transition:all .3s ease;transition-delay:.1s;transform:translateZ(0)}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before{content:"";width:100%;height:100%;background:#506eec;display:block;transform:scale(0);opacity:1;border-radius:50%}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{padding-left:8px}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:first-child{border-color:#506eec}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{background:#212121;border-color:#212121;animation:_ngcontent-%COMP%_wave-46 .4s ease}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%]{stroke-dashoffset:0}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before{transform:scale(3.5);opacity:0;transition:all .6s ease}.igrejas-lista[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto;margin-top:10px;padding-left:0;padding-right:0;border-radius:10px;box-shadow:0 4px 10px #0000001a;background-color:#fff}.igreja-item[_ngcontent-%COMP%]{font-size:16px;color:#333;padding-left:20px;padding-right:20px;height:50px;display:flex;align-items:center;border-bottom:1px solid #f0f0f0;cursor:pointer;transition:background-color .3s ease,transform .3s ease}.igreja-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0;transform:translate(5px)}.igreja-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:10px;color:#506ce4}@keyframes _ngcontent-%COMP%_wave-46{50%{transform:scale(.9)}}@media (height: 844px){.centralizar-avatar[_ngcontent-%COMP%]{margin-top:50px}}@media (min-width: 1280px){.card[_ngcontent-%COMP%]{width:500px;margin:0;padding:20px}}@media (max-width: 768px){.igrejas-lista[_ngcontent-%COMP%]{max-height:200px}.igreja-item[_ngcontent-%COMP%]{font-size:14px;padding-left:15px;padding-right:15px}}']}),a})();function X(e,a){if(1&e){const r=o.RV6();o.j41(0,"div",5)(1,"ion-segment",8)(2,"ion-segment-button",9),o.bIt("click",function(){o.eBV(r);const n=o.XpG();return o.Njj(n.toggleMarcado("entre"))}),o.j41(3,"ion-label",10),o.EFF(4,"Entre"),o.k0s()(),o.j41(5,"ion-segment-button",11),o.bIt("click",function(){o.eBV(r);const n=o.XpG();return o.Njj(n.toggleMarcado("cadastrar"))}),o.j41(6,"ion-label",10),o.EFF(7,"Cadastre-se!"),o.k0s()()()()}if(2&e){const r=o.XpG();o.R7$(2),o.AVh("segment-ativo",r.marcadoEntre),o.R7$(),o.Y8G("color",r.marcadoEntre?"branco":"azul-claro"),o.R7$(2),o.AVh("segment-ativo",r.marcadoCadastraSe),o.R7$(),o.Y8G("color",r.marcadoCadastraSe?"branco":"azul-claro")}}function B(e,a){1&e&&(o.j41(0,"ion-text",33),o.EFF(1,"Email incorreto"),o.k0s())}function V(e,a){1&e&&(o.j41(0,"ion-text",34),o.EFF(1,"Senha incorreto"),o.k0s())}function U(e,a){1&e&&(o.j41(0,"ion-text",35),o.EFF(1," Email ou senha est\xe3o incorretos. "),o.k0s())}function A(e,a){if(1&e){const r=o.RV6();o.j41(0,"div",5)(1,"ion-card",12)(2,"ion-item",13)(3,"ion-title",14),o.EFF(4,"Bem-vindos, "),o.j41(5,"strong"),o.EFF(6,"Alian\xe7ados!"),o.k0s()()(),o.j41(7,"ion-toolbar")(8,"ion-title",15),o.EFF(9,"Login"),o.k0s()(),o.j41(10,"form",16),o.bIt("ngSubmit",function(){o.eBV(r);const n=o.XpG();return o.Njj(n.logar())}),o.j41(11,"ion-list",17)(12,"div",18),o.nrm(13,"ion-icon",19),o.j41(14,"input",20),o.mxI("ngModelChange",function(n){o.eBV(r);const s=o.XpG();return o.DH7(s.email,n)||(s.email=n),o.Njj(n)}),o.k0s()(),o.DNE(15,B,2,0,"ion-text",21),o.nrm(16,"br"),o.j41(17,"div",18),o.nrm(18,"ion-icon",22),o.j41(19,"input",23),o.mxI("ngModelChange",function(n){o.eBV(r);const s=o.XpG();return o.DH7(s.senha,n)||(s.senha=n),o.Njj(n)}),o.k0s(),o.nrm(20,"ion-icon",24),o.k0s(),o.DNE(21,V,2,0,"ion-text",25),o.k0s(),o.DNE(22,U,2,0,"ion-text",26),o.nrm(23,"br"),o.j41(24,"div",27),o.nrm(25,"input",28),o.j41(26,"label",29)(27,"span"),o.qSk(),o.j41(28,"svg",30),o.nrm(29,"polyline",31),o.k0s()(),o.joV(),o.j41(30,"span"),o.EFF(31,"Lembrar senha"),o.k0s()()(),o.nrm(32,"br"),o.j41(33,"ion-button",32),o.EFF(34,"ACESSAR"),o.k0s()()()()}if(2&e){const r=o.XpG();o.R7$(10),o.Y8G("formGroup",r.form),o.R7$(4),o.R50("ngModel",r.email),o.R7$(),o.Y8G("ngIf",r.form.controls.userEmail.invalid&&r.form.controls.userEmail.touched),o.R7$(4),o.R50("ngModel",r.senha),o.R7$(2),o.Y8G("ngIf",r.form.controls.userName.invalid&&r.form.controls.userName.touched),o.R7$(),o.Y8G("ngIf",r.loginError)}}function J(e,a){if(1&e){const r=o.RV6();o.j41(0,"div",5)(1,"ion-card",36)(2,"ion-header",37)(3,"ion-title",38),o.EFF(4,"Qual a sua participa\xe7\xe3o na igreja?"),o.k0s()(),o.j41(5,"div")(6,"div",39)(7,"div",40)(8,"ion-button",41),o.bIt("click",function(){o.eBV(r);const n=o.XpG();return o.Njj(n.toggleMarcado("responsavel"))})("click",function(){o.eBV(r);const n=o.XpG();return o.Njj(n.responsavelCadastro("cadastroResponsavel"))}),o.j41(9,"div",42),o.EFF(10," Respons\xe1vel pela igreja "),o.k0s()(),o.j41(11,"ion-button",41),o.bIt("click",function(){o.eBV(r);const n=o.XpG();return o.Njj(n.toggleMarcado("membro"))})("click",function(){o.eBV(r);const n=o.XpG();return o.Njj(n.membroCadastro("cadastroMembro"))}),o.j41(12,"div",42),o.EFF(13," Membro da igreja "),o.k0s()()()()()()()}if(2&e){const r=o.XpG();o.R7$(8),o.Y8G("color",r.responsavel?"degraderblack":"branco"),o.R7$(3),o.Y8G("color",r.membro?"degraderblack":"branco")}}function q(e,a){if(1&e){const r=o.RV6();o.j41(0,"app-responsavel",43),o.bIt("cadastroChange",function(n){o.eBV(r);const s=o.XpG();return o.Njj(s.atualizarCadastroResponsavel(n))}),o.k0s()}if(2&e){const r=o.XpG();o.Y8G("cadastro",r.cadastroResponsavel)}}function Z(e,a){if(1&e){const r=o.RV6();o.j41(0,"app-membro",43),o.bIt("cadastroChange",function(n){o.eBV(r);const s=o.XpG();return o.Njj(s.atualizarCadastroMembro(n))}),o.k0s()}if(2&e){const r=o.XpG();o.Y8G("cadastro",r.cadastroMembro)}}const H=[{path:"",component:(()=>{var e;class a{constructor(t,n,s,p){this._loginService=t,this._router=n,this._fb=s,this._dadosDoLoginService=p,this.size=20,this.email="",this.senha="",this.loginError=!1,this.marcadoEntre=!0,this.marcadoCadastraSe=!1,this.responsavel=!1,this.membro=!1,this.cadastroResponsavel=!1,this.cadastroMembro=!1,this.form=this._fb.group({userName:["",[c.k0.required]],userEmail:["",[c.k0.required,c.k0.email]]})}ngOnInit(){this._dadosDoLoginService.limparUsuario()}logar(){this.form.markAllAsTouched(),this.form.invalid?console.log("Formul\xe1rio inv\xe1lido"):this._loginService.getLogin().subscribe({next:t=>{const n=t.find(s=>s.email===this.email&&s.username===this.senha);n?this.handleSuccessfulLogin(n):this.handleFailedLogin()},error:t=>{console.error("Error ao tentar logar:",t),this.showErrorMessage("Erro de conex\xe3o. Tenta novamente mais tarde.")}})}handleSuccessfulLogin(t){this.loginError=!1,this._dadosDoLoginService.setUsuario(t),this._router.navigate(["/inicio"])}handleFailedLogin(){this.loginError=!0,this.showErrorMessage("Email ou senha inv\xe1lidos.")}showErrorMessage(t){console.log(t)}toggleMarcado(t){"entre"===t?(this.marcadoEntre=!0,this.marcadoCadastraSe=!1,this.cadastroResponsavel=!1,this.cadastroMembro=!1):"cadastrar"===t&&(this.marcadoEntre=!1,this.marcadoCadastraSe=!0),"responsavel"===t?(this.responsavel=!0,this.membro=!1):"membro"===t&&(this.responsavel=!1,this.membro=!0)}responsavelCadastro(t){"cadastroResponsavel"===t&&(this.cadastroResponsavel=!0,this.marcadoCadastraSe=!1)}membroCadastro(t){"cadastroMembro"===t&&(this.cadastroMembro=!0,this.marcadoCadastraSe=!1)}atualizarCadastroResponsavel(t){this.cadastroResponsavel=t,this.marcadoCadastraSe=!0}atualizarCadastroMembro(t){this.cadastroMembro=t,this.marcadoCadastraSe=!0}}return(e=a).\u0275fac=function(t){return new(t||e)(o.rXU(b),o.rXU(m.Ix),o.rXU(c.ok),o.rXU(x.b))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-login"]],decls:11,vars:5,consts:[["color","cinza-claro"],[1,"degraderBlack"],[2,"width","100%","height","50px"],[1,"centralizar"],["class","centralizar-avatar",4,"ngIf"],[1,"centralizar-avatar"],[3,"cadastro"],["src","assets/img/logo-alian\xe7ados.png",1,"logo-alian\xe7ados"],["value","entre","color","azul-claro",1,"segment-custom"],["value","entre",3,"click"],[3,"color"],["value","cadastrar",3,"click"],[1,"card"],[2,"border-bottom","1px solid black","margin","0 6px"],["color","letras",2,"padding","0"],["color","letras",2,"margin-left","3px"],[3,"ngSubmit","formGroup"],[1,"identar-lista"],[1,"group"],["name","mail-outline",1,"search-icon"],["id","userEmail","type","email","placeholder","Email","formControlName","userEmail","name","searchbar",1,"input",2,"color","black",3,"ngModelChange","ngModel"],["style","margin-left: 15px; color: red; display: block;",4,"ngIf"],["name","lock-closed-outline",1,"search-icon"],["id","userName","type","password","placeholder","Senha","formControlName","userName","name","searchbar",1,"input",2,"color","black",3,"ngModelChange","ngModel"],["slot","end","name","eye-outline",1,"search-icon",2,"right","1rem","left","unset"],["style","margin-left: 15px;color: red",4,"ngIf"],["style","color: red; margin-left: 15px; display: block;",4,"ngIf"],[1,"checkbox-wrapper-46",2,"margin-left","22px"],["type","checkbox","id","cbx-46",1,"inp-cbx"],["for","cbx-46",1,"cbx"],["viewBox","0 0 12 10","height","10px","width","12px"],["points","1.5 6 4.5 9 10.5 1"],["color","azul-claro","expand","block","type","submit"],[2,"margin-left","15px","color","red","display","block"],[2,"margin-left","15px","color","red"],[2,"color","red","margin-left","15px","display","block"],[1,"card",2,"padding","0"],[1,"degraderBlack",2,"height","70px","padding","10px","display","flex","align-items","center"],[2,"color","white"],[2,"margin","30px"],[1,"cadastro-options"],[1,"no-shadow","cadastro-options_button",3,"click","color"],[2,"width","100%","text-align","start"],[3,"cadastroChange","cadastro"]],template:function(t,n){1&t&&(o.j41(0,"ion-content",0)(1,"ion-header",1),o.nrm(2,"ion-title",2),o.k0s(),o.j41(3,"div",3),o.DNE(4,X,8,6,"div",4)(5,A,35,6,"div",5)(6,J,14,2,"div",5)(7,q,1,1,"app-responsavel",6)(8,Z,1,1,"app-membro",6),o.j41(9,"div",5),o.nrm(10,"ion-img",7),o.k0s()()()),2&t&&(o.R7$(4),o.Y8G("ngIf",!n.cadastroResponsavel&&!n.cadastroMembro),o.R7$(),o.vxM(n.marcadoEntre?5:-1),o.R7$(),o.vxM(n.marcadoCadastraSe?6:-1),o.R7$(),o.vxM(n.cadastroResponsavel?7:-1),o.R7$(),o.vxM(n.cadastroMembro?8:-1))},dependencies:[d.bT,c.qT,c.me,c.BC,c.cb,i.Jm,i.b_,i.W9,i.eU,i.iq,i.KW,i.uz,i.he,i.nf,i.Gp,i.eP,i.IO,i.BC,i.ai,i.Je,c.j4,c.JD,u.ResponsavelComponent,h],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--padding-top: 0;overflow:auto;display:flex;flex-direction:column}.centralizar[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-direction:column;width:100%;padding-top:70px}.centralizar-avatar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:17px;padding:0 15px}.centralizar-avatar[_ngcontent-%COMP%]   .no-shadow[_ngcontent-%COMP%]{box-shadow:none!important;--box-shadow: none !important;margin:0;text-transform:unset}.segment-custom[_ngcontent-%COMP%]{background-color:#e5e5e5;border-radius:15px;display:flex;justify-content:center;padding:5px;gap:10px}.segment-custom[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{box-shadow:none!important;--box-shadow: none !important;border-radius:6px;margin:0;text-transform:unset;background-color:#fff;border:1px solid black;color:#000;width:150px;height:40px;display:flex;justify-content:center;align-items:center}.segment-custom[_ngcontent-%COMP%]   ion-segment-button.segment-ativo[_ngcontent-%COMP%]{background:linear-gradient(90deg,#000 30%,#383838)!important;color:#fff!important}.avatar-grande[_ngcontent-%COMP%]{width:150px;height:150px;margin-bottom:15px}.card[_ngcontent-%COMP%]{width:100%;max-width:600px;padding:20px;margin:0 auto}.logo-alian\\e7 ados[_ngcontent-%COMP%]{width:180px;height:80px}.identar-lista[_ngcontent-%COMP%]{margin-left:5px}.degraderBlack[_ngcontent-%COMP%]{background-color:#000!important;background:linear-gradient(90deg,#000 30%,#383838)!important}.group[_ngcontent-%COMP%]{display:flex;line-height:28px;align-items:center;position:relative;margin-bottom:10px}.input[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;width:100%;height:50px;padding-left:2.5rem;border:0;border-radius:10px;border:1px solid black;background-color:#fff;outline:none;color:#bdbecb;transition:all .25s cubic-bezier(.19,1,.22,1);cursor:text;z-index:0}.input[_ngcontent-%COMP%]::placeholder{color:#000}.input[_ngcontent-%COMP%]:active{transform:scale(.97)}.search-icon[_ngcontent-%COMP%]{position:absolute;left:1rem;fill:#bdbecb;width:1.2rem;height:1.2rem;pointer-events:none;z-index:1;color:#000}.checkbox-wrapper-46[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{display:none;visibility:hidden}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]{margin:auto;-webkit-user-select:none;user-select:none;cursor:pointer}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;transform:translateZ(0);color:#000}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{position:relative;width:18px;height:18px;border-radius:3px;transform:scale(1);vertical-align:middle;border:1px solid #9098a9;transition:all .2s ease}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%]{position:absolute;top:3px;left:2px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:16px;transition:all .3s ease;transition-delay:.1s;transform:translateZ(0)}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before{content:"";width:100%;height:100%;background:#506eec;display:block;transform:scale(0);opacity:1;border-radius:50%}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{padding-left:8px}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:first-child{border-color:#506eec}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{background:#212121;border-color:#212121;animation:_ngcontent-%COMP%_wave-46 .4s ease}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%]{stroke-dashoffset:0}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before{transform:scale(3.5);opacity:0;transition:all .6s ease}.cadastro-options[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px;display:flex;flex-direction:column;width:100%;gap:20px}.cadastro-options_button[_ngcontent-%COMP%]{border:solid 1px black!important;border-radius:6px}@keyframes _ngcontent-%COMP%_wave-46{50%{transform:scale(.9)}}@media (min-width: 1280px){.card[_ngcontent-%COMP%]{width:500px;padding:20px}}']}),a})()}];let Q=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[m.iI.forChild(H),m.iI]}),a})(),K=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[d.MD,c.YN,i.bv,Q,c.X1,u.ResponsavelComponent,h]}),a})()}}]);