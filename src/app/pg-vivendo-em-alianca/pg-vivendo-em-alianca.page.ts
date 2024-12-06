import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { PdfModalPage } from '../pdf-modal/pdf-modal.page';


@Component({
  selector: 'app-pg-vivendo-em-alianca',
  templateUrl: './pg-vivendo-em-alianca.page.html',
  styleUrls: ['./pg-vivendo-em-alianca.page.scss'],
})
export class PgVivendoEmAliancaPage {
  showSearch: boolean = false;

  pdfs = [
    {nome: 'aliançados', id: 0,},
    {nome: 'rebelião', id: 1,},
    {nome: 'célula', id: 2},
    {nome: 'Livro 4', id: 3},
    {nome: 'Livro 5', id: 4},
    {nome: 'Livro 6', id: 5},
  ]

  constructor(
    private _router: Router, 
    private readonly _location: Location,
    private modalController: ModalController
  ) { }

  async abrirModal(livro: { nome: string; id: number }) {
    const modal = await this.modalController.create({
      component: PdfModalPage, // Componente a ser exibido
      componentProps: { // Dados que podem ser passados ao modal
        id: livro.id, 
        nome: livro.nome
      },
      cssClass: 'custom-modal',
    });
    await modal.present();

    const { data } = await modal.onWillDismiss(); // Captura dados ao fechar o modal
    localStorage.setItem('pdfModal', data);
    console.log('Dados do pdfModal:', data);
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
  
  abrirResumoLivro(id: number) {
    this._router.navigate(['/resumo-livros', id]);
  }

  voltarPaginaInical() {
   this._location.back();
  }
}
