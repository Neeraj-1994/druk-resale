import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'druk-resale-auth-base',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./auth-base.component.scss']
})
export class AuthBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
