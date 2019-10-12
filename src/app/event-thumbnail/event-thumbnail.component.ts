import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { eventsModel } from '../shared/event.model';

@Component({
  selector: 'event-thumbnail',
  template: `<div class=" thumbnail hoverwell well" [routerLink]="['/events', event.id]">
  <div>
  <h2>{{event?.name | uppercase}}</h2>
  <div class=""> Date: 
  {{event?.date}}
  </div>
  <div class="" [ngClass]="getStartTimes()" [ngSwitch]="event?.time"> Time: 
  {{event?.time | duration}}
  <span *ngSwitchCase="'8:00 am'">(Early start)</span>
  <span *ngSwitchDefault>(Normal start)</span>
  <span *ngSwitchCase="'10:00 am'">(Late start)</span>
  </div>
  <div class=""> Price: 
  {{event?.price | currency:'INR'}}
  </div>
  <div class=""> Location: 
    <span>{{event?.location?.address}}</span>, 
    &nbsp;
    <span class="padding-left"n>{{event?.location?.city}}</span>,
    <span>{{event?.location?.country}}</span>

  </div>
  </div>
  </div>`,
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: eventsModel

  @Output() eventBtn = new EventEmitter();

  constructor(private toastr: ToastrService) { }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  ngOnInit() {
  }


  handleClick() {
    this.eventBtn.emit('Hi Mr. Nazeh!');
    console.log('Hi, Nazeh! :)');


  }

  getStartTimes() {
    const isStartTime = this.event && this.event.time == '8:00 am';
    return { bold: isStartTime, color: isStartTime };
  }
}
