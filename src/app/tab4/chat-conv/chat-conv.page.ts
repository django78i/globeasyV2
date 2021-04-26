import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-conv',
  templateUrl: './chat-conv.page.html',
  styleUrls: ['./chat-conv.page.scss'],
})
export class ChatConvPage implements OnInit {

  constructor(public navCtl: NavController) { }

  ngOnInit() {
  }
  navigateBack() {
    this.navCtl.back();
  }

}
