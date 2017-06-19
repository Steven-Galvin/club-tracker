import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MembersComponent } from './members/members.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { AdminComponent }   from './admin/admin.component';
import { AuthComponent }   from './auth/auth.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }, {
    path: 'about',
    component: AboutComponent
  }, {
    path: 'contact',
    component: ContactComponent
  }, {
    path: 'members',
    component: MembersComponent
  }, {
    path: 'members/:id',
    component: MemberDetailsComponent
  },   {
    path: 'admin',
    component: AuthComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
