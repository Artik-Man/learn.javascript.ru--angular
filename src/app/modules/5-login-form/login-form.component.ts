import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent {

  public title = 'Login form';
  public tab: 'sign-up' | 'log-in' = 'sign-up';

  constructor(
    private titleService: Title
  ) {
    this.titleService.setTitle(this.title);
  }

}
