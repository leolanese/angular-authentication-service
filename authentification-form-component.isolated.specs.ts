import { LoginAuthentificationFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, inject, async } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('Authentification Test:', () => {
  let loginFormComponent: LoginAuthentificationFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginAuthentificationFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
  });

  // inject: It injects services into the test function where you can alter, spy on, and manipulate them.
  beforeEach(inject([LoginAuthentificationFormComponent], (loginForm: LoginAuthentificationFormComponent) => {
    loginFormComponent = loginForm;
  }));

  it('Should contain login data value on submit:', () => {
    loginFormComponent.submittingValues.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    loginFormComponent.onSubmit({ email: expectedEmail, password: expectedPassword });
  });
  
});
