import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LdapManagementRoutingModule } from './ldap-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppMaterialModule } from '../app-material.module';
import { AlertComponent } from '../share/alert/alert.component';
import { LdapAddComponent } from './ldap-add/ldap-add.component';
import { LdapEditComponent } from './ldap-edit/ldap-edit.component';
import { LdapListComponent } from './ldap-list/ldap-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LdapComponent } from './ldap/ldap.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryUsersService } from './in-memory-users.service';

@NgModule({
  declarations: [   
    NavbarComponent,   
    LdapComponent,   
    LdapListComponent,   
    LdapAddComponent,
    LdapEditComponent,
    AlertComponent,
  ],
  exports: [ 
    LdapComponent
  ],
  imports: [   
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    // ChartsModule,
    AppMaterialModule,
    LdapManagementRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(     
      InMemoryUsersService, { dataEncapsulation: false }   
    )
  ], providers:[
    InMemoryUsersService,
  ]
})
  export class LdapManagementModule { }