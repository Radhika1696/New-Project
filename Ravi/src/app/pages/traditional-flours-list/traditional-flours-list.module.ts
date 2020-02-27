import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraditionalFloursListPageRoutingModule } from './traditional-flours-list-routing.module';

import { TraditionalFloursListPage } from './traditional-flours-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraditionalFloursListPageRoutingModule
  ],
  declarations: [TraditionalFloursListPage]
})
export class TraditionalFloursListPageModule {}
