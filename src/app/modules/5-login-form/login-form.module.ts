import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginFormComponent } from './login-form.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UiInputComponent } from './shared/ui-input/ui-input.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginFormComponent,
    LogInComponent,
    SignUpComponent,
    UiInputComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', component: LoginFormComponent },
      { path: '**', redirectTo: '' }
    ]),
    ReactiveFormsModule
  ],
  providers: []
})
export class LoginFormModule {
  constructor() {
    console.log('5. LoginFormModule');
  }
}
