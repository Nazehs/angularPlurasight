// import {VoterService} from './vote.service';
// import {of} from 'rxjs';
// import {Isession} from '../shared/export-import';

// describe('VoterService', () => {
//   let voterService: VoterService, mockHttp;

//   beforeEach(() => {
//     mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);
//     voterService = new VoterService(mockHttp);
//   });

//   describe('deleteVoter', () => {
//     it('should remove the voter from the list of voters', () => {
//       var session = {id: 6, voters: ['joe', 'john']};
//       mockHttp.delete.and.returnValue(of(false));
//       session.voters.push('Nazeh');
//       voterService.deleteVote(1, <Isession>session, 'joe');

//       console.log(session.voters.length);
//       // expect(session.voters.length).toBe(1);
//       // expect(session.voters[0]).toBe("john");
//     });

//     it('should call http.delete with the right URL', () => {
//       const session = {id: 6, voters: ['joe', 'john']};
//       mockHttp.delete.and.returnValue(of(false));

//       voterService.deleteVote(3, <Isession>session, 'joe');

//       expect(mockHttp.delete).toHaveBeenCalledWith(
//         '/api/events/3/sessions/6/voters/joe'
//       );
//     });
//   });

//   describe('addVoter', () => {
//     it('should call http.post with the right URL', () => {
//       var session = {id: 6, voters: ['john']};
//       mockHttp.post.and.returnValue(of(false));

//       voterService.addVote(3, <Isession>session, 'joe');

//       expect(mockHttp.post).toHaveBeenCalledWith(
//         '/api/events/3/sessions/6/voters/joe',
//         {},
//         jasmine.any(Object)
//       );
//     });
//   });
// });
