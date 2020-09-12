import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgresoEstPageRoutingModule } from './progreso-est-routing.module';

import { ProgresoEstPage } from './progreso-est.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgresoEstPageRoutingModule
  ],
  declarations: [ProgresoEstPage]
})
export class ProgresoEstPageModule {}
