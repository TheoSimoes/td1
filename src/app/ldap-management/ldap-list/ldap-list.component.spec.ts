import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router, RouterModule } from '@angular/router';
import { of } from 'rxjs';
import { UserLdap } from 'src/app/model/user-ldap';
import { UsersService } from 'src/app/service/users.service';

import { LdapListComponent } from './ldap-list.component';

class FakeUsersService {
  getUsers(){

  }
}

class FakeRouter {

}

describe('LdapListComponent', () => {
  let component: LdapListComponent;
  let fixture: ComponentFixture<LdapListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdapListComponent ],
      providers: [
        {provide: UsersService, useClass: FakeUsersService},
        {provide: Router, useClass: FakeRouter},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdapListComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should retrieve users, and if unactive selected, display inactive user', () => {
    const users = [
      {id: 8, nom: "kr"},
      {id: 24, nom: "iuwfehb"},
      {id: 78, nom: "iewubf"},
      {id: 787, nom: "dfrgh", active: false},
      {id: 12, nom: "ytrjk", active: false},
    ] as UserLdap[];
    const userService = TestBed.inject(UsersService);
    const spy = spyOn(userService, "getUsers").and.returnValue(of(users))
    
    component.getUsers();
    
    expect(spy).toHaveBeenCalled();
    expect(component.dataSource.data).toEqual(users);

    component.unactiveSelected = true;

    component.getUsers();
    
    expect(spy).toHaveBeenCalledTimes(2);
    expect(component.dataSource.data).toEqual([users[3], users[4]]);
  });
});
