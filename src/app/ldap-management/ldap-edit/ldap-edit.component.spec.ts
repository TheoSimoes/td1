import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';

import { LdapEditComponent } from './ldap-edit.component';

class FakeHttpClient {

}

class FakeActivatedRoute {

}
class FakeFormBuilder {
  group (){

  }
}

class FakeRouter {

}

class FakeMatSnackBar {

}


describe('LdapEditComponent', () => {
  let component: LdapEditComponent;
  let fixture: ComponentFixture<LdapEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdapEditComponent ],
      providers: [
        {provide: HttpClient, useClass: FakeHttpClient},
        {provide: ActivatedRoute, useClass: FakeActivatedRoute},
        {provide: Router, useClass: FakeRouter},
        {provide: FormBuilder, useClass: FakeFormBuilder},
        {provide: MatSnackBar, useClass: FakeMatSnackBar},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LdapEditComponent);
    component = fixture.componentInstance;
    spyOn(component, "getUser");
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
