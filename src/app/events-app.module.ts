import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component, SessionListComponent, CollapsableSessionWellComponent, EventAppComponent, USerAuthService, CreateSessionComponent, CreateEventComponent, EventListComponent, EventDetailsComponent, SearchModalComponent, JQ_TOKEN, DurationPipe, EventThumbnailComponent, NavbarComponent, TriggerModalDirective } from './shared/export-import';
import { UpvoteComponent } from './upvote/upvote.component';
import { LocationValidatorDirective } from './location-validator.directive';
import { HttpClientModule } from '@angular/common/http'
import { EventResolverService } from './providers/event-resolver.service';

let jQuery = window['$'];


@NgModule({
  declarations: [
    EventAppComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    EventListComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SearchModalComponent,
    SessionListComponent,
    CollapsableSessionWellComponent,
    DurationPipe,
    TriggerModalDirective,
    UpvoteComponent,
    LocationValidatorDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    USerAuthService,
    ToastrModule,
    EventListComponent,
    EventResolverService,
    // importing the jquery using token
    { provide: JQ_TOKEN, useValue: jQuery },

    // use this function to bind  the component
    { provide: 'canDeactivateCreateEvent', useValue: checkDirtyState }
  ],
  bootstrap: [EventAppComponent]
})
export class EventAppModule { }



export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not save the event do you really want to cancel??');

  return true;
}