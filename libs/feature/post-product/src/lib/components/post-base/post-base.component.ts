import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostFacadeService } from '../../services/post-facade.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ProductPostFormBuilder } from '../../misc/helpers/product-post.fb';

@Component({
  selector: 'dr-post-base',
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
            (control.hasError('requiredTrue') ? 'This field is required' :
              (control.hasError('greaterError') ? 'The minimum price should be less than the actual price' :
                (control.hasError('minLength') ? 'Enter atleast 20 characters' :
                  (control.hasError('pattern') ? 'Invalid Email format' : '')))))));
  }
}
