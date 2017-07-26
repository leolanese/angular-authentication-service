/* tslint:disable:no-unused-variable */
import { NO_ERRORS_SCHEMA, DebugElement } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { LoginAuthentificationFormComponent } from './authentification-form-component.ts';


describe('Authentification Shallow tests:', () => { 

  beforeEach(() => {
   TestBed.configureTestingModule({
     // components will be compile, go deep!
     declarations: [ 
       LoginAuthentificationFormComponent
     ],
     schemas: [ NO_ERRORS_SCHEMA ],
     imports: [FormsModule, ReactiveFormsModule],
     // the component class moves to the "declarations property" instead of "providers"
     providers: []
    });
  });

  it('Should test submit values:', () => {
    let fixture = TestBed.createComponent(LoginFormComponent);
    let component: LoginAuthentificationFormComponent = fixture.componentInstance;
    let element = fixture.nativeElement;

    // we have to call the detectChanges method after every change
    fixture.detectChanges();

    element.querySelector('#login-email').value = expectedEmail;
    element.querySelector('#login-email').dispatchEvent(new Event('input'));
    element.querySelector('#login-password').value = expectedPassword;
    element.querySelector('#login-password').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    component.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    element.querySelector('button[type="submit"]').click();
  });
  
});
