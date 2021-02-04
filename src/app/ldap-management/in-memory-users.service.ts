import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { LDAP_USERS } from '../model/ldap-mock-data';
import { UserLdap } from '../model/user-ldap';

@Injectable({
  providedIn: 'root'
})
export class InMemoryUsersService  implements InMemoryDbService {
  
  createDb() {
    const users: UserLdap[] = LDAP_USERS;   
    return {users};
  } 

  genId(users: UserLdap[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 4; 
  }
}