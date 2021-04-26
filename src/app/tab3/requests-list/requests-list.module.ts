import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestsListPageRoutingModule } from './requests-list-routing.module';

import { RequestsListPage } from './requests-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestsListPageRoutingModule
  ],
  declarations: [RequestsListPage]
})
export class RequestsListPageModule {}
