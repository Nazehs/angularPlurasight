import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Isession } from '../shared/export-import';
import { VoterService } from '../shared/vote.service';
import { USerAuthService } from '../shared/user.auth.service';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css']
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: Isession[];
  @Input() filterBy: String;
  @Input() sortBy: any;
  @Input() eventId: number;
  visibleSessions: Isession[] = [];

  constructor(private voteService: VoterService, public auth: USerAuthService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log(this.filterBy)
    if (this.sessions) {
      this.filterSession(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc)
    }

  }

  filterSession(filter) {
    if (this.filterBy === 'all') {
      this.visibleSessions = [...this.sessions];
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        console.log(session.level)
        return session.level.toLocaleLowerCase() == filter
      });
    }
  }

  userHasVoted = (session: Isession) => {
    return this.voteService.userHasVoted(session, this.auth.currentUser.userName)
  }

  toggleVote = (session: Isession) => {
    if (this.userHasVoted(session)) {
      this.voteService.deleteVote(this.eventId, session, this.auth.currentUser.userName)

    } else {
      this.voteService.addVote(this.eventId, session, this.auth.currentUser.userName)

    }
    if (this.sortBy === 'votes')
      this.visibleSessions.sort(sortByVotesDesc)

  }

}


const sortByNameAsc = (name1: Isession, name2: Isession) => {
  if (name1.name > name1.name) return 1
  else if (name1.name === name1.name) return 0
  else return -1
}

const sortByVotesDesc = (vote1: Isession, vote2: Isession) => {

  return vote2.voters.length - vote1.voters.length;
}
