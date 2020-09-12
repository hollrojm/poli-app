import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubirVideosPage } from './subir-videos.page';

const routes: Routes = [
  {
    path: '',
    component: SubirVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubirVideosPageRoutingModule {}
