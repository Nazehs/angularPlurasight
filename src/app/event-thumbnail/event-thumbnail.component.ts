import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';

@Component({
  selector: 'event-thumbnail',
  template: `<div class=" thumbnail hoverwell well">
  <div class="">
        <button class="btn btn-primary" (click)="handleClick()">Click Me</button>
  </div>
  <h2>{{event?.name}}</h2>
  <div class=""> Date: 
  {{event?.date}}
  </div>
  <div class="" [ngClass]="getStartTimes()" [ngSwitch]="event?.time"> Time: 
  {{event?.time}}
  <span *ngSwitchCase="'8:00 am'">(Early start)</span>
  <span *ngSwitchDefault>(Normal start)</span>
  <span *ngSwitchCase="'10:00 am'">(Late start)</span>
  </div>
  <div class=""> Price: \$
  {{event?.price}}
  </div>
  <div class=""> 
    <span>{{event?.location?.address}}</span>, 
    &nbsp;
    <span class="padding-left"n>{{event?.location?.city}}</span>,
    <span>{{event?.location?.country}}</span>

  </div>
  </div>`,
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {
  @Input() event: any

  @Output() eventBtn = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  handleClick() {
    this.eventBtn.emit('Hi Mr. Nazeh!');
    console.log('Hi, Nazeh! :)');


  }

  getStartTimes(){
    const isStartTime = this.event && this.event.time =='8:00 am';
     return {bold:isStartTime, color:isStartTime};
  }
}
