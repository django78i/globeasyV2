import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requests-list',
  templateUrl: './requests-list.page.html',
  styleUrls: ['./requests-list.page.scss'],
})
export class RequestsListPage implements OnInit {

  constructor(public navCtl: NavController) { }

  ngOnInit() {
  }

  navigate() {
    this.navCtl.navigateForward('tabs/tab3/request-respons');
  }

}
