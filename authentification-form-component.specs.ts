import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, inject, async } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('Authentification Test:', () => {
  let subject: LoginFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginFormComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
  });

  beforeEach(inject([LoginFormComponent], (loginForm: LoginFormComponent) => {
    subject = loginForm;
  }));

  it('Should contain login data value on submit:', () => {
    subject.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    subject.onSubmit({ email: expectedEmail, password: expectedPassword });
  });
});
