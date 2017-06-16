import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service'
import { Member } from '../member.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, bio: string, quote: string, sex: string, age: number, interests: string, clubRank: string, favoriteGame: string) {
    var newMember: Member = new Member(name, bio, quote, sex, age, interests, clubRank, favoriteGame);
    this.memberService.addMember(newMember)
  }

}
