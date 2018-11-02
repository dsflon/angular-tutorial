import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { MemberService } from './member.service';
import { Member } from './member';

@Component({
    selector: 'member-detail', // <member-detail [member]="selectedMember"></member-detail>
    templateUrl: './member-detail.component.html'
})

export class MemberDetailComponent implements OnInit {
    @Input() member: Member;

    constructor(
        private memberService: MemberService,
        private route: ActivatedRoute, // urlのパラメータなどを取得できるサービス
        private location: Location,
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((param: ParamMap) => {
                // param.get('id') は :idの部分が取得できる
                return this.memberService.getMember( +param.get('id') );
            })
            .subscribe( member => this.member ); // subscribe
    }

    goBack(): void {
        this.location.back();
    }
}
