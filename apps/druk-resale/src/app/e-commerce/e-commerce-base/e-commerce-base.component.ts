import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'druk-resale-e-commerce-base',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./e-commerce-base.component.scss']
})
export class ECommerceBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
