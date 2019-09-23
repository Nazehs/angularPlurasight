import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { EventAppComponent } from './events-app.component';
import { EventThumbnailComponent } from './event-thumbnail/event-thumbnail.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    EventAppComponent,
    EventThumbnailComponent,
    EventListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
