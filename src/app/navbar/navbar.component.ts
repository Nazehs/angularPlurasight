import { Component, OnInit } from '@angular/core';
import { USerAuthService } from '../shared/user.auth.service';
import { EventServiceService } from '../providers/event-service.service';
import { Isession, eventsModel } from '../shared/event.model';
import { ActivatedRoute } from '@angular/router';
// import { EventListComponent } from '../shared/export-import';
// import { EventL } from '../event-list/event-list.component'
// import { EventServiceService, Isession } from '../shared/export-import';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchTerm: string = '';
  foundSessions: Isession[];
  events: any = [];
  constructor(public auth: USerAuthService, public routes: ActivatedRoute, private eventService: EventServiceService, private eventSession: EventServiceService) { }

  ngOnInit() {
    // console.log(this.auth)
    this.eventService.getEventList()
    console.log(this.eventService.getEventList());
  }

  searchSessions(searchTerm) {
    // console.log(searchTerm)
    this.eventSession.searchSessions(searchTerm).subscribe((sessions) => {
      this.foundSessions = sessions;
    });
  }

}
