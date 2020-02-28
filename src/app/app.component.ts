import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject('environment') private env: { production: boolean }) {
    console.log(`Application started in ${this.env.production ? 'production' : 'development'} mode`);
  }
}
