import { Component, OnInit, ViewChild } from '@angular/core'; 
import { MatTableDataSource } from '@angular/material/table'; 
import { MatPaginator } from "@angular/material/paginator"; 
import { UserLdap } from "../../model/user-ldap";
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { UsersService } from '../../service/users.service';

@Component({ 
  selector: 'app-ldap-list', 
  templateUrl: './ldap-list.component.html', 
  styleUrls: ['./ldap-list.component.scss'] 
}) 
export class LdapListComponent implements OnInit { 

  addUser() {
    this.router.navigate(['/users/add']).then( (e) => {
      if (! e) {
        console.log('Navigation has failed!');
      }   
    });
  }

  displayedColumns: string[] = ['nomComplet', 'mail', 'employeNumero']; 
  dataSource = new MatTableDataSource<UserLdap>([]); 
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator; 

  unactiveSelected = false
  
  constructor(
    private usersService: UsersService,
    private router : Router
    ) { } 
  
  ngOnInit(): void {
    this.dataSource.paginator = this.paginator; 
    this.getUsers();
  }
  
  filterPredicate(data, filter): boolean {
    return  !filter || data.nomComplet.toLowerCase().startsWith(filter);
  }
  
  applyFilter($event: KeyboardEvent) {
    const filterValue = ($event.target as HTMLInputElement).value; 
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getUsers(): void {
    this.usersService.getUsers().subscribe( users => {
      if (this.unactiveSelected) {
        this.dataSource.data = users.filter( user => user.active === false);
      } 
      else {
        this.dataSource.data = users
      }
    });
  } 

  unactiveChanged($event: MatSlideToggleChange) {
    this.unactiveSelected = $event.checked; 
    this.getUsers();
  }

  edit(id: number) {
    this.router.navigate(['/users', id]).then( (e) => {
      if (! e) {
        console.log('Navigation has failed!');    
      }  
    });
  }
}