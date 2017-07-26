import { LoginAuthentificationFormComponent } from './authentification-form-component.ts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestBed, inject, async } from '@angular/core/testing';
import { Component } from '@angular/core';

describe('Integration', () => {

  @Component({
    selector: 'site',
    template: `
    <login-authentification-form [email]="email" (submitted)="onFormSubmit($event)">
    </login-authentification-form>
    `
  })
  
  class AuthentificationComponent {
    email = expectedEmail;
    storedEmail: string;
    storedPassword: string;

    onFormSubmit({ email, password }) {
      this.storedEmail = email;
      this.storedPassword = password;
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginAuthentificationFormComponent, AuthentificationComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
  }));

  it('Should send login email values on submit:', () => {
    let fixture = TestBed.createComponent(AuthentificationComponent);
    let component: AuthentificationComponent = fixture.componentInstance;
    let element = fixture.nativeElement;

    fixture.detectChanges();

    expect(element.querySelector('#login-email').value).toEqual(expectedEmail);
  });
  
  it('should send login password values on submit:', () => {
    let fixture = TestBed.createComponent(AuthentificationComponent);
    let component: AuthentificationComponent = fixture.componentInstance;
    let element = fixture.nativeElement;
    
    element.querySelector('#login-password').value = expectedPassword;
    element.querySelector('#login-password').dispatchEvent(new Event('input'));

    fixture.detectChanges();

    element.querySelector('button[type="submit"]').click();

    expect(component.storedEmail).toEqual(expectedEmail);
    expect(component.storedPassword).toEqual(expectedPassword);
  });
  
});
