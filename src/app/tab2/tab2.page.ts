import { NavController } from '@ionic/angular';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public navCtl: NavController) { }

  navigate() {
    this.navCtl.navigateForward('tabs/tab2/voyage-map');
  }

  navigateBack() {
    this.navCtl.navigateForward('tabs/tab2/voyage-display');
  }


}
