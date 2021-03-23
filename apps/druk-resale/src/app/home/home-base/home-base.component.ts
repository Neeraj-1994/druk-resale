import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'druk-resale-home-base',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./home-base.component.scss']
})
export class HomeBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
