import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'druk-resale-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hiddenUrls: string[];
  constructor(public route: Router) { }

  ngOnInit(): void {
    this.hiddenUrls = ['/user/register', '/user/login', '/user/forgot-password'];
  }

}
