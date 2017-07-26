import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'login-form',
  templateUrl: './authentification-form.template.html'
})
export class LoginFormComponent {

  private loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  @Input()
  email: string;

  @Output()
  submitted = new EventEmitter();

  ngOnChanges(change) {
    if (change.email) {
      this.loginForm.controls['email'].setValue(change.email.currentValue);
    }
  }

  onSubmit({ email, password }) {
    this.submitted.emit({ email, password });
  }
}
