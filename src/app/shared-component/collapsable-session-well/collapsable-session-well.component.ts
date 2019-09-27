import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapsable-session-well',
  templateUrl: './collapsable-session-well.component.html',
  styleUrls: ['./collapsable-session-well.component.css']
})
export class CollapsableSessionWellComponent implements OnInit {


  @Input() title: string;
  isContentVisible = true;
  constructor() { }

  ngOnInit() {
  }
  toggleContent() {
    this.isContentVisible = !this.isContentVisible;
    console.log('ccc');


  }
}
