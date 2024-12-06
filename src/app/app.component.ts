import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { DadosDoLoginService } from './services/dadosDoLogin.service';
import { MenuController } from '@ionic/angular';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  //pg-vivendo-em-alianca
  isLoginPage: boolean = false;
  
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'folder', url: '/folder/inbox', icon: 'Folder' },
  ];

  constructor(
    private _router: Router,
    private menuCtrl: MenuController,
    private readonly _dadosDoLoginService: DadosDoLoginService,
  ) {
      this._router.events.subscribe(() => {this.isLoginPage = this._router.url === '/login';});
  }

  logout() {
    this._dadosDoLoginService.limparUsuario();
    this._router.navigate(['/login']);
  }

  openRightMenu() {
    this.menuCtrl.open('end');
  }

}
