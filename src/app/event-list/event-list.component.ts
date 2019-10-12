import { Component, OnInit, Input } from '@angular/core';
import { EventServiceService } from '../providers/event-service.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { eventsModel } from '../shared/event.model';

@Component({
  selector: 'event-list',
  template: `<h1> Upcoming Angular Events</h1>
  <div class="row">
      <div class="col-md-5" *ngFor="let event of events">
        <event-thumbnail #thumbnail [event]="event" (click)="onSuccess(event.name)" (eventBtn)=handleEmitter($event)></event-thumbnail>
      </div>
</div>`,
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: eventsModel[];
  @Input() eventCopy: eventsModel[];

  constructor(public eventService: EventServiceService, public routes: ActivatedRoute, public toastrService: ToastrService) { }

  ngOnInit() {
    // console.log(this.eventService.getEvents());

    //  this.eventService.getEvents().subscribe((events)=>{
    //   this.events = events;
    //  })

    this.events = this.routes.snapshot.data['events'];
    this.eventCopy = [...this.events]
    console.log(this.events)
  }

  get eventList() {
    return this.events;
  }

  handleEmitter(eventsEmiiter) {
    console.log(eventsEmiiter);

  }
  onSuccess(eventName, title?: string) {
    // console.log('..........')
    this.toastrService.success(eventName);
    // console.log('hi....');
  }

}

