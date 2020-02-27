import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstantMixexListPageRoutingModule } from './instant-mixex-list-routing.module';

import { InstantMixexListPage } from './instant-mixex-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    InstantMixexListPageRoutingModule
  ],
  declarations: [InstantMixexListPage]
})
export class InstantMixexListPageModule {}
