import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgVivendoEmAliancaPageRoutingModule } from './pg-vivendo-em-alianca-routing.module';

import { PgVivendoEmAliancaPage } from './pg-vivendo-em-alianca.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgVivendoEmAliancaPageRoutingModule
  ],
  declarations: [PgVivendoEmAliancaPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PgVivendoEmAliancaPageModule {}
