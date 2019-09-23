import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  // templateUrl: './app.component.html',
  template:`<div class="">
          <app-event-list></app-event-list>
          <hr/>
      </div>`,
  styleUrls: ['./app.component.css']

})
export class EventAppComponent {
  title = 'Angular Event App!';
}
