import { Component, OnInit } from '@angular/core';
import { PostBaseComponent } from '../post-base/post-base.component';
import { PostFacadeService } from '../../services/post-facade.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup} from '@angular/forms';
import get from 'lodash/get';
import { FirstLevelCategory, SecondLevelCategory, ThirdLevelCategory } from '../../models/edit-ads.model';
import { itemCategories } from '../../constants/product-post.constant';
import { noop } from 'rxjs';

@Component({
  selector: 'dr-product-post',
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
  selectedCategory: string;
  selectedSubCategory: string;
  showBasicDetails = true;
  showEditableContext = false;
  showProductName = true;
  basicDetailsForm: FormGroup;
  financialDetailsForm: FormGroup;
  descriptiveDetailsForm: FormGroup;
  visualDescriptionForm: FormGroup;
  ownerDetailsForm: FormGroup;
  featureForm: FormGroup;

  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
    this.form = this.fb.productPostForm();
    this.basicDetailsForm = this.fb.basicDetailsForm();
    this.financialDetailsForm = this.fb.financialDetailsForm();
    this.descriptiveDetailsForm = this.fb.descriptiveDetailsForm();
    this.visualDescriptionForm = this.fb.visualDescriptionForm();
    this.ownerDetailsForm = this.fb.ownerDetailsForm();
    this.featureForm = this.fb.featureForm();
    this.categories = itemCategories;
  }

  showBasicDetailsInfo(event: boolean): void {
    this.showBasicDetails = event;
  }

  showEditableContent(event: boolean): void {
    this.showEditableContext = event;
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
    this.showProductName = this.showBasicDetails;
    this.showEditableContext = !this.showBasicDetails;
    this.selectedCategory = this.category.value;
    this.openCategory = !category;
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
    this.showProductName = this.showBasicDetails;
    this.showEditableContext = !this.showBasicDetails;
    this.selectedSubCategory = subCategory;
    this.openSubCategory = !subCategory;
  }

  isItemCategorySelected(itemCategory?: string): void {
    this.showBasicDetails = !itemCategory;
    this.showEditableContext = !this.showBasicDetails;
    this.openItemCategory = !itemCategory;
    this.showProductName = this.showBasicDetails;
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
}
