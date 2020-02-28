import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  public form = this.fb.group({
    email: [''],
    password: ['']
  });

  constructor(private fb: FormBuilder) {
  }

}
