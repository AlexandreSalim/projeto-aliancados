import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfModalPageRoutingModule } from './pdf-modal-routing.module';

import { PdfModalPage } from './pdf-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfModalPageRoutingModule
  ],
  declarations: [PdfModalPage]
})
export class PdfModalPageModule {}
