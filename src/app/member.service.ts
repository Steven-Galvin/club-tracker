import { Injectable } from '@angular/core';
import { Member } from './member.model'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
   }

  getMemberById(memberId: string){
    return this.database.object('members/' + memberId);
  }

  getMembers() {
    return this.members;
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(localUpdatedMember) {
  var memberEntryInFirebase = this.getMemberById(localUpdatedMember.$key);
  memberEntryInFirebase.update({
    name: localUpdatedMember.name,
    bio: localUpdatedMember.bio,
    quote: localUpdatedMember.quote,
    sex: localUpdatedMember.sex,
    age: localUpdatedMember.age,
    interests: localUpdatedMember.interests,
    clubRank: localUpdatedMember.clubRank,
    favoriteGame: localUpdatedMember.favoriteGame});
}

  deleteMember(localMemberToDelete) {
    var memberEntryInFirebase = this.getMemberById(localMemberToDelete.$key);
    memberEntryInFirebase.remove();
  }
}
