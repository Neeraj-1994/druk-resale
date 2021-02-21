import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { AuthFormBuilder } from '../../misc/helpers/auth.fb';
import { AuthFacadeService } from '../../services/auth-facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-auth-base',
  template: ``,
})
export class AuthBaseComponent {

  form: FormGroup;
  fb: AuthFormBuilder;
  constructor(public authFacadeService: AuthFacadeService, public route: Router) {
    this.fb = new AuthFormBuilder(new FormBuilder());
  }

  getErrorMessage(control: FormControl): string {
    return control.hasError('required') ? 'This field is required' :
      (control.hasError('validateSpace') ? 'No spaces at the beginning or at the end' :
        (control.hasError('invalidPhone') ? 'Invalid phone number' :
          (control.hasError('email') ? 'Invalid Email' :
            (control.hasError('misMatch') ? 'Passwords do not match' :''))));
  }

  routeRedirection(routeLink: string): void {
    this.route.navigate([routeLink]).then();
  }
}
