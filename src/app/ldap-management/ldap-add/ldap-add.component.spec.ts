import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { LdapAddComponent } from './ldap-add.component';

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

describe('LdapAddComponent', () => {
  let component: LdapAddComponent;
  let fixture: ComponentFixture<LdapAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LdapAddComponent ],
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
    fixture = TestBed.createComponent(LdapAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
