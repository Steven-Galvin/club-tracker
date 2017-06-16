import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { EditMemberComponent } from './edit-member/edit-member.component';
import { AdminComponent } from './admin/admin.component';
import { SortByRankPipe } from './sort-by-rank.pipe';
import { routing } from './app.routing';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AboutComponent,
    ContactComponent,
    MembersComponent,
    MemberDetailsComponent,
    EditMemberComponent,
    AdminComponent,
    SortByRankPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
