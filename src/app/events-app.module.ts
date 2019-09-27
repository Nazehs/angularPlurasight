import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Error404Component, SessionListComponent, CollapsableSessionWellComponent, EventAppComponent, CreateEventComponent, EventListComponent, EventDetailsComponent, EventThumbnailComponent, NavbarComponent } from './shared/export-import'
import { USerAuthService } from './shared/user.auth.service';
import { CreateSessionComponent } from './create-session/create-session.component';



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
    SessionListComponent,
    CollapsableSessionWellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    USerAuthService,
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