import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumoLivrosPage } from './resumo-livros.page';

const routes: Routes = [
  {
    path: '',
    component: ResumoLivrosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumoLivrosPageRoutingModule {}
