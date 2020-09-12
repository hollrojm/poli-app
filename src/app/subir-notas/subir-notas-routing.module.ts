import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirNotasPage } from './subir-notas.page';

const routes: Routes = [
  {
    path: '',
    component: SubirNotasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirNotasPageRoutingModule {}
