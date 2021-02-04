import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sc-header-tab-section',
  templateUrl: './header-tab-section.component.html',
  styleUrls: ['./header-tab-section.component.scss']
})
export class HeaderTabSectionComponent implements OnInit {

  hiddenUrls: string[];

  constructor(public route: Router) { }

  ngOnInit(): void {
    this.hiddenUrls = ['/user/register', '/user/login', '/user/forgot-password', '/post/ads'];
  }

  routeRedirection(link: string): void {
    this.route.navigate([link]).then();
  }

}
