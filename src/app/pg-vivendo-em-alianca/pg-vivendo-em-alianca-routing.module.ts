import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PgVivendoEmAliancaPage } from './pg-vivendo-em-alianca.page';

const routes: Routes = [
  {
    path: '',
    component: PgVivendoEmAliancaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PgVivendoEmAliancaPageRoutingModule {}
