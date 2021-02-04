import { Component, OnInit } from '@angular/core';
import { AuthLink, Category } from '../../models/header.model';
import { authNav, category } from '../../constants/header.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'sc-header-nav-section',
  templateUrl: './header-nav-section.component.html',
  styleUrls: ['./header-nav-section.component.scss']
})
export class HeaderNavSectionComponent implements OnInit {

  categoryList: Category[];
  authLinks: AuthLink[];
  hiddenUrls: string[];

  constructor(public route: Router) {
  }

  ngOnInit(): void {
    this.categoryList = category;
    this.authLinks = authNav;
    this.hiddenUrls = ['/user/register', '/user/login', '/user/forgot-password'];
  }

  linkRedirection(link: string): void {
    this.route.navigate([link]).then();
  }
}
