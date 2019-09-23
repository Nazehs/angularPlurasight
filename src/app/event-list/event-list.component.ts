import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'event-list',
  template: `<h1> Upcoming Angular Events</h1>
  <div class="row">
      <div class="col-md-5" *ngFor="let event of events"  (click)="onSuccess(event.name)">
        <event-thumbnail #thumbnail [event]="event" (eventBtn)=handleEmitter($event)></event-thumbnail>
      </div>
</div>`,
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:any;

  constructor(public eventService:EventServiceService, public toastrService: ToastrService) { }

  ngOnInit() {
    // console.log(this.eventService.getEvents());
    
    this.events = this.eventService.getEvents();
  }


  handleEmitter(eventsEmiiter){
    console.log(eventsEmiiter);
    
  }
  onSuccess(eventName, title?:string){
    this.toastrService.success(eventName);
    console.log('hi....')
  }

}
