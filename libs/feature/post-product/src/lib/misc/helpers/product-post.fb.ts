import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { BasicDetails } from '../../models/product-post.model';
import { validateSpace } from '../validators/post.validator';

@Injectable()
export class ProductPostFormBuilder {

  constructor(private fb: FormBuilder) {
  }

  basicDetailsForm(): FormGroup {
    const form = this.fb.group({
      ...new BasicDetails()
    })

    form.get('name').setValidators([Validators.required, validateSpace]);
    form.get('category').setValidators([Validators.required])

    return form;
  }


}
