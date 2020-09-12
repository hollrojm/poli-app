import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgresoEstPage } from './progreso-est.page';

const routes: Routes = [
  {
    path: '',
    component: ProgresoEstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgresoEstPageRoutingModule {}
