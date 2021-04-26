import { NavController } from '@ionic/angular';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements AfterViewInit {

  @ViewChild('dat') dat: ElementRef;

  constructor(public router: Router, public elmRef: ElementRef) {
  }

  ngAfterViewInit() {
    this.dat.nativeElement.setAttribute('fill', 'blue');
  }



}
