import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrainFlourListPage } from './grain-flour-list.page';

const routes: Routes = [
  {
    path: '',
    component: GrainFlourListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrainFlourListPageRoutingModule {}
