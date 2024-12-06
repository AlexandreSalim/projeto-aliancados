import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosDoLoginService {

  private usuario: any = null;

  constructor() {
    const usuarioSalvo = localStorage.getItem('usuario');
    if (usuarioSalvo) {
      this.usuario = JSON.parse(usuarioSalvo);
    }
  }

  setUsuario(usuario: any) {
    // const dadosFiltrados = {
    //   id: usuario.id,
    //   username: usuario.username,
    //   name: usuario.name,
    // };
    this.usuario = usuario;
    localStorage.setItem('usuario', JSON.stringify(usuario));
  }

  getUsuario() {
    return this.usuario;
  }

  limparUsuario() {
    this.usuario = null;
    localStorage.removeItem('usuario');
  }
}
