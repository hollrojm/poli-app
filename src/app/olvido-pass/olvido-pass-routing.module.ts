import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlvidoPassPage } from './olvido-pass.page';

const routes: Routes = [
  {
    path: '',
    component: OlvidoPassPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlvidoPassPageRoutingModule {}
