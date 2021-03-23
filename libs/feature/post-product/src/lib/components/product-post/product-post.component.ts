import { Component, OnInit } from '@angular/core';
import { PostBaseComponent } from '../post-base/post-base.component';
import { PostFacadeService } from '../../services/post-facade.service';
import { Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import get from 'lodash/get';
import { FirstLevelCategory, SecondLevelCategory, ThirdLevelCategory } from '../../models/edit-ads.model';
import { itemCategories, priceType, conditionType, featureTypes } from '../../constants/product-post.constant';
import { noop } from 'rxjs';
import { PriceType } from '../../models/post-ads.model';

@Component({
  selector: 'pp-product-post',
  templateUrl: './product-post.component.html',
  styleUrls: ['./product-post.component.scss']
})
export class ProductPostComponent extends PostBaseComponent implements OnInit {

  categories: FirstLevelCategory[];
  subCategories: SecondLevelCategory[];
  itemCategories: ThirdLevelCategory[];
  openItemCategory = false;
  openSubCategory = false;
  openCategory = false;
  showBasicDetails: boolean;
  showEditableContext: boolean;
  typesOfPrice: PriceType[];
  selectedCategory: string;
  selectedSubCategory: string;
  basicDetailsForm: FormGroup;
  financialDetailsForm: FormGroup;
  conditionOfProduct: PriceType[];
  descriptiveDetailsForm: FormGroup;
  visualDescriptionForm: FormGroup;
  files: File[] = [];
  ownerDetailsForm: FormGroup;
  featureForm: FormGroup;
  featureTypes;
  selectedFeature: boolean;

  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
    this.showBasicDetails = true;
    this.showEditableContext = false;
    this.form = this.fb.productPostForm();
    this.basicDetailsForm = this.fb.basicDetailsForm();
    this.financialDetailsForm = this.fb.financialDetailsForm();
    this.descriptiveDetailsForm = this.fb.descriptiveDetailsForm();
    this.visualDescriptionForm = this.fb.visualDescriptionForm();
    this.ownerDetailsForm = this.fb.ownerDetailsForm();
    this.featureForm = this.fb.featureForm();
    this.categories = itemCategories;
    this.typesOfPrice = priceType;
    this.conditionOfProduct = conditionType;
    this.featureTypes = featureTypes;
  }

  isNameValid(): void {
    this.openCategory = this.name.valid;
    this.name.invalid ? this.name.markAsTouched() : noop();
  }

  isCategorySelected(category: string): void {
    if (!!category) {
      if (category !== this.selectedCategory) {
        this.subCategory.setValue(undefined);
        this.itemCategory.setValue(undefined);
        this.openSubCategory = false;
        this.openItemCategory = false;
        this.subCategories = [];
        this.itemCategories = [];
      }
      this.categories.forEach(item => {
        if (category === item.value) {
          this.subCategories = item.sub_category;
        }
      });
    }
    this.openSubCategory = ![null, undefined].includes(this.subCategories);
    this.showBasicDetails = ![null, undefined].includes(this.subCategories);
    this.showEditableContext = !this.showBasicDetails;
    this.selectedCategory = this.category.value;
  }

  isSubCategorySelected(subCategory?: string): void {
    if (!!subCategory) {
      if (subCategory !== this.selectedSubCategory) {
        this.itemCategory.setValue(undefined);
        this.openItemCategory = false;
        this.itemCategories = [];
      }
      this.subCategories.forEach(item => {
        if (subCategory === item.value) {
          this.itemCategories = item.item_category;
        }
      });
    }
    this.openItemCategory = ![null, undefined].includes(this.itemCategories);
    this.showBasicDetails = ![null, undefined].includes(this.itemCategories);
    this.showEditableContext = !this.showBasicDetails;
    this.selectedSubCategory = subCategory;
  }

  isItemCategorySelected(itemCategory?: string): void {
    this.showBasicDetails = !itemCategory;
    this.showEditableContext = !this.showBasicDetails;
  }

  isMinPriceRequired(): void {
    this.minPrice.setValidators(this.wantMinPrice.value ? [Validators.required] : null);
  }

  onSelect(event: any): void {
    this.files.push(...event.addedFiles);
    for (let i = 0; i < this.files.length; i++) {
      this.images.controls[i].setValue(this.files[i]);
    }
  }

  onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  selectFeature(event): void {
    event.selected = true;
  }

  get name(): FormControl {
    return this.basicDetailsForm.get('name') as FormControl;
  }

  get category(): FormControl {
    return this.basicDetailsForm.get('category') as FormControl;
  }

  get subCategory(): FormControl {
    return this.basicDetailsForm.get('sub_category') as FormControl;
  }

  get itemCategory(): FormControl {
    return this.basicDetailsForm.get('item_category') as FormControl;
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

  get description(): FormControl {
    return this.descriptiveDetailsForm.get('description') as FormControl;
  }

  get images(): FormArray {
    return this.visualDescriptionForm.get('product_images') as FormArray;
  }

  get contactName(): FormControl {
    return this.ownerDetailsForm.get('contact_name') as FormControl;
  }

  get email(): FormControl {
    return this.ownerDetailsForm.get('email') as FormControl;
  }

  get phone(): FormControl {
    return this.ownerDetailsForm.get('phone') as FormControl;
  }

  get location(): FormControl {
    return this.ownerDetailsForm.get('location') as FormControl;
  }

  get showPhoneNumber(): FormControl {
    return this.ownerDetailsForm.get('show_phone_number') as FormControl;
  }

  get featureName(): FormControl {
    return this.featureForm.get('feature_name') as FormControl;
  }

  get reposting(): FormControl {
    return this.featureForm.get('reposting') as FormControl;
  }
}
