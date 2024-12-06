import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DadosDoLoginService } from '../services/dadosDoLogin.service';
import { getMessageForDate } from '../utils/date.-utils';
import { getSpecialDateClass } from '../utils/marca-data-color.utils';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  showSearch: boolean = false;
  selectedDate: Date = new Date();
  userName: string = '';
  userEmail: string = '';
  selectedMessage: string = ''; // Mensagem da data selecionada
  currentMessage: string = `
  Dia 07, 08, 09: evento x
  Dia 25: Natal`;

  constructor(
    private readonly _dadosDoLoginService: DadosDoLoginService,
    private menuCtrl: MenuController,
    private readonly _router: Router,
  ) { }

  ngOnInit() {
    this.loadUserData();
  }

  private loadUserData() {
    const userData = this._dadosDoLoginService.getUsuario();
    if (userData) {
      this.userName = userData.name;
      this.userEmail = userData.email;
    } else {
      console.warn('Nenhum usuário logado');
      this.updateCurrentMessage();
    }
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  openRightMenu() {
    this.menuCtrl.open('end');
  }

  navigateToVivendoEmAlianca() {
    this._router.navigate(['/pg-vivendo-em-alianca']);
  }

  navigateToBibliotecaDosAliancados() {
    this._router.navigate(['/pg-biblioteca-aliancados']);
  }

  getMessageForSelectedDate(): string {
    return getMessageForDate(this.selectedDate); // Usa a função da pásta de utils
  }


  dateClass = (date: Date): string => {
    return getSpecialDateClass(date);
  };

  //mensagem do dia atual
  private updateCurrentMessage() {
    this.currentMessage = getMessageForDate(this.selectedDate); // Pega a mensagem da data atual
  }

  //selecionando uma data diferente
  onDateSelect(date: Date | null) {
    if (date) {  // Verifica se a data não é null
      this.selectedDate = date;
      this.selectedMessage = getMessageForDate(date); // Pega a mensagem da data selecionada
      this.currentMessage = ''; // Remove a mensagem do dia atual
      return;
    }
  }

  resetToDefaultEvents() {
    this.selectedMessage = '';
    this.currentMessage = `
    Dia 07, 08, 09: evento x
    Dia 25: Natal`;
  }
}