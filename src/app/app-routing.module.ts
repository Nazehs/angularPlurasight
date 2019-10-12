import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {
  Error404Component,
  CreateSessionComponent,
  CreateEventComponent,
  EventListComponent,
  EventDetailsComponent,
  EventListResolverService,
  EventRouteActivator,
} from './shared/export-import';
import {LoginComponent} from './profile/login.component';
import {EventResolverService} from './providers/event-resolver.service';

const routes: Routes = [
  {
    path: 'events/new',
    component: CreateEventComponent,
    canDeactivate: ['canDeactivateCreateEvent'],
  },
  {path: '404', component: Error404Component},
  {
    path: 'events',
    component: EventListComponent,
    resolve: {events: EventListResolverService},
  },
  {
    path: 'events/:eventId',
    component: EventDetailsComponent,
    resolve: {event: EventResolverService},
  },
  {path: 'events/session/new', component: CreateSessionComponent},
  {path: '', pathMatch: 'full', redirectTo: '/events'},
  // { path: '*', component: Error404Component },
  {path: 'user', loadChildren: './profile/profile.module#ProfileModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
