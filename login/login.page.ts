import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  size = 20;
  constructor() { }

  ngOnInit() {
  }

  logar() {
    console.log('logar')
  }
}
