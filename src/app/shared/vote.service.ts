import { Isession } from "./event.model"
import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { catchError } from "rxjs/operators"
import { Observable } from "rxjs/internal/Observable"
import { of } from "rxjs/internal/observable/of"


@Injectable({
    providedIn: 'root'
})
export class VoterService {
    constructor(private http: HttpClient) {

    }

    addVote = (eventId: number, session: Isession, userName: string) => {
        let options = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
        this.http.post(url, {}, options).pipe(catchError(this.handleError('addSession')))
            .subscribe()


        session.voters.push(userName)
    }

    deleteVote = (eventId: number, session: Isession, userName: string) => {
        session.voters = session.voters.filter(voter => {
            voter !== userName
        });
        // update server
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
        this.http.delete(url).pipe(catchError(this.handleError('addSession')))
            .subscribe()

    }

    userHasVoted = (session: Isession, userName: string) => {
        return session.voters.some(voter => voter === userName)
    }

    private handleError<T>(operation = 'operation', results?: T) {
        return (error: any): Observable<T> => { console.log(error); return of(results as T) }
    }


}