import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventAppComponent } from './events-app.component';
import { EventDetailsComponent } from './event-details/event-details.component';
import { EventListComponent } from './event-list/event-list.component';

const routes: Routes = [
  {path:'events', component:EventListComponent},
  {path:'events/:eventId', component:EventDetailsComponent},
  {path:'', pathMatch:'full', redirectTo:'/events'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
