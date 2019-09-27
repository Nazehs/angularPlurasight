import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventServiceService } from '../providers/event-service.service';
// import { EventServiceService } from '../shared/export-import';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  isDirty: boolean = true;
  newEvent;
  constructor(private router: Router, private eventService: EventServiceService) { }

  ngOnInit() {
  }

  saveEvent(formValues) {
    console.log(formValues);
    this.eventService.saveEvent(formValues);
    this.isDirty = false;
    this.router.navigate(['/events'])

  }
  cancelEvent() {
    this.router.navigate(['/events']);
  }
}
