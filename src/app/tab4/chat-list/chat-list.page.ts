import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.page.html',
  styleUrls: ['./chat-list.page.scss'],
})
export class ChatListPage implements OnInit {

  constructor(public navCtl: NavController) { }

  ngOnInit() {
  }

  navigate() {
    this.navCtl.navigateForward('chat-conv');
  }

}
