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

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginFormComponent, AuthentificationComponent],
      imports: [FormsModule, ReactiveFormsModule]
    });
    TestBed.compileComponents();
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
