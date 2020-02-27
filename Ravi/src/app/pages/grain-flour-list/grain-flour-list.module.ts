import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GrainFlourListPageRoutingModule } from './grain-flour-list-routing.module';

import { GrainFlourListPage } from './grain-flour-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GrainFlourListPageRoutingModule
  ],
  declarations: [GrainFlourListPage]
})
export class GrainFlourListPageModule {}
