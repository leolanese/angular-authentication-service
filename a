import { LoginFormComponent } from './login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, inject, async } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('Isolated', () => {
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

  it('should send credentials on submit', () => {
    subject.submitted.subscribe(({ email, password }) => {
      expect(email).toEqual(expectedEmail);
      expect(password).toEqual(expectedPassword);
    });

    subject.onSubmit({ email: expectedEmail, password: expectedPassword });
  });
});
