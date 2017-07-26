describe('Authentification Shallow tests:', () => { 

  beforeEach(() => {
   TestBed.configureTestingModule({
     declarations: [
       LoginAuthentificationFormComponent
     ],
     imports: [FormsModule, ReactiveFormsModule]
     providers: []
    });
  });

  it('Should test submit values:', () => {
    let fixture = TestBed.createComponent(LoginFormComponent);
    let component: LoginAuthentificationFormComponent = fixture.componentInstance;
    let element = fixture.nativeElement;

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
