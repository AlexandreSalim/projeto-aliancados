import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PgBibliotecaAliancadosPageRoutingModule } from './pg-biblioteca-aliancados-routing.module';

import { PgBibliotecaAliancadosPage } from './pg-biblioteca-aliancados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PgBibliotecaAliancadosPageRoutingModule
  ],
  declarations: [PgBibliotecaAliancadosPage]
})
export class PgBibliotecaAliancadosPageModule {}
