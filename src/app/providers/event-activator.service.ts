import { Injectable } from "@angular/core";
// import { CanActivate } from "@angular/router/src/utils/preactivation";
import { EventServiceService } from "./event-service.service";
// import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
// import { CanActivate } from '@angular/router/src/utils/preactivation'
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })

export class EventRouteActivator implements CanActivate {
    // path: ActivatedRouteSnapshot[];
    // route: ActivatedRouteSnapshot;

    constructor(private eventService: EventServiceService, private router: Router) { }


    // CanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): <Observable> {}

    canActivate(route: ActivatedRouteSnapshot){

        const eventExist = !!this.eventService.getEvent(+route.params['eventId']);
        console.log(eventExist)

        if (!eventExist) { this.router.navigate(['404']); }
        return eventExist;   
    

    }


    // CanActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
}