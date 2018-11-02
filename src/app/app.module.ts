import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { DashboardComponent }  from './dashboard.component';
import { MemberDetailComponent }  from './member-detail.component';
import { MembersComponent }  from './members.component';
import { MemberService } from './member.service';

////

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([// routerの情報を設定
          {
              path: '', // リダイレクト設定
              redirectTo: '/dashboard',
              pathMatch: 'full' // full = 同じパスだった場合のみに有効
          },
          {
              path: 'members', // /members にアクセスしたときに
              component: MembersComponent // MembersComponentを表示する設定（さらにRouteroutletが必要）
          },
          {
              path: 'dashboard',
              component: DashboardComponent
          }
      ])
  ],
  declarations: [
      AppComponent,
      DashboardComponent,
      MemberDetailComponent,
      MembersComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ MemberService ]
})
export class AppModule { }
