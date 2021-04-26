import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatConvPageRoutingModule } from './chat-conv-routing.module';

import { ChatConvPage } from './chat-conv.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatConvPageRoutingModule
  ],
  declarations: [ChatConvPage]
})
export class ChatConvPageModule {}
