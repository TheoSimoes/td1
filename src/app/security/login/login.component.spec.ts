import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';


class FakeHttpClient {

}

class FakeActivatedRoute {

}
class FakeFormBuilder {
  group (){
    return {get: () => {}, valid: true};
  }
}

class FakeRouter {

}

class FakeMatSnackBar {

}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      providers: [
        {provide: Router, useClass: FakeRouter},
        {provide: FormBuilder, useClass: FakeFormBuilder},
        {provide: MatSnackBar, useClass: FakeMatSnackBar},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
