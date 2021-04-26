import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoyageMapPageRoutingModule } from './voyage-map-routing.module';

import { VoyageMapPage } from './voyage-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoyageMapPageRoutingModule
  ],
  declarations: [VoyageMapPage]
})
export class VoyageMapPageModule {}
