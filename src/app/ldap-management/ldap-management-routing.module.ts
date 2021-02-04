import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../security/auth.guard';
import { LdapAddComponent } from './ldap-add/ldap-add.component';
import { LdapEditComponent } from './ldap-edit/ldap-edit.component';
import { LdapListComponent } from './ldap-list/ldap-list.component';
import { LdapComponent } from './ldap/ldap.component';

const routes: Routes = [
  { 
    path: 'users', 
    component: LdapComponent, 
    canActivate: [AuthGuard], 
    children: [
      { 
        path: '', 
        children: [
          { path: 'list', component: LdapListComponent }, 
          { path: 'add', component: LdapAddComponent }, 
          { path: ':id', component: LdapEditComponent }, 
          { path: '', redirectTo: '/users/list', pathMatch: 'full'},
        ] 
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LdapManagementRoutingModule { }