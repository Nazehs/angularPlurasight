import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EventServiceService } from './event-service.service';

@Injectable({ providedIn: 'root' })
export class EventResolverService implements Resolve<any> {

    constructor(private eventListService: EventServiceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventListService.getEvent(route.params['eventId']);
    }
}
