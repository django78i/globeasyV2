import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VoyageDisplayPageRoutingModule } from './voyage-display-routing.module';

import { VoyageDisplayPage } from './voyage-display.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VoyageDisplayPageRoutingModule
  ],
  declarations: [VoyageDisplayPage]
})
export class VoyageDisplayPageModule {}
