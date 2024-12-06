import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DadosDoLoginService } from '../services/dadosDoLogin.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private _dadosDoLoginService: DadosDoLoginService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {

    // Verifica se o usuário está logado
    const usuario = this._dadosDoLoginService.getUsuario();

    if (usuario) {
      return true; // Permite o acesso à rota
    } else {
      // Se não estiver autenticado, redireciona para a página de login
      this.router.navigate(['/login']);
      return false;
    }
  }
}
