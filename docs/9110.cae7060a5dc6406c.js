"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9110],{9110:(ee,p,l)=>{l.r(p),l.d(p,{LoginPageModule:()=>W});var m=l(177),c=l(9417),a=l(4742),d=l(5559),e=l(4438),_=l(1626);let b=(()=>{var t;class i{constructor(n){this._httpClient=n}getLogin(){return this._httpClient.get("https://jsonplaceholder.typicode.com/users")}}return(t=i).\u0275fac=function(n){return new(n||t)(e.KVO(_.Qq))},t.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),i})();var x=l(9565),u=l(5138),C=l(4576),h=l(9830),k=l(7673);let v=(()=>{var t;class i{constructor(){this.igrejas=["Igreja Batista","Igreja Universal","Igreja Cat\xf3lica","Igreja Evang\xe9lica","Igreja Adventista","Igreja Presbiteriana","Igreja Assembl\xe9ia de Deus","Igreja Metodista","Igreja Pentecostal","Igreja do Evangelho Quadrangular","Igreja da alian\xe7a de realengo","Igreja da alian\xe7a de manhumirim ","Igreja da alian\xe7a de queimados","Igreja da alian\xe7a de belo horizonte"]}buscarIgrejas(n){const o=this.igrejas.filter(s=>s.toLowerCase().includes(n.toLowerCase()));return(0,k.of)(o)}}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275prov=e.jDH({token:t,factory:t.\u0275fac,providedIn:"root"}),i})();function M(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Nome \xe9 obrigat\xf3rio"),e.k0s())}function P(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Nome deve ter pelo menos 3 caracteres"),e.k0s())}function j(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Sobrenome \xe9 obrigat\xf3rio"),e.k0s())}function O(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Sobrenome deve ter pelo menos 3 caracteres"),e.k0s())}function E(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Nome de usu\xe1rio \xe9 obrigat\xf3rio"),e.k0s())}function F(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Nickname deve ter pelo menos 3 caracteres"),e.k0s())}function w(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Senha \xe9 obrigat\xf3ria"),e.k0s())}function y(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Senha deve ter pelo menos 6 caracteres"),e.k0s())}function I(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"obrigatorio maiuscula, minuscula e numeros"),e.k0s())}function R(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Confirmar senha \xe9 obrigat\xf3ria"),e.k0s())}function N(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"As senhas n\xe3o coincidem"),e.k0s())}function G(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"CPF \xe9 obrigat\xf3rio"),e.k0s())}function T(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"cpf deve ter 11 numeros"),e.k0s())}function L(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Telefone \xe9 obrigat\xf3rio"),e.k0s())}function S(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"celular invalido"),e.k0s())}function $(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Data de nascimento \xe9 obrigat\xf3ria"),e.k0s())}function Y(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1," Sexo \xe9 obrigat\xf3rio "),e.k0s())}function z(t,i){1&t&&(e.j41(0,"ion-text",39),e.EFF(1,"Email inv\xe1lido"),e.k0s())}function D(t,i){if(1&t){const r=e.RV6();e.j41(0,"ion-item",42),e.bIt("click",function(){const o=e.eBV(r).$implicit,s=e.XpG(2);return e.Njj(s.selecionarIgreja(o))}),e.EFF(1),e.k0s()}if(2&t){const r=i.$implicit;e.R7$(),e.SpI(" ",r," ")}}function B(t,i){if(1&t&&(e.j41(0,"ion-list",40),e.DNE(1,D,2,1,"ion-item",41),e.k0s()),2&t){const r=e.XpG();e.R7$(),e.Y8G("ngForOf",r.igrejasFiltradas)}}let f=(()=>{var t;class i{constructor(n,o,s){this._router=n,this._fb=o,this.buscaService=s,this.searchTerm="",this.igrejasFiltradas=[],this.toggleOfEye=!0,this.showDatePicker=!1,this.cadastroChange=new e.bkB,this.form=(0,C.z)(this._fb),this.form.addControl("searchTerm",this._fb.control(""))}ngOnInit(){}enviar(){this.form.valid?(localStorage.setItem("formulario_completo",JSON.stringify(this.form.value)),this.form.reset(),this._router.navigate(["/inicio"])):this.form.markAllAsTouched()}back(){this.cadastro=!this.cadastro,this.cadastroChange.emit(this.cadastro)}buscarIgrejas(n){const o=n.target.value;o&&o.length>2?this.buscaService.buscarIgrejas(o).subscribe(s=>{this.igrejasFiltradas=s}):this.igrejasFiltradas=[]}selecionarIgreja(n){var o;null===(o=this.form.get("searchTerm"))||void 0===o||o.setValue(n),this.igrejasFiltradas=[]}toggleEye(){this.toggleOfEye=!this.toggleOfEye}}return(t=i).\u0275fac=function(n){return new(n||t)(e.rXU(d.Ix),e.rXU(c.ok),e.rXU(v))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-membro"]],inputs:{cadastro:"cadastro"},outputs:{cadastroChange:"cadastroChange"},standalone:!0,features:[e.Jv_([(0,h.Dw)()]),e.aNF],decls:91,vars:25,consts:[[1,"centralizar-avatar"],[1,"card"],[2,"border-bottom","1px solid black","margin","0 6px"],["color","letras",2,"padding","0"],["color","letras",2,"margin-left","3px"],[3,"ngSubmit","formGroup"],[1,"identar-lista"],[2,"display","flex","justify-content","space-between"],[1,"margin-input"],[1,"group"],["src","assets/img/nome_e_sobrenome_usuario.svg","height","25px","width","100px",1,"search-icon"],["type","text","placeholder","Nome","formControlName","name","name","name","id","name",1,"input",2,"color","black"],["class","error",4,"ngIf"],["type","text","placeholder","Sobrenome","formControlName","surName","name","surName","id","surName",1,"input",2,"color","black"],[2,"margin-bottom","20px"],["type","text","placeholder","Crie um nome de usu\xe1rio","formControlName","nickName","name","nickName","id","nickName",1,"input",2,"color","black"],["src","assets/img/lock.svg","height","25px","width","100px",1,"search-icon"],["placeholder","Senha","formControlName","password","name","password","id","password",1,"input",2,"color","black",3,"type"],["height","25px","width","100px",1,"search-icon",2,"right","1rem","left","unset","fill","black","top","1rem",3,"click","src"],["placeholder","Confirmar senha","formControlName","confirmPassword","name","confirmPassword","id","confirmPassword",1,"input",2,"color","black",3,"type"],["src","assets/img/cpf.svg","height","25px","width","100px",1,"search-icon",2,"width","1.3rem","height","1.3rem"],["type","tel","placeholder","Cpf","formControlName","cpf","name","cpf","id","cpf","mask","000.000.000.00",1,"input",2,"color","black"],["src","assets/img/telefone.svg","height","25px","width","100px",1,"search-icon",2,"top","1rem"],["type","text","placeholder","Telefone","formControlName","phone","name","phone","id","phone","mask","00 00000 0000",1,"input",2,"color","black"],["src","assets/img/calendario.svg","height","25px","width","100px",1,"search-icon"],["placeholder","Data de nascimento","formControlName","birthday","name","birthday","id","birthday",1,"input",2,"color","black",3,"focus","blur","type"],["src","assets/img/sexo.svg","height","25px","width","100px",1,"search-icon",2,"top","1rem"],["label","Sexo","interface","popover","formControlName","sex","name","sex","id","sex",1,"input",2,"color","black","padding-right","10px"],["value","masculino"],["value","feminino"],["value","outro"],["src","assets/img/email.svg","height","25px","width","100px",1,"search-icon"],["type","email","placeholder","Email","formControlName","email","name","email","id","email",1,"input",2,"color","black"],[2,"position","relative"],["src","assets/img/igreja.svg","height","25px","width","100px",1,"search-icon",2,"bottom","18px","width","1.3rem","height","1.3rem","top","unset"],["id","igrejas","debounce","500","showClearButton","focus","placeholder","Digite o nome da sua igreja",1,"input","input-igreja",3,"ionInput","formControlName"],["class","igrejas-lista",4,"ngIf"],["color","azul-claro","expand","block",2,"width","47%","padding","5px",3,"click"],["color","azul-claro","expand","block","type","submit",2,"width","47%","padding","5px"],[1,"error"],[1,"igrejas-lista"],["color","azul-claro",3,"click",4,"ngFor","ngForOf"],["color","azul-claro",3,"click"]],template:function(n,o){1&n&&(e.j41(0,"div",0)(1,"ion-card",1)(2,"ion-item",2)(3,"ion-title",3),e.EFF(4,"cadastro do responsavel"),e.k0s()(),e.j41(5,"ion-toolbar")(6,"ion-title",4),e.EFF(7,"cadastre-se"),e.k0s()(),e.j41(8,"form",5),e.bIt("ngSubmit",function(){return o.enviar()}),e.j41(9,"ion-list",6)(10,"section",7)(11,"div",8)(12,"div",9),e.nrm(13,"img",10)(14,"input",11),e.k0s(),e.DNE(15,M,2,0,"ion-text",12)(16,P,2,0,"ion-text",12),e.k0s(),e.j41(17,"div",8)(18,"div",9),e.nrm(19,"img",10)(20,"input",13),e.k0s(),e.DNE(21,j,2,0,"ion-text",12)(22,O,2,0,"ion-text",12),e.k0s()(),e.j41(23,"section")(24,"div",14)(25,"div",9),e.nrm(26,"img",10)(27,"input",15),e.k0s(),e.DNE(28,E,2,0,"ion-text",12)(29,F,2,0,"ion-text",12),e.k0s(),e.j41(30,"div",14)(31,"div",9),e.nrm(32,"img",16)(33,"input",17),e.j41(34,"img",18),e.bIt("click",function(){return o.toggleEye()}),e.k0s()(),e.DNE(35,w,2,0,"ion-text",12)(36,y,2,0,"ion-text",12)(37,I,2,0,"ion-text",12),e.k0s(),e.j41(38,"div",14)(39,"div",9),e.nrm(40,"img",16)(41,"input",19),e.k0s(),e.DNE(42,R,2,0,"ion-text",12)(43,N,2,0,"ion-text",12),e.k0s()(),e.j41(44,"section")(45,"div",7)(46,"div",8)(47,"div",9),e.nrm(48,"img",20)(49,"input",21),e.k0s(),e.DNE(50,G,2,0,"ion-text",12)(51,T,2,0,"ion-text",12),e.k0s(),e.j41(52,"div",8)(53,"div",9),e.nrm(54,"img",22)(55,"input",23),e.k0s(),e.DNE(56,L,2,0,"ion-text",12)(57,S,2,0,"ion-text",12),e.k0s()(),e.j41(58,"div",7)(59,"div",8)(60,"div",9),e.nrm(61,"img",24),e.j41(62,"input",25),e.bIt("focus",function(){return o.showDatePicker=!0})("blur",function(){return o.showDatePicker=!!o.form.controls.birthday.value}),e.k0s()(),e.DNE(63,$,2,0,"ion-text",12),e.k0s(),e.j41(64,"div",8)(65,"div",9),e.nrm(66,"img",26),e.j41(67,"ion-select",27)(68,"ion-select-option",28),e.EFF(69,"Masculino"),e.k0s(),e.j41(70,"ion-select-option",29),e.EFF(71,"Feminino"),e.k0s(),e.j41(72,"ion-select-option",30),e.EFF(73,"N\xe3o informar"),e.k0s()()(),e.DNE(74,Y,2,0,"ion-text",12),e.k0s()()(),e.j41(75,"section")(76,"div",14)(77,"div",9),e.nrm(78,"img",31)(79,"input",32),e.k0s(),e.DNE(80,z,2,0,"ion-text",12),e.k0s()(),e.j41(81,"section",33),e.nrm(82,"img",34),e.j41(83,"ion-input",35),e.bIt("ionInput",function(g){return o.buscarIgrejas(g)}),e.k0s()(),e.DNE(84,B,2,1,"ion-list",36),e.k0s(),e.nrm(85,"br"),e.j41(86,"div",7)(87,"ion-button",37),e.bIt("click",function(){return o.back()}),e.EFF(88,"VOLTAR"),e.k0s(),e.j41(89,"ion-button",38),e.EFF(90,"CONCLUIR"),e.k0s()()()()()),2&n&&(e.R7$(8),e.Y8G("formGroup",o.form),e.R7$(7),e.Y8G("ngIf",o.form.controls.name.hasError("required")&&o.form.controls.name.touched),e.R7$(),e.Y8G("ngIf",o.form.controls.name.hasError("minlength")&&o.form.controls.name.touched),e.R7$(5),e.Y8G("ngIf",o.form.controls.surName.hasError("required")&&o.form.controls.surName.touched),e.R7$(),e.Y8G("ngIf",o.form.controls.surName.hasError("minlength")&&o.form.controls.surName.touched),e.R7$(6),e.Y8G("ngIf",o.form.controls.nickName.hasError("required")&&o.form.controls.nickName.touched),e.R7$(),e.Y8G("ngIf",o.form.controls.nickName.hasError("minlength")&&o.form.controls.nickName.touched),e.R7$(4),e.Y8G("type",o.toggleOfEye?"password":"text"),e.R7$(),e.Y8G("src",o.toggleOfEye?"assets/img/ver_senha.svg":"assets/img/nao_ver_senha.svg",e.B4B),e.R7$(),e.Y8G("ngIf",o.form.controls.password.hasError("required")&&o.form.controls.password.touched),e.R7$(),e.Y8G("ngIf",o.form.controls.password.hasError("minlength")&&o.form.controls.password.touched),e.R7$(),e.Y8G("ngIf",o.form.controls.password.hasError("pattern")&&o.form.controls.password.touched),e.R7$(4),e.Y8G("type",o.toggleOfEye?"password":"text"),e.R7$(),e.Y8G("ngIf",o.form.controls.confirmPassword.hasError("required")&&o.form.controls.confirmPassword.touched),e.R7$(),e.Y8G("ngIf",o.form.hasError("mismatch")&&o.form.controls.confirmPassword.touched),e.R7$(7),e.Y8G("ngIf",o.form.controls.cpf.hasError("required")&&o.form.controls.cpf.touched),e.R7$(),e.Y8G("ngIf",o.form.controls.cpf.hasError("minlength")&&o.form.controls.cpf.touched),e.R7$(5),e.Y8G("ngIf",o.form.controls.phone.hasError("required")&&o.form.controls.phone.touched),e.R7$(),e.Y8G("ngIf",o.form.controls.phone.hasError("minlength")&&o.form.controls.phone.touched),e.R7$(5),e.Y8G("type",o.showDatePicker?"date":"text"),e.R7$(),e.Y8G("ngIf",o.form.controls.birthday.hasError("required")&&o.form.controls.birthday.touched),e.R7$(11),e.Y8G("ngIf",o.form.controls.sex.hasError("required")&&o.form.controls.sex.touched),e.R7$(6),e.Y8G("ngIf",o.form.controls.email.hasError("email")||o.form.controls.email.touched&&o.form.controls.email.invalid),e.R7$(3),e.Y8G("formControlName","searchTerm"),e.R7$(),e.Y8G("ngIf",o.igrejasFiltradas.length>0))},dependencies:[m.MD,m.Sq,m.bT,c.YN,c.qT,c.me,c.BC,c.cb,a.bv,a.Jm,a.b_,a.$w,a.uz,a.nf,a.Nm,a.Ip,a.IO,a.BC,a.ai,a.Je,a.Gw,c.X1,c.j4,c.JD,h.Zr],styles:['.centralizar-avatar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:17px}.card[_ngcontent-%COMP%]{width:600px;padding:20px}.identar-lista[_ngcontent-%COMP%]{margin-left:5px}.margin-input[_ngcontent-%COMP%]{width:47%;margin-bottom:20px}.group[_ngcontent-%COMP%]{display:flex;line-height:28px;align-items:center;position:relative;margin-bottom:5px}.input[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;width:100%;height:50px;padding-left:2.5rem;border:0;border-radius:10px;border:1px solid black;background-color:#fff;outline:none;color:#bdbecb;transition:all .25s cubic-bezier(.19,1,.22,1);cursor:text;z-index:0}.input[_ngcontent-%COMP%]::placeholder{color:#000}.input[_ngcontent-%COMP%]:active{transform:scale(.97)}.input-igreja[_ngcontent-%COMP%]{padding-left:2.5rem!important;color:#000;--placeholder-color: black !important;--placeholder-opacity: unset}.search-icon[_ngcontent-%COMP%]{position:absolute;left:1rem;fill:#bdbecb;width:1.2rem;height:1.2rem;z-index:1;color:#000;top:14px}.checkbox-wrapper-46[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{display:none;visibility:hidden}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]{margin:auto;-webkit-user-select:none;user-select:none;cursor:pointer}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;transform:translateZ(0);color:#000}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{position:relative;width:18px;height:18px;border-radius:3px;transform:scale(1);vertical-align:middle;border:1px solid #9098a9;transition:all .2s ease}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%]{position:absolute;top:3px;left:2px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:16px;transition:all .3s ease;transition-delay:.1s;transform:translateZ(0)}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before{content:"";width:100%;height:100%;background:#506eec;display:block;transform:scale(0);opacity:1;border-radius:50%}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{padding-left:8px}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:first-child{border-color:#506eec}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{background:#212121;border-color:#212121;animation:_ngcontent-%COMP%_wave-46 .4s ease}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%]{stroke-dashoffset:0}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before{transform:scale(3.5);opacity:0;transition:all .6s ease}.igrejas-lista[_ngcontent-%COMP%]{max-height:300px;overflow-y:auto;margin-top:10px;padding-left:0;padding-right:0;border-radius:10px;box-shadow:0 4px 10px #0000001a;background-color:#fff}.igreja-item[_ngcontent-%COMP%]{font-size:16px;color:#333;padding-left:20px;padding-right:20px;height:50px;display:flex;align-items:center;border-bottom:1px solid #f0f0f0;cursor:pointer;transition:background-color .3s ease,transform .3s ease}.igreja-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0;transform:translate(5px)}.igreja-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:10px;color:#506ce4}.error[_ngcontent-%COMP%]{margin-left:15px;color:red;display:block}@keyframes _ngcontent-%COMP%_wave-46{50%{transform:scale(.9)}}@media (height: 844px){.centralizar-avatar[_ngcontent-%COMP%]{margin-top:50px}}@media (min-width: 1280px){.card[_ngcontent-%COMP%]{width:500px;margin:0;padding:20px}}@media (max-width: 768px){.igrejas-lista[_ngcontent-%COMP%]{max-height:200px}.igreja-item[_ngcontent-%COMP%]{font-size:14px;padding-left:15px;padding-right:15px}}']}),i})();function X(t,i){if(1&t){const r=e.RV6();e.j41(0,"div",5)(1,"ion-segment",8)(2,"ion-segment-button",9),e.bIt("click",function(){e.eBV(r);const o=e.XpG();return e.Njj(o.toggleMarcado("entre"))}),e.j41(3,"ion-label",10),e.EFF(4,"Entre"),e.k0s()(),e.j41(5,"ion-segment-button",11),e.bIt("click",function(){e.eBV(r);const o=e.XpG();return e.Njj(o.toggleMarcado("cadastrar"))}),e.j41(6,"ion-label",10),e.EFF(7,"Cadastre-se!"),e.k0s()()()()}if(2&t){const r=e.XpG();e.R7$(2),e.AVh("segment-ativo",r.marcadoEntre),e.R7$(),e.Y8G("color",r.marcadoEntre?"branco":"azul-claro"),e.R7$(2),e.AVh("segment-ativo",r.marcadoCadastraSe),e.R7$(),e.Y8G("color",r.marcadoCadastraSe?"branco":"azul-claro")}}function V(t,i){1&t&&(e.j41(0,"ion-text",33),e.EFF(1,"Email incorreto"),e.k0s())}function U(t,i){1&t&&(e.j41(0,"ion-text",34),e.EFF(1,"Senha incorreto"),e.k0s())}function A(t,i){1&t&&(e.j41(0,"ion-text",35),e.EFF(1," Email ou senha est\xe3o incorretos. "),e.k0s())}function J(t,i){if(1&t){const r=e.RV6();e.j41(0,"div",5)(1,"ion-card",12)(2,"ion-item",13)(3,"ion-title",14),e.EFF(4,"Bem-vindos, "),e.j41(5,"strong"),e.EFF(6,"Alian\xe7ados!"),e.k0s()()(),e.j41(7,"ion-toolbar")(8,"ion-title",15),e.EFF(9,"Login"),e.k0s()(),e.j41(10,"form",16),e.bIt("ngSubmit",function(){e.eBV(r);const o=e.XpG();return e.Njj(o.logar())}),e.j41(11,"ion-list",17)(12,"div",18),e.nrm(13,"img",19),e.j41(14,"input",20),e.mxI("ngModelChange",function(o){e.eBV(r);const s=e.XpG();return e.DH7(s.email,o)||(s.email=o),e.Njj(o)}),e.k0s()(),e.DNE(15,V,2,0,"ion-text",21),e.nrm(16,"br"),e.j41(17,"div",18),e.nrm(18,"img",22),e.j41(19,"input",23),e.mxI("ngModelChange",function(o){e.eBV(r);const s=e.XpG();return e.DH7(s.senha,o)||(s.senha=o),e.Njj(o)}),e.k0s(),e.j41(20,"img",24),e.bIt("click",function(){e.eBV(r);const o=e.XpG();return e.Njj(o.toggleEye())}),e.k0s()(),e.DNE(21,U,2,0,"ion-text",25),e.k0s(),e.DNE(22,A,2,0,"ion-text",26),e.nrm(23,"br"),e.j41(24,"div",27),e.nrm(25,"input",28),e.j41(26,"label",29)(27,"span"),e.qSk(),e.j41(28,"svg",30),e.nrm(29,"polyline",31),e.k0s()(),e.joV(),e.j41(30,"span"),e.EFF(31,"Lembrar senha"),e.k0s()()(),e.nrm(32,"br"),e.j41(33,"ion-button",32),e.EFF(34,"ACESSAR"),e.k0s()()()()}if(2&t){const r=e.XpG();e.R7$(10),e.Y8G("formGroup",r.form),e.R7$(4),e.R50("ngModel",r.email),e.R7$(),e.Y8G("ngIf",r.form.controls.userEmail.invalid&&r.form.controls.userEmail.touched),e.R7$(4),e.Y8G("type",r.toggleOfEye?"password":"text"),e.R50("ngModel",r.senha),e.R7$(),e.Y8G("src",r.toggleOfEye?"assets/img/ver_senha.svg":"assets/img/nao_ver_senha.svg",e.B4B),e.R7$(),e.Y8G("ngIf",r.form.controls.userName.invalid&&r.form.controls.userName.touched),e.R7$(),e.Y8G("ngIf",r.loginError)}}function q(t,i){if(1&t){const r=e.RV6();e.j41(0,"div",5)(1,"ion-card",36)(2,"ion-header",37)(3,"ion-title",38),e.EFF(4,"Qual a sua participa\xe7\xe3o na igreja?"),e.k0s()(),e.j41(5,"div")(6,"div",39)(7,"div",40)(8,"ion-button",41),e.bIt("click",function(){e.eBV(r);const o=e.XpG();return e.Njj(o.toggleMarcado("responsavel"))})("click",function(){e.eBV(r);const o=e.XpG();return e.Njj(o.responsavelCadastro("cadastroResponsavel"))}),e.j41(9,"div",42),e.EFF(10," Respons\xe1vel pela igreja "),e.k0s()(),e.j41(11,"ion-button",41),e.bIt("click",function(){e.eBV(r);const o=e.XpG();return e.Njj(o.toggleMarcado("membro"))})("click",function(){e.eBV(r);const o=e.XpG();return e.Njj(o.membroCadastro("cadastroMembro"))}),e.j41(12,"div",42),e.EFF(13," Membro da igreja "),e.k0s()()()()()()()}if(2&t){const r=e.XpG();e.R7$(8),e.Y8G("color",r.responsavel?"degraderblack":"branco"),e.R7$(3),e.Y8G("color",r.membro?"degraderblack":"branco")}}function Z(t,i){if(1&t){const r=e.RV6();e.j41(0,"app-responsavel",43),e.bIt("cadastroChange",function(o){e.eBV(r);const s=e.XpG();return e.Njj(s.atualizarCadastroResponsavel(o))}),e.k0s()}if(2&t){const r=e.XpG();e.Y8G("cadastro",r.cadastroResponsavel)}}function H(t,i){if(1&t){const r=e.RV6();e.j41(0,"app-membro",43),e.bIt("cadastroChange",function(o){e.eBV(r);const s=e.XpG();return e.Njj(s.atualizarCadastroMembro(o))}),e.k0s()}if(2&t){const r=e.XpG();e.Y8G("cadastro",r.cadastroMembro)}}const Q=[{path:"",component:(()=>{var t;class i{constructor(n,o,s,g){this._loginService=n,this._router=o,this._fb=s,this._dadosDoLoginService=g,this.size=20,this.email="",this.senha="",this.loginError=!1,this.marcadoEntre=!0,this.marcadoCadastraSe=!1,this.responsavel=!1,this.membro=!1,this.cadastroResponsavel=!1,this.cadastroMembro=!1,this.toggleOfEye=!0,this.form=this._fb.group({userName:["",[c.k0.required]],userEmail:["",[c.k0.required,c.k0.email]]})}ngOnInit(){this._dadosDoLoginService.limparUsuario()}logar(){this.form.markAllAsTouched(),this.form.invalid?console.log("Formul\xe1rio inv\xe1lido"):this._loginService.getLogin().subscribe({next:n=>{const o=n.find(s=>s.email===this.email&&s.username===this.senha);o?this.handleSuccessfulLogin(o):this.handleFailedLogin()},error:n=>{console.error("Error ao tentar logar:",n),this.showErrorMessage("Erro de conex\xe3o. Tenta novamente mais tarde.")}})}handleSuccessfulLogin(n){this.loginError=!1,this._dadosDoLoginService.setUsuario(n),this._router.navigate(["/inicio"])}handleFailedLogin(){this.loginError=!0,this.showErrorMessage("Email ou senha inv\xe1lidos.")}showErrorMessage(n){console.log(n)}toggleMarcado(n){"entre"===n?(this.marcadoEntre=!0,this.marcadoCadastraSe=!1,this.cadastroResponsavel=!1,this.cadastroMembro=!1):"cadastrar"===n&&(this.marcadoEntre=!1,this.marcadoCadastraSe=!0),"responsavel"===n?(this.responsavel=!0,this.membro=!1):"membro"===n&&(this.responsavel=!1,this.membro=!0)}responsavelCadastro(n){"cadastroResponsavel"===n&&(this.cadastroResponsavel=!0,this.marcadoCadastraSe=!1)}membroCadastro(n){"cadastroMembro"===n&&(this.cadastroMembro=!0,this.marcadoCadastraSe=!1)}atualizarCadastroResponsavel(n){this.cadastroResponsavel=n,this.marcadoCadastraSe=!0}atualizarCadastroMembro(n){this.cadastroMembro=n,this.marcadoCadastraSe=!0}toggleEye(){this.toggleOfEye=!this.toggleOfEye}}return(t=i).\u0275fac=function(n){return new(n||t)(e.rXU(b),e.rXU(d.Ix),e.rXU(c.ok),e.rXU(x.b))},t.\u0275cmp=e.VBU({type:t,selectors:[["app-login"]],decls:11,vars:5,consts:[["color","cinza-claro"],[1,"degraderBlack"],[2,"width","100%","height","50px"],[1,"centralizar"],["class","centralizar-avatar",4,"ngIf"],[1,"centralizar-avatar"],[3,"cadastro"],["src","assets/img/logo-alian\xe7ados.png",1,"logo-alian\xe7ados"],["value","entre","color","azul-claro",1,"segment-custom"],["value","entre",3,"click"],[3,"color"],["value","cadastrar",3,"click"],[1,"card"],[2,"border-bottom","1px solid black","margin","0 6px"],["color","letras",2,"padding","0"],["color","letras",2,"margin-left","3px"],[3,"ngSubmit","formGroup"],[1,"identar-lista"],[1,"group"],["src","assets/img/email.svg","height","25px","width","100px",1,"search-icon"],["id","userEmail","type","email","placeholder","Email","formControlName","userEmail","name","searchbar",1,"input",2,"color","black",3,"ngModelChange","ngModel"],["style","margin-left: 15px; color: red; display: block;",4,"ngIf"],["src","assets/img/lock.svg","height","25px","width","100px",1,"search-icon",2,"top",".9rem"],["id","userName","placeholder","Senha","formControlName","userName","name","searchbar",1,"input",2,"color","black",3,"ngModelChange","type","ngModel"],["height","25px","width","100px",1,"search-icon",2,"right","1rem","left","unset","fill","black","top","1rem",3,"click","src"],["style","margin-left: 15px;color: red",4,"ngIf"],["style","color: red; margin-left: 15px; display: block;",4,"ngIf"],[1,"checkbox-wrapper-46",2,"margin-left","22px"],["type","checkbox","id","cbx-46",1,"inp-cbx"],["for","cbx-46",1,"cbx"],["viewBox","0 0 12 10","height","10px","width","12px"],["points","1.5 6 4.5 9 10.5 1"],["color","azul-claro","expand","block","type","submit"],[2,"margin-left","15px","color","red","display","block"],[2,"margin-left","15px","color","red"],[2,"color","red","margin-left","15px","display","block"],[1,"card",2,"padding","0"],[1,"degraderBlack",2,"height","70px","padding","10px","display","flex","align-items","center"],[2,"color","white"],[2,"margin","30px"],[1,"cadastro-options"],[1,"no-shadow","cadastro-options_button",3,"click","color"],[2,"width","100%","text-align","start"],[3,"cadastroChange","cadastro"]],template:function(n,o){1&n&&(e.j41(0,"ion-content",0)(1,"ion-header",1),e.nrm(2,"ion-title",2),e.k0s(),e.j41(3,"div",3),e.DNE(4,X,8,6,"div",4)(5,J,35,8,"div",5)(6,q,14,2,"div",5)(7,Z,1,1,"app-responsavel",6)(8,H,1,1,"app-membro",6),e.j41(9,"div",5),e.nrm(10,"ion-img",7),e.k0s()()()),2&n&&(e.R7$(4),e.Y8G("ngIf",!o.cadastroResponsavel&&!o.cadastroMembro),e.R7$(),e.vxM(o.marcadoEntre?5:-1),e.R7$(),e.vxM(o.marcadoCadastraSe?6:-1),e.R7$(),e.vxM(o.cadastroResponsavel?7:-1),e.R7$(),e.vxM(o.cadastroMembro?8:-1))},dependencies:[m.bT,c.qT,c.me,c.BC,c.cb,a.Jm,a.b_,a.W9,a.eU,a.KW,a.uz,a.he,a.nf,a.Gp,a.eP,a.IO,a.BC,a.ai,a.Je,c.j4,c.JD,u.ResponsavelComponent,f],styles:['@charset "UTF-8";ion-content[_ngcontent-%COMP%]{--padding-top: 0;overflow:auto;display:flex;flex-direction:column}.centralizar[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;flex-direction:column;width:100%;padding-top:70px}.centralizar-avatar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-bottom:17px;padding:0 15px}.centralizar-avatar[_ngcontent-%COMP%]   .no-shadow[_ngcontent-%COMP%]{box-shadow:none!important;--box-shadow: none !important;margin:0;text-transform:unset}.segment-custom[_ngcontent-%COMP%]{background-color:#e5e5e5;border-radius:15px;display:flex;justify-content:center;padding:5px;gap:10px}.segment-custom[_ngcontent-%COMP%]   ion-segment-button[_ngcontent-%COMP%]{box-shadow:none!important;--box-shadow: none !important;border-radius:6px;margin:0;text-transform:unset;background-color:#fff;border:1px solid black;color:#000;width:150px;height:40px;display:flex;justify-content:center;align-items:center}.segment-custom[_ngcontent-%COMP%]   ion-segment-button.segment-ativo[_ngcontent-%COMP%]{background:linear-gradient(90deg,#000 30%,#383838)!important;color:#fff!important}.avatar-grande[_ngcontent-%COMP%]{width:150px;height:150px;margin-bottom:15px}.card[_ngcontent-%COMP%]{width:100%;max-width:600px;padding:20px;margin:0 auto}.logo-alian\\e7 ados[_ngcontent-%COMP%]{width:180px;height:80px}.identar-lista[_ngcontent-%COMP%]{margin-left:5px}.degraderBlack[_ngcontent-%COMP%]{background-color:#000!important;background:linear-gradient(90deg,#000 30%,#383838)!important}.group[_ngcontent-%COMP%]{display:flex;line-height:28px;align-items:center;position:relative;margin-bottom:10px}.input[_ngcontent-%COMP%]{font-family:Montserrat,sans-serif;width:100%;height:50px;padding-left:2.5rem;border:0;border-radius:10px;border:1px solid black;background-color:#fff;outline:none;color:#bdbecb;transition:all .25s cubic-bezier(.19,1,.22,1);cursor:text;z-index:0;font-size:larger}.input[_ngcontent-%COMP%]::placeholder{color:#000}.input[_ngcontent-%COMP%]:active{transform:scale(.97)}.search-icon[_ngcontent-%COMP%]{position:absolute;left:1rem;width:1.2rem;height:1.2rem;z-index:1;color:#000}.checkbox-wrapper-46[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%]{display:none;visibility:hidden}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]{margin:auto;-webkit-user-select:none;user-select:none;cursor:pointer}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle;transform:translateZ(0);color:#000}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{position:relative;width:18px;height:18px;border-radius:3px;transform:scale(1);vertical-align:middle;border:1px solid #9098a9;transition:all .2s ease}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%]{position:absolute;top:3px;left:2px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:16px;stroke-dashoffset:16px;transition:all .3s ease;transition-delay:.1s;transform:translateZ(0)}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before{content:"";width:100%;height:100%;background:#506eec;display:block;transform:scale(0);opacity:1;border-radius:50%}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child{padding-left:8px}.checkbox-wrapper-46[_ngcontent-%COMP%]   .cbx[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]:first-child{border-color:#506eec}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child{background:#212121;border-color:#212121;animation:_ngcontent-%COMP%_wave-46 .4s ease}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child   svg[_ngcontent-%COMP%]{stroke-dashoffset:0}.checkbox-wrapper-46[_ngcontent-%COMP%]   .inp-cbx[_ngcontent-%COMP%]:checked + .cbx[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child:before{transform:scale(3.5);opacity:0;transition:all .6s ease}.cadastro-options[_ngcontent-%COMP%]{background-color:#fff;border-radius:15px;display:flex;flex-direction:column;width:100%;gap:20px}.cadastro-options_button[_ngcontent-%COMP%]{border:solid 1px black!important;border-radius:4px}@keyframes _ngcontent-%COMP%_wave-46{50%{transform:scale(.9)}}@media (min-width: 1280px){.card[_ngcontent-%COMP%]{width:500px;padding:20px}}']}),i})()}];let K=(()=>{var t;class i{}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[d.iI.forChild(Q),d.iI]}),i})(),W=(()=>{var t;class i{}return(t=i).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.$C({type:t}),t.\u0275inj=e.G2t({imports:[m.MD,c.YN,a.bv,K,c.X1,u.ResponsavelComponent,f]}),i})()}}]);