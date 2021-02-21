import { Component, OnInit } from '@angular/core';
import { AuthBaseComponent } from '../auth-base/auth-base.component';
import { AuthFacadeService } from '../../services/auth-facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthBaseComponent implements OnInit {

  constructor(public authFacadeService: AuthFacadeService, public route: Router) {
    super(authFacadeService, route);
  }

  ngOnInit(): void {
  }

}
