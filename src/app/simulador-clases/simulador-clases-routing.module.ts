import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SimuladorClasesPage } from './simulador-clases.page';

const routes: Routes = [
  {
    path: '',
    component: SimuladorClasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SimuladorClasesPageRoutingModule {}
