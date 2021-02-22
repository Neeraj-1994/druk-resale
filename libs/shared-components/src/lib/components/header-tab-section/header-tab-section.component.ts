import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthLink, Category } from '../../models/header.model';
import { authNav, category } from '../../constants/header.constant';

@Component({
  selector: 'sc-header-tab-section',
  templateUrl: './header-tab-section.component.html',
  styleUrls: ['./header-tab-section.component.scss']
})
export class HeaderTabSectionComponent implements OnInit {

  categoryList: Category[];
  authLinks: AuthLink[];
  hiddenUrls: string[];

  constructor(public route: Router) { }

  ngOnInit(): void {
    this.categoryList = category;
    this.authLinks = authNav;
    this.hiddenUrls = ['/user/register', '/user/login', '/user/forgot-password'];
  }

  routeRedirection(link: string): void {
    this.route.navigate([link]).then();
  }

}
