import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';

@Component({
  selector: 'app-event-list',
  template: `<div class="">
  <app-navbar></app-navbar>
      <h1> Upcoming Angular Events</h1>
      <div class="row">
          <div class="col-md-5" *ngFor="let event of events">
            <event-thumbnail #thumbnail [event]="event" (eventBtn)=handleEmitter($event)></event-thumbnail>
          </div>
      </div>
  </div>`,
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events:any;

  constructor(public eventService:EventServiceService) { }

  ngOnInit() {
    console.log(this.eventService.getEvents());
    
    this.events = this.eventService.getEvents();
  }


  handleEmitter(eventsEmiiter){
    console.log(eventsEmiiter);
    
  }
}
