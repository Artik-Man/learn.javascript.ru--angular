import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/validators/custom.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public form = this.fb.group({
    firstName: ['', [Validators.required, CustomValidators.name]],
    lastName: ['', [Validators.required, CustomValidators.name]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, CustomValidators.password]]
  });

  constructor(private fb: FormBuilder) {
  }

}
