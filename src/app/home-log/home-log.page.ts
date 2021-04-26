import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-log',
  templateUrl: './home-log.page.html',
  styleUrls: ['./home-log.page.scss'],
})
export class HomeLogPage implements OnInit {

  constructor(private uService: UserServiceService) { }

  ngOnInit() {
  }

  login() {
    this.uService.logUserWithGoogle();
  }

}
