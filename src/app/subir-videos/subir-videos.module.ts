import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubirVideosPageRoutingModule } from './subir-videos-routing.module';

import { SubirVideosPage } from './subir-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubirVideosPageRoutingModule
  ],
  declarations: [SubirVideosPage]
})
export class SubirVideosPageModule {}
