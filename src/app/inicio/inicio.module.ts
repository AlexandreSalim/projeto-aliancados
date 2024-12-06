import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatNativeDateModule } from '@angular/material/core'; 

import { IonicModule } from '@ionic/angular';
import { InicioPageRoutingModule } from './inicio-routing.module';
import { InicioPage } from './inicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioPageRoutingModule,
    MatIconModule,
    MatCardModule, 
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [InicioPage],
})
export class InicioPageModule {}