import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostBaseComponent } from '../../post-base/post-base.component';
import { PostFacadeService } from '../../../services/post-facade.service';
import { Router } from '@angular/router';
import { itemCategories } from '../../../constants/product-post.constant';
import { noop } from 'rxjs';

@Component({
  selector: 'pp-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent extends PostBaseComponent implements OnInit {

  categories;
  subCategories;
  itemCategories;
  openItemCategory: boolean;
  openSubCategory: boolean;
  openCategory: boolean;

  @Output() showFinancials = new EventEmitter<boolean>();
  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
    this.openCategory = false;
    this.openSubCategory = false;
    this.openItemCategory = false;
    this.form = this.fb.basicDetailsForm();
    this.categories = itemCategories;
  }

  isNameValid(): void {
    this.openCategory = this.name.valid;
    this.name.invalid ? this.name.markAsTouched() : noop();
  }

  isCategorySelected(category: string): void {
    if (category !== '') {
      this.openSubCategory = true;
      this.categories.forEach(item => {
        if (category === item.value) {
          this.subCategories = item.sub_category;
        }
      })
    } else {
      this.openSubCategory = false;
    }
  }

  isSubCategorySelected(subCategory: string): void {
    if (subCategory !== '') {
      this.openItemCategory = true;
      this.categories.forEach(category =>
        category.sub_category.forEach(item => {
          if (subCategory === item.value) {
            this.itemCategories = item.item_category;
          }
        })
      )
    } else {
      this.openItemCategory = false;
    }
  }

  isItemCategorySelected(itemCategory: string): void {
    this.showFinancials.emit(itemCategory !== '');
  }

  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }

  get category(): FormControl {
    return this.form.get('category') as FormControl;
  }

  get subCategory(): FormControl {
    return this.form.get('sub_category') as FormControl;
  }

  get itemCategory(): FormControl {
    return this.form.get('item_category') as FormControl;
  }
}
