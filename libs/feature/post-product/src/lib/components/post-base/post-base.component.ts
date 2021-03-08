import { Component } from '@angular/core';
import { PostFacadeService } from '../../services/post-facade.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductPostFormBuilder } from '../../misc/helpers/product-post.fb';

@Component({
  selector: 'pp-post-base',
  template: ``
})
export class PostBaseComponent {

  form: FormGroup;
  fb: ProductPostFormBuilder;
  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    this.fb = new ProductPostFormBuilder(new FormBuilder());
  }

  getErrorMessage(control: FormControl): string {
    return control.hasError('required') ? 'This field is required' :
      (control.hasError('validateSpace') ? 'No spaces at the beginning or at the end' :
        (control.hasError('invalidPhone') ? 'Invalid phone number' :
          (control.hasError('email') ? 'Invalid Email' :
            (control.hasError('requiredTrue') ? 'This field is required' :''))));
  }
}
