import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../providers/event-service.service';
import { ActivatedRoute } from '@angular/router';
import { eventsModel } from '../shared/event.model';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event: eventsModel;
  isAddSessionMode: boolean = false;
  constructor(private eventService: EventServiceService, public route: ActivatedRoute) { }

  ngOnInit() {
    //  thi
    this.event = this.eventService.getEvent(this.route.snapshot.params['eventId']);
  }
  addSessionMode() {
    this.isAddSessionMode = true;
  }

  saveNewSession(newSession) {
    let nextId = Math.max.apply(null, this.event.sessions.map(session => session.id));
    newSession.id = nextId + 1;
    console.log(nextId);
    this.event.sessions.push(newSession);
    this.eventService.updateEvent(this.event);

    this.isAddSessionMode = false;
  }

  cancelNewsesisonBtn() {
    this.isAddSessionMode = false;
  }
}
