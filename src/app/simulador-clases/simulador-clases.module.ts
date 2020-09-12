import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SimuladorClasesPageRoutingModule } from './simulador-clases-routing.module';

import { SimuladorClasesPage } from './simulador-clases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SimuladorClasesPageRoutingModule
  ],
  declarations: [SimuladorClasesPage]
})
export class SimuladorClasesPageModule {}
