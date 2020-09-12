import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarUsuPage } from './actualizar-usu.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarUsuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarUsuPageRoutingModule {}
