import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pg-biblioteca-aliancados',
  templateUrl: './pg-biblioteca-aliancados.page.html',
  styleUrls: ['./pg-biblioteca-aliancados.page.scss'],
})
export class PgBibliotecaAliancadosPage implements OnInit {
  showSearch: boolean = false;

  items: { id: number; heart: string; }[] = [
    { id: 0, heart: 'heart-outline' },
    { id: 1, heart: 'heart-outline' },
    { id: 2, heart: 'heart-outline' },
    { id: 3, heart: 'heart-outline' },
    { id: 4, heart: 'heart-outline' },
    { id: 5, heart: 'heart-outline' },
    { id: 6, heart: 'heart-outline' },
    { id: 7, heart: 'heart-outline' },
    { id: 8, heart: 'heart-outline' },
    { id: 9, heart: 'heart-outline' },
    { id: 10, heart: 'heart-outline' },
    { id: 11, heart: 'heart-outline' },
    { id: 12, heart: 'heart-outline' },
    { id: 13, heart: 'heart-outline' },
    { id: 14, heart: 'heart-outline' },
    { id: 15, heart: 'heart-outline' },
    { id: 16, heart: 'heart-outline' },
    { id: 17, heart: 'heart-outline' },
    { id: 18, heart: 'heart-outline' },
  ];

  constructor(private _router: Router, private readonly _location: Location) { }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }

  voltarPaginaInical() {
    this._location.back();
  }
  
  abrirResumoLivro(id: number) {
    this._router.navigate(['/resumo-livros', id]);
  }

  favorite(item: { id: number; heart: string }, event: Event) {
    event.stopPropagation();
    item.heart = item.heart === 'heart-outline' ? 'heart' : 'heart-outline';
  
    const favoritos = this.items.filter(i => i.heart === 'heart').map(i => i.id);
    localStorage.setItem('favoritos', JSON.stringify(favoritos));
  }
  

  
  ngOnInit() {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');

    this.items = this.items.map(item => {
      if(favoritos.includes(item.id)) {
        return {...item, heart: 'heart'};
      }

      return item;
    })
  }

}
