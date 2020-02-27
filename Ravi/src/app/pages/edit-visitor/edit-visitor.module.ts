import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EditVisitorPage } from './edit-visitor.page';

const routes: Routes = [
  {
    path: '',
    component: EditVisitorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EditVisitorPage]
})
export class EditVisitorPageModule {}
