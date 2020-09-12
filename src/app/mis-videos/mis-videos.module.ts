import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisVideosPageRoutingModule } from './mis-videos-routing.module';

import { MisVideosPage } from './mis-videos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisVideosPageRoutingModule
  ],
  declarations: [MisVideosPage]
})
export class MisVideosPageModule {}
