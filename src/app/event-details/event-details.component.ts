import { Component, OnInit } from '@angular/core';
import { EventServiceService } from '../event-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {
  event:any;
  constructor(private eventService:EventServiceService, public route:ActivatedRoute) { }

  ngOnInit() {
//  thi
     this.event = this.eventService.getEvent(this.route.snapshot.params['eventId']);
  }

}
