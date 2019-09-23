import { Component, OnInit } from '@angular/core';
import { EventServiceService } from './event-service.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'events-app',
  template: `<div class="">
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
      </div>`,
  styleUrls: ['./events-app.component.css']

})
export class EventAppComponent {
  title = 'Angular Event App!';


  events:any;

  constructor(public eventService:EventServiceService, public toastrService: ToastrService) { }

  ngOnInit() {

  }


}

