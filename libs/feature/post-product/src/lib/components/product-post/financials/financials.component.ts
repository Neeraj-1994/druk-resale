import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PriceType } from '../../../models/post-ads.model';
import { conditionType, priceType } from '../../../constants/product-post.constant';
import { PostBaseComponent } from '../../post-base/post-base.component';
import { PostFacadeService } from '../../../services/post-facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dr-financials',
  templateUrl: './financials.component.html',
  styleUrls: ['./financials.component.scss']
})
export class FinancialsComponent extends PostBaseComponent implements OnInit {

  typesOfPrice: PriceType[];
  conditionOfProduct: PriceType[];
  @Input() financialDetailsForm: FormGroup;
  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
    this.typesOfPrice = priceType;
    this.conditionOfProduct = conditionType;
  }

  isMinPriceRequired(): void {
    this.minPrice.setValidators(this.wantMinPrice.value ? [Validators.required] : null);
  }

  get price(): FormControl {
    return this.financialDetailsForm.get('price') as FormControl;
  }

  get priceType(): FormControl {
    return this.financialDetailsForm.get('price_type') as FormControl;
  }

  get wantMinPrice(): FormControl {
    return this.financialDetailsForm.get('want_min_price') as FormControl;
  }

  get minPrice(): FormControl {
    return this.financialDetailsForm.get('min_price') as FormControl;
  }

  get condition(): FormControl {
    return this.financialDetailsForm.get('condition') as FormControl;
  }
}
