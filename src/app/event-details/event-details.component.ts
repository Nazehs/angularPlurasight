import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../providers/event-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import { eventsModel } from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: eventsModel;
  isAddSessionMode: boolean = false;
  filterBy: string = 'all';
  sortBy: string = 'votes';
  constructor(private eventService: EventServiceService, public route: ActivatedRoute) { }

  ngOnInit() {
    // subscribe to the chances in the routes to navigate to the same event
    this.route.data.forEach((data) => {
      this.event = data['event']
      this.isAddSessionMode = false;
      // this.eventService.getEvent(+params['eventId']).subscribe((event: eventsModel) => {
      //   this.event = event;
      //   // console.log(this.event)
      // });

    })
    //  this will load the clicked event
    // this.event = this.eventService.getEvent(this.route.snapshot.params['eventId']);
  }
  addSessionMode() {
    this.isAddSessionMode = true;
  }

  saveNewSession(newSession) {
    let nextId = Math.max.apply(null, this.event.sessions.map(session => session.id));
    newSession.id = nextId + 1;
    console.log(nextId);
    this.event.sessions.push(newSession);
    this.eventService.saveEvent(this.event).subscribe();

    this.isAddSessionMode = false;
  }

  cancelNewsesisonBtn() {
    this.isAddSessionMode = false;
  }
}
