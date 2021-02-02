import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'druk-resale-ad-post-base',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./ad-post-base.component.scss']
})
export class AdPostBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
