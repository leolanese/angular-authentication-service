import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, inject, async } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('Authentification Test:', () => {
  let loginFormComponent: LoginFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
  });

  // inject: It injects services into the test function where you can alter, spy on, and manipulate them.
  beforeEach(inject([LoginFormComponent], (loginForm: LoginFormComponent) => {
    loginFormComponent = loginForm;
  }));

  it('Should contain login data value on submit:', () => {
    loginFormComponent.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    loginFormComponent.onSubmit({ email: expectedEmail, password: expectedPassword });
  });
});
