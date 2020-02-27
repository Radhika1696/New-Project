import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstantMixexListPage } from './instant-mixex-list.page';

const routes: Routes = [
  {
    path: '',
    component: InstantMixexListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstantMixexListPageRoutingModule {}
