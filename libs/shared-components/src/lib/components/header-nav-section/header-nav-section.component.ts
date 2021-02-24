import { Component, OnInit } from '@angular/core';
import { AuthLink, Category } from '../../models/header.model';
import { authHiddenRoutes, authNav, category, postHiddenRoutes } from '../../constants/header.constant';
import { Router } from '@angular/router';
import { AuthFacadeService } from '@druk-resale/feature/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserData } from '../../models/auth.model';

@Component({
  selector: 'sc-header-nav-section',
  templateUrl: './header-nav-section.component.html',
  styleUrls: ['./header-nav-section.component.scss']
})
export class HeaderNavSectionComponent implements OnInit {

  categoryList: Category[];
  authLinks: AuthLink[];
  authHiddenUrls: string[];
  postHiddenUrls: string[];
  userData = new UserData();

  constructor(public route: Router, public authFacadeService: AuthFacadeService, public fbAuth: AngularFireAuth,) {
  }

  ngOnInit(): void {
    this.categoryList = category;
    this.authLinks = authNav;
    this.authHiddenUrls = authHiddenRoutes;
    this.postHiddenUrls = postHiddenRoutes;
    this.saveAuthdata();
  }

  saveAuthdata(): void {
      this.fbAuth.authState.subscribe((user) => {
        this.userData.photoUrl = user.photoURL;
        this.userData.displayName = user.displayName;
        this.userData.email = user.email;
        this.userData.uid = user.uid;
        this.authFacadeService.updateUser(this.userData);
      });
  }

  linkRedirection(link: string): void {
    this.route.navigate([link]).then();
    console.log(this.authFacadeService.getUserState());
  }

  logout(): void {
    this.authFacadeService.removeUserState();
    this.fbAuth.signOut().then(() => {
      this.route.navigate(['/user/login']).then();
    });
  }
}
