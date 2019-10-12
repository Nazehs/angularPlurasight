import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { USerAuthService } from './shared/user.auth.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'events-app',
  template: `<div class="">
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
      </div>`,
  styleUrls: ['./events-app.component.css']

})
export class EventAppComponent implements OnInit {
  events: any;

  constructor(public toastrService: ToastrService, private routes: ActivatedRoute, private auth: USerAuthService) { }

  ngOnInit() {
    // alert('Hiiii')
    this.auth.checkAuthenticationStatus().subscribe()
    // console.log(this.auth.checkAuthenticationStatus())

    console.log(this.events = this.routes.snapshot.data['events']);

  }


}

