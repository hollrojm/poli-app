import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisVideosPage } from './mis-videos.page';

const routes: Routes = [
  {
    path: '',
    component: MisVideosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisVideosPageRoutingModule {}
