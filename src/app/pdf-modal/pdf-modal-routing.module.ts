import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PdfModalPage } from './pdf-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PdfModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PdfModalPageRoutingModule {}
