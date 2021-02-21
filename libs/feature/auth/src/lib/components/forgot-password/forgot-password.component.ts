import { Component, OnInit } from '@angular/core';
import { AuthBaseComponent } from '../auth-base/auth-base.component';
import { Router } from '@angular/router';
import { AuthFacadeService } from '../../services/auth-facade.service';

@Component({
  selector: 'auth-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent extends AuthBaseComponent implements OnInit {

  constructor(public route: Router, public authFacadeService: AuthFacadeService) {
    super(authFacadeService, route);
  }

  ngOnInit(): void {
  }

}
