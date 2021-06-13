import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirstLevelCategory, SecondLevelCategory, ThirdLevelCategory } from '../../../models/edit-ads.model';
import { FormControl, FormGroup } from '@angular/forms';
import { PostFacadeService } from '../../../services/post-facade.service';
import { Router } from '@angular/router';
import { noop } from 'rxjs';
import { itemCategories } from '../../../constants/product-post.constant';
import { PostBaseComponent } from '../../post-base/post-base.component';

@Component({
  selector: 'dr-basic-editable-details',
  templateUrl: './basic-editable-details.component.html',
  styleUrls: ['./basic-editable-details.component.scss']
})
export class BasicEditableDetailsComponent extends PostBaseComponent implements OnInit {

  categories: FirstLevelCategory[];
  subCategories: SecondLevelCategory[];
  itemCategories: ThirdLevelCategory[];
  openCategory = false;
  @Input() basicDetailsForm: FormGroup;
  @Output() showBasicDetails = new EventEmitter<boolean>();
  @Output() showEditableContext = new EventEmitter<boolean>();

  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
    this.categories = itemCategories;
    this.isCategorySelected(this.category.value);
    this.isSubCategorySelected(this.subCategory.value);
  }

  isCategorySelected(category: string): void {
    if (!!category) {
      this.categories.forEach(item => {
        if (category === item.value) {
          this.subCategories = item.sub_category;
        }
      });
    }
  }

  isSubCategorySelected(subCategory?: string): void {
    if (!!subCategory) {
      this.subCategories.forEach(item => {
        if (subCategory === item.value) {
          this.itemCategories = item.item_category;
        }
      });
    }
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
