import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumoLivrosPageRoutingModule } from './resumo-livros-routing.module';

import { ResumoLivrosPage } from './resumo-livros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumoLivrosPageRoutingModule
  ],
  declarations: [ResumoLivrosPage]
})
export class ResumoLivrosPageModule {}
