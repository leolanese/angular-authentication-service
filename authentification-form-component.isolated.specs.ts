import { LoginAuthentificationFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, inject, async } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('Authentification form - Isolated Test:', () => {
  let component: LoginAuthentificationFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // keep it on providers. Components are not going to be compiled
      providers: [LoginAuthentificationFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
  });

  // inject: It injects services into the test function where you can alter, spy on, and manipulate them.
  beforeEach(inject([LoginAuthentificationFormComponent], (loginForm: LoginAuthentificationFormComponent) => {
    component = loginForm;
  }));

  it('Should contain login data value on submit:', () => {
    component.submittingValues.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    component.onSubmit({ email: expectedEmail, password: expectedPassword });
  });
  
});
