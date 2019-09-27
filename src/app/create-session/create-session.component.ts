import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Isession } from '../shared/export-import';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { restrictedWord } from '../shared/custom.validators';

@Component({
  selector: 'create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.css']
})
export class CreateSessionComponent implements OnInit {

  @Output() saveNewSession = new EventEmitter();

  @Output() cancelNewSessionBtn = new EventEmitter();

  newSessionForm: FormGroup;
  public eventName: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  abstract;
  constructor() { }

  ngOnInit() {
    this.eventName = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restrictedWord(['foo', 'fuck', 'bar'])]);
    this.duration = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);

    this.newSessionForm = new FormGroup({
      eventName: this.eventName,
      level: this.level,
      duration: this.duration,
      abstract: this.abstract,
      presenter: this.presenter

    })
  }

  saveSession(sessionValues) {
    const formValues = sessionValues.value;

    // console.log(sessionValues.presenter.value);
    const { eventName, presenter, duration, level, abstract } = formValues;

    let session: Isession = {
      id: undefined,
      name: eventName,
      presenter: presenter,
      duration: duration,
      level: level,
      abstract: abstract,
      voters: []

    }

    this.saveNewSession.emit(session);
    console.log(session);

  }


  cancelNewSession() {

    this.cancelNewSessionBtn.emit();

  }

  // having a custom error validator 
  // private restrictedWord(words) {
  //   return (control: FormControl): { [key: string]: any } => {
  //     if (!words) return null;
  //     let invalidWords = words.map((word) => {
  //       control.value.includes(word) ? word : null;

  //     }).filter(word => word != null);

  //     return invalidWords && invalidWords.length > 0 ? { 'restrictedWords': invalidWords.join(', ') } : null;

  //   }
  // }
}
