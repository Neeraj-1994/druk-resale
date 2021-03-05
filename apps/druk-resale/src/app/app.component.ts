import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'druk-resale-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'druk-resale';
  authRoutes = ['/user/login', '/user/register'];

  constructor(public route: Router) {
  }
}
