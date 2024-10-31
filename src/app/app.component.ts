import { Component } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inbox', url: '/folder/inbox', icon: 'mail' },
    { title: 'login', url: '/login', icon: 'warning' },
    { title: 'pagina inicial', url: '/pagina-inicial', icon: 'warning' },
  ];
  constructor() {}
}
