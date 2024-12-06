import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-resumo-livros',
  templateUrl: './resumo-livros.page.html',
  styleUrls: ['./resumo-livros.page.scss'],
})
export class ResumoLivrosPage implements OnInit {

  livroId: number | null = null;
  visualizacao: number = 0;
  visualizados: boolean = false;
  gostei: number = 0;
  gosteiClicado: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private readonly _location: Location,
  ) { }

  ngOnInit() {
    this.livroId = Number(this.route.snapshot.paramMap.get('id'));

    const savedLikes  = localStorage.getItem(`like_${this.livroId}`);
    const likedStatus = localStorage.getItem(`likedStatus_${this.livroId}`);
    const savedVisualizacao  = localStorage.getItem(`visualizado_${this.livroId}`);

    if(savedLikes) {
      this.gostei = JSON.parse(savedLikes);
    }
    if (likedStatus) {
      this.gosteiClicado = JSON.parse(likedStatus);
    }
    if(savedVisualizacao) {
      this.visualizacao = JSON.parse(savedVisualizacao);
    }

  }

  voltarPaginaInical() {
    this._location.back();
  }

  inicio() {
    window.history.go(-2);
  }

  like() {
    if (!this.gosteiClicado) {
      this.gostei++;
      this.gosteiClicado = true;
    } else {
      this.gostei--;
      this.gosteiClicado = false;
    }

    localStorage.setItem(`like_${this.livroId}`, JSON.stringify(this.gostei));
    localStorage.setItem(`likedStatus_${this.livroId}`, JSON.stringify(this.gosteiClicado));
  }

  visualizado() {
    if (!this.visualizados) {
      this.visualizacao++;
      this.visualizados = true;
    }
    localStorage.setItem(`visualizado_${this.livroId}`, JSON.stringify(this.visualizacao))
  }
}
