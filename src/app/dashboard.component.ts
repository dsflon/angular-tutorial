import { Component , OnInit } from '@angular/core';

import { Member } from './member';
import { MemberService } from './member.service';

@Component({
    selector: 'my-dashboard',
    // template: `
    //     <h3>ダッシュボード</h3>
    // `
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    members: Member[];

    constructor(private memberService: MemberService) {}

    ngOnInit(): void {
        this.memberService.getMembers()
        .then( members => this.members = members.slice(1, 5) );
    }

}
