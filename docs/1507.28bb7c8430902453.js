"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1507],{1507:(pe,T,u)=>{u.r(T),u.d(T,{InicioPageModule:()=>fe});var p=u(177),B=u(9417),A=u(1486),D=u(5596),t=u(4438),E=u(6600);u(7673),u(8810),u(7468),u(8141),u(6354),u(9437),u(980),u(8750),u(1413),u(7707),u(9974),u(1626),u(345);let ie=(()=>{var o;class r{}return(o=r).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[E.yE,E.yE]}),r})();var d=u(4742),w=u(5559);function R(o){return o&&{"2024-12-07":"Dia 07: primeiro dia do evento x. mais coisas sobre o evento.\n      horario do evento e mais.","2024-12-08":"Dia 08: segundo dia do evento x. mais coisas sobre o evento.\n      horario do evento e mais.","2024-12-09":"Dia 09: terceiro dia do evento x. mais coisas sobre o evento.\n      horario do evento e mais.","2024-12-25":"Dia 25: Natal."}[o.toISOString().split("T")[0]]||""}const se={"2024-12-07":"black-bg-rigth","2024-12-08":"black-bg-meio","2024-12-09":"black-bg-left","2024-12-25":"red-bg"};var ce=u(9565);function le(o,r){if(1&o){const c=t.RV6();t.j41(0,"input",37),t.bIt("blur",function(){t.eBV(c);const n=t.XpG();return t.Njj(n.toggleSearch())}),t.k0s()}}function ue(o,r){if(1&o&&t.nrm(0,"p",38),2&o){const c=t.XpG();t.Y8G("innerText",c.currentMessage)}}function de(o,r){if(1&o&&(t.j41(0,"p",39),t.EFF(1),t.k0s()),2&o){const c=t.XpG();t.R7$(),t.JRh(c.selectedMessage)}}const ge=[{path:"",component:(()=>{var o;class r{constructor(e,n,i){this._dadosDoLoginService=e,this.menuCtrl=n,this._router=i,this.showSearch=!1,this.selectedDate=new Date,this.userName="",this.userEmail="",this.selectedMessage="",this.currentMessage="\n  Dia 07, 08, 09: evento x\n  Dia 25: Natal",this.dateClass=s=>function re(o){const r=function ae(o){return`${o.getFullYear()}-${(o.getMonth()+1).toString().padStart(2,"0")}-${o.getDate().toString().padStart(2,"0")}`}(o);return se[r]||""}(s)}ngOnInit(){this.loadUserData()}loadUserData(){const e=this._dadosDoLoginService.getUsuario();e?(this.userName=e.name,this.userEmail=e.email):(console.warn("Nenhum usu\xe1rio logado"),this.updateCurrentMessage())}toggleSearch(){this.showSearch=!this.showSearch}openRightMenu(){this.menuCtrl.open("end")}navigateToVivendoEmAlianca(){this._router.navigate(["/pg-vivendo-em-alianca"])}navigateToBibliotecaDosAliancados(){this._router.navigate(["/pg-biblioteca-aliancados"])}getMessageForSelectedDate(){return R(this.selectedDate)}updateCurrentMessage(){this.currentMessage=R(this.selectedDate)}onDateSelect(e){if(e)return this.selectedDate=e,this.selectedMessage=R(e),void(this.currentMessage="")}resetToDefaultEvents(){this.selectedMessage="",this.currentMessage="\n    Dia 07, 08, 09: evento x\n    Dia 25: Natal"}}return(o=r).\u0275fac=function(e){return new(e||o)(t.rXU(ce.b),t.rXU(d._t),t.rXU(w.Ix))},o.\u0275cmp=t.VBU({type:o,selectors:[["app-inicio"]],decls:71,vars:8,consts:[[1,"header"],[2,"height","69px","margin","0 0 10px 20px"],["src","assets/img/logo-aliancados-branca.png",1,"logo-alian\xe7ados"],["slot","end",1,"icones"],["name","notifications","color","branco",2,"cursor","pointer","margin-right","22px",3,"click"],[1,"search-container"],["name","search","color","branco",2,"cursor","pointer",3,"click"],["type","text","class","search-input","placeholder","Pesquisar...",3,"blur",4,"ngIf"],["color","branco"],["color","cinza-claro",1,"conteudo-do-content",3,"fullscreen"],[1,"informa\xe7oes-do-cliente"],[1,"informacao"],["name","person-circle",1,"icon-person"],[1,"nome-email"],["color","branco",1,"nomeCliente"],["color","branco",1,"emailCliente"],[1,"pai-conteudo"],[1,"conteudos"],[1,"card"],[1,"card-conteudo"],["name","reader-outline"],[1,"icone-e-titulo"],[1,"card-conteudo-text"],[2,"margin-bottom","10px"],["color","azul-escuro",2,"width","150px","text-transform","capitalize",3,"click"],["name","library-outline"],[1,"card","card-desktop"],[1,"card-conteudo","card-conteudo__calendario"],[2,"display","flex","align-items","center","gap","10px"],["name","bookmark-outline"],["color","azul-escuro",3,"click"],[1,"calendario"],[1,"demo-inline-calendar-card"],[3,"selectedChange","selected","dateClass"],[2,"display","flex","align-items","start","width","340px","margin","0 0 0 35px"],["style","font-size: smaller;",3,"innerText",4,"ngIf"],["style","margin: 24px 0 0 0; font-size: smaller;",4,"ngIf"],["type","text","placeholder","Pesquisar...",1,"search-input",3,"blur"],[2,"font-size","smaller",3,"innerText"],[2,"margin","24px 0 0 0","font-size","smaller"]],template:function(e,n){1&e&&(t.j41(0,"ion-toolbar")(1,"div",0)(2,"div",1),t.nrm(3,"ion-img",2),t.k0s(),t.j41(4,"ion-buttons",3)(5,"ion-icon",4),t.bIt("click",function(){return n.openRightMenu()}),t.k0s(),t.j41(6,"div",5)(7,"ion-icon",6),t.bIt("click",function(){return n.toggleSearch()}),t.k0s(),t.DNE(8,le,1,0,"input",7),t.k0s(),t.nrm(9,"ion-menu-button",8),t.k0s()()(),t.j41(10,"ion-content",9)(11,"div",10)(12,"div",11)(13,"ion-avatar"),t.nrm(14,"ion-icon",12),t.k0s(),t.j41(15,"div",13)(16,"ion-title",14),t.EFF(17,"Ol\xe1, "),t.j41(18,"span"),t.EFF(19),t.k0s(),t.EFF(20,"!"),t.k0s(),t.j41(21,"ion-title",15),t.EFF(22),t.k0s()()()(),t.j41(23,"section",16)(24,"div",17)(25,"ion-card",18)(26,"ion-toolbar")(27,"div",19),t.nrm(28,"ion-icon",20),t.j41(29,"h2",21),t.EFF(30,"Vivendo em alian\xe7a!"),t.k0s()(),t.j41(31,"div",22)(32,"div",23)(33,"p"),t.EFF(34,"Explore nossos conte\xfados: conte\xfados para uma vida"),t.k0s(),t.j41(35,"p"),t.EFF(36,"plena em alian\xe7a"),t.k0s()(),t.j41(37,"ion-button",24),t.bIt("click",function(){return n.navigateToVivendoEmAlianca()}),t.EFF(38,"Acesse!"),t.k0s()()()()(),t.j41(39,"div",17)(40,"ion-card",18)(41,"ion-toolbar")(42,"div",19),t.nrm(43,"ion-icon",25),t.j41(44,"h2",21),t.EFF(45,"Biblioteca dos Alian\xe7ados"),t.k0s()(),t.j41(46,"div",22)(47,"div",23)(48,"p"),t.EFF(49,"Cres\xe7a em f\xe9 e Alian\xe7a: explore nossa biblioteca de"),t.k0s(),t.j41(50,"p"),t.EFF(51,"conte\xfados inspiradores."),t.k0s()(),t.j41(52,"ion-button",24),t.bIt("click",function(){return n.navigateToBibliotecaDosAliancados()}),t.EFF(53,"Acesse!"),t.k0s()()()()(),t.j41(54,"div",17)(55,"ion-card",26)(56,"ion-toolbar")(57,"div",27)(58,"div",28),t.nrm(59,"ion-icon",29),t.j41(60,"h2",21),t.EFF(61,"Pr\xf3ximos Eventos:"),t.k0s()(),t.j41(62,"ion-button",30),t.bIt("click",function(){return n.resetToDefaultEvents()}),t.EFF(63,"Eventos"),t.k0s()(),t.j41(64,"div",22)(65,"div",31)(66,"mat-card",32)(67,"mat-calendar",33),t.mxI("selectedChange",function(s){return t.DH7(n.selectedDate,s)||(n.selectedDate=s),s}),t.bIt("selectedChange",function(s){return n.onDateSelect(s)}),t.k0s()(),t.j41(68,"div",34),t.DNE(69,ue,1,1,"p",35)(70,de,2,1,"p",36),t.k0s()()()()()()()()),2&e&&(t.R7$(8),t.Y8G("ngIf",n.showSearch),t.R7$(2),t.Y8G("fullscreen",!0),t.R7$(9),t.JRh(n.userName),t.R7$(3),t.JRh(n.userEmail),t.R7$(45),t.R50("selected",n.selectedDate),t.Y8G("dateClass",n.dateClass),t.R7$(2),t.Y8G("ngIf",n.currentMessage),t.R7$(),t.Y8G("ngIf",n.selectedMessage))},dependencies:[p.bT,d.mC,d.Jm,d.QW,d.b_,d.W9,d.iq,d.KW,d.MC,d.BC,d.ai,D.RN,A.JJ],styles:['@charset "UTF-8";.logo-alian\\e7 ados[_ngcontent-%COMP%]{width:150px;height:90px}.centralizar-avatar[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.icones[_ngcontent-%COMP%]{margin:0 14px 10px 0}.icones[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .icones[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{font-size:29px}.icones[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]:nth-child(1){margin-right:10px}.header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:end;padding-top:20px;background:linear-gradient(to right,#000,#212121)}.informa\\e7oes-do-cliente[_ngcontent-%COMP%]{border-top:1px solid white;padding:15px;background:linear-gradient(to right,#000,#212121)}.informa\\e7oes-do-cliente[_ngcontent-%COMP%]   .informacao[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:5px;background-color:transparent}.informa\\e7oes-do-cliente[_ngcontent-%COMP%]   .icon-person[_ngcontent-%COMP%]{font-size:75px;color:#fff}.informa\\e7oes-do-cliente[_ngcontent-%COMP%]   .nome-email[_ngcontent-%COMP%]{margin-left:5px}.informa\\e7oes-do-cliente[_ngcontent-%COMP%]   .nomeCliente[_ngcontent-%COMP%]{font-size:24px}.informa\\e7oes-do-cliente[_ngcontent-%COMP%]   .nomeCliente[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:500}.informa\\e7oes-do-cliente[_ngcontent-%COMP%]   .emailCliente[_ngcontent-%COMP%]{font-size:18px}.pai-conteudo[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}@media (min-width: 1024px){.pai-conteudo[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}.pai-conteudo[_ngcontent-%COMP%]   .conteudos[_ngcontent-%COMP%]:nth-child(3){grid-column:span 2;max-width:none}}.conteudos[_ngcontent-%COMP%]{width:-webkit-fill-available}.conteudos[_ngcontent-%COMP%]   .card-desktop[_ngcontent-%COMP%]{min-height:550px}.conteudos[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{padding:20px;border-radius:10px}.conteudos[_ngcontent-%COMP%]   .card-conteudo[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;gap:10px}.conteudos[_ngcontent-%COMP%]   .card-conteudo__calendario[_ngcontent-%COMP%]{justify-content:space-between}.conteudos[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .conteudos[_ngcontent-%COMP%]   ion-menu-button[_ngcontent-%COMP%]{font-size:33px}.conteudos[_ngcontent-%COMP%]   .icone-e-titulo[_ngcontent-%COMP%]{font-size:large;margin:0;font-weight:500;color:#000}.conteudos[_ngcontent-%COMP%]   .card-conteudo-text[_ngcontent-%COMP%]{text-align:start;font-size:20px}.conteudos[_ngcontent-%COMP%]   .card-conteudo-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0}.conteudos[_ngcontent-%COMP%]   .calendario[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.conteudos[_ngcontent-%COMP%]   .calendario[_ngcontent-%COMP%]   .demo-inline-calendar-card[_ngcontent-%COMP%]{width:340px;background-color:#fff}@media (min-width: 768px){.conteudos[_ngcontent-%COMP%]   .calendario[_ngcontent-%COMP%]{align-items:start;flex-direction:row}}.conteudo-do-content[_ngcontent-%COMP%]{margin:50px auto}.search-container[_ngcontent-%COMP%]{display:flex;align-items:center;position:relative}.search-input[_ngcontent-%COMP%]{margin-left:8px;padding:5px;font-size:16px;border:1px solid #ccc;border-radius:4px;outline:none;background-color:#fff;color:#000;transition:all .3s ease}.search-input[_ngcontent-%COMP%]:focus{border-color:#888}@media (min-width: 768px){.conteudos[_ngcontent-%COMP%]   .card-conteudo[_ngcontent-%COMP%]{width:475px}}@media (min-width: 1024px){.icone-e-titulo[_ngcontent-%COMP%]{font-size:x-large!important}.conteudos[_ngcontent-%COMP%]{max-width:500px}div.conteudos[_ngcontent-%COMP%]   .card.card-desktop[_ngcontent-%COMP%]{min-height:380px}}@media (min-width: 1440px){.conteudos[_ngcontent-%COMP%]{max-width:-webkit-fill-available}}']}),r})()}];let he=(()=>{var o;class r{}return(o=r).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[w.iI.forChild(ge),w.iI]}),r})(),fe=(()=>{var o;class r{}return(o=r).\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.$C({type:o}),o.\u0275inj=t.G2t({imports:[p.MD,B.YN,d.bv,he,ie,D.Hu,A.X6,E.WX]}),r})()}}]);