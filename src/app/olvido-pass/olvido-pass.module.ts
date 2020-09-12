import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlvidoPassPageRoutingModule } from './olvido-pass-routing.module';

import { OlvidoPassPage } from './olvido-pass.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlvidoPassPageRoutingModule
  ],
  declarations: [OlvidoPassPage]
})
export class OlvidoPassPageModule {}
