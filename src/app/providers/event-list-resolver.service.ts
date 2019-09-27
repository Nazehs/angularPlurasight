import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { EventServiceService } from './event-service.service';
import { map } from 'rxjs/operators';

@Injectable({providedIn:'root'})
export class EventListResolverService implements Resolve<any> {

    constructor(private eventListService:EventServiceService) { }

    resolve(){
        return this.eventListService.getEvents().pipe(map((events)=> events))
    }
}