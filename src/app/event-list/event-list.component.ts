import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../providers/event-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { eventsModel } from '../shared/event.model';

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

  events:eventsModel[];

  constructor(public eventService:EventServiceService, public routes:ActivatedRoute, public toastrService: ToastrService) { }

  ngOnInit() {
    // console.log(this.eventService.getEvents());
    
    //  this.eventService.getEvents().subscribe((events)=>{
    //   this.events = events;
    //  })

    this.events = this.routes.snapshot.data['events'];
  }


  handleEmitter(eventsEmiiter){
    console.log(eventsEmiiter);
    
  }
  onSuccess(eventName, title?:string){
    this.toastrService.success(eventName);
    console.log('hi....')
  }

}
