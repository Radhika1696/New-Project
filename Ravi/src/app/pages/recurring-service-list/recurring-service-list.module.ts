import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RecurringServiceListPage } from './recurring-service-list.page';

const routes: Routes = [
  {
    path: '',
    component: RecurringServiceListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecurringServiceListPage]
})
export class RecurringServiceListPageModule {}
