import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgBibliotecaAliancadosPage } from './pg-biblioteca-aliancados.page';

const routes: Routes = [
  {
    path: '',
    component: PgBibliotecaAliancadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgBibliotecaAliancadosPageRoutingModule {}
