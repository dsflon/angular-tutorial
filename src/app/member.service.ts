import { Injectable } from '@angular/core';

import { Member } from './member';
import { MEMBERS } from './mock-members';

@Injectable()

// ここで Fetchなどを行う？？
export class MemberService {
    getMembers(): Promise<Member[]> { // サーバー通信（非同期）をシミュレート
        return Promise.resolve(MEMBERS);
    }
}
