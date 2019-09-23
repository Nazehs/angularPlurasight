import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    EventAppComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule.forRoot(AppRoutingModule),
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class EventAppModule { }
