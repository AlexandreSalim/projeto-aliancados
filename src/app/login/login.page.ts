import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { DadosDoLoginService } from '../services/dadosDoLogin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit{
  form!: FormGroup;
  size = 20;
  email = '';
  senha = '';

  constructor(
    private readonly _loginService: LoginService,
    private readonly _router: Router,
    private readonly _fb: FormBuilder,
    private readonly _dadosDoLoginService: DadosDoLoginService,
  ) {
    this.form = this._fb.group({
      userName: ['', [Validators.required]],
      userEmail: ['', [Validators.required, Validators.email]],
    })
  }

  ngOnInit(): void {
    this._dadosDoLoginService.limparUsuario(); //limpando o usuario e o guard nao deixa ninguem acessar nada
  }

  logar() {
    this._loginService.getLogin().subscribe({
      next: (users) => {
        const user = users.find((user: any) => user.email === this.email && user.username === this.senha);

        if (user) {
          this.handleSuccessfulLogin(user);
        } else {
          this.handleFailedLogin();
        }
      },
      error: (error) => {
        console.error('Error ao tentar logar:', error);
        this.showErrorMessage('Erro de conexão. Tenta novamente mais tarde.');
      }
    });
  };

  private handleSuccessfulLogin(user: any) {
    this._dadosDoLoginService.setUsuario(user);
    this._router.navigate(['/inicio']);
  }
  
  private handleFailedLogin() {
    this.showErrorMessage('Email ou senha inválidos.');
  }
  
  private showErrorMessage(message: string) {
    console.log(message);
    this._router.navigate(['/page-not-found']);
  }  

}
