import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../shared/validators/custom.validators';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  public form = this.fb.group({
    email: ['', [Validators.email]],
    password: ['', [CustomValidators.password]]
  });

  constructor(private fb: FormBuilder) {
  }

}
