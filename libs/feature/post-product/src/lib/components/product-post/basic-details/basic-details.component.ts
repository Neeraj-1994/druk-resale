import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostBaseComponent } from '../../post-base/post-base.component';
import { PostFacadeService } from '../../../services/post-facade.service';
import { Router } from '@angular/router';
import { itemCategories } from '../../../constants/product-post.constant';
import { noop } from 'rxjs';
import { FirstLevelCategory, SecondLevelCategory, ThirdLevelCategory } from '../../../models/edit-ads.model';

@Component({
  selector: 'pp-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent extends PostBaseComponent implements OnInit {

  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
  }
}
