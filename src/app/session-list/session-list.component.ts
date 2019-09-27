import { Component, OnInit, Input } from '@angular/core';
import { Isession } from '../shared/event.model';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnInit {
  @Input() sessions: Isession[];

  constructor() { }

  ngOnInit() {
  }

}
