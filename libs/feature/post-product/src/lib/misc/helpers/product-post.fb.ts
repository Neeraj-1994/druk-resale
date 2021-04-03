import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { phoneNumberValidator, validateSpace } from '../validators/post.validator';
import { ProductPost } from '../../models/product-post.model';

@Injectable()
export class ProductPostFormBuilder {

  constructor(private fb: FormBuilder) {
  }

  basicDetailsForm(): FormGroup {
    return this.fb.group({
      name: ['', [Validators.required, validateSpace]],
      category: ['', Validators.required],
      sub_category: [''],
      item_category: ['']
    });
  }

  financialDetailsForm(): FormGroup {
    return this.fb.group({
      price: ['', Validators.required],
      price_type: ['', Validators.required],
      want_min_price: [''],
      min_price: [''],
      condition: ['', Validators.required]
    });
  }

  descriptiveDetailsForm(): FormGroup {
    return this.fb.group({
      description: ['', [Validators.required, Validators.minLength(20)]],
      tags: ['']
    });
  }

  visualDescriptionForm(): FormGroup {
    return this.fb.group({
      product_images: this.fb.array([])
    });
  }

  ownerDetailsForm(): FormGroup {
    return this.fb.group({
      contact_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/)]],
      show_phone_number: [''],
      phone: ['', [Validators.required, phoneNumberValidator]],
      location: ['']
    });
  }

  featureForm(): FormGroup {
    return this.fb.group({
      feature_name: ['', Validators.required],
      reposting: ['']
    });
  }

  productPostForm(): FormGroup {
    const form = this.fb.group({
      ...new ProductPost()
    })

    form.get('name').setValidators([Validators.required, validateSpace]);
    form.get('category').setValidators([Validators.required]);
    form.get('description').setValidators([Validators.required]);
    form.get('price').setValidators([Validators.required]);
    form.get('price_type').setValidators([Validators.required]);
    form.get('condition').setValidators([Validators.required]);
    form.get('contact_name').setValidators([Validators.required]);
    form.get('phone').setValidators([Validators.required]);
    form.get('feature_name').setValidators([Validators.required]);

    return form;
  }
}
