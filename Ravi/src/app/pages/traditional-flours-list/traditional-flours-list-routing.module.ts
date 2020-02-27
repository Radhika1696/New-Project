import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraditionalFloursListPage } from './traditional-flours-list.page';

const routes: Routes = [
  {
    path: '',
    component: TraditionalFloursListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraditionalFloursListPageRoutingModule {}
