import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrivateGuard implements CanActivate {

  constructor(
    private router: Router,
    private readonly _httpClient: HttpClient
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | Observable<boolean> {
        return this._httpClient.get<{ username: string }[]>('https://jsonplaceholder.typicode.com/users').pipe(
            map((response) => {
                const userLogado = JSON.parse(localStorage.getItem('usuario')!);
                const user = response.find(user => user.username === 'Bret')
              if (user && userLogado.username === user.username){
                console.log('Acesso permitido para:', userLogado.username);
                return true;
              } else {
                console.log('user errado')
                this.router.navigate(['/inicio']); // Rota para acesso negado
                return false;
              }
            }),
            catchError((err) => {
              console.log('erro inesperado');
              this.router.navigate(['/page-not-found']);
              return of(false);
            })
          );
        }
}
