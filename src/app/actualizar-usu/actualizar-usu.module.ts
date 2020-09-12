import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarUsuPageRoutingModule } from './actualizar-usu-routing.module';

import { ActualizarUsuPage } from './actualizar-usu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarUsuPageRoutingModule
  ],
  declarations: [ActualizarUsuPage]
})
export class ActualizarUsuPageModule {}
