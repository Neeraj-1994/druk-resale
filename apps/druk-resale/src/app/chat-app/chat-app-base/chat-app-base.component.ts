import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'druk-resale-chat-app-base',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./chat-app-base.component.scss']
})
export class ChatAppBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
