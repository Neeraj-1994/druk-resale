import { Component, OnInit } from '@angular/core';
import { PostBaseComponent } from '../post-base/post-base.component';
import { PostFacadeService } from '../../services/post-facade.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import get from 'lodash/get';

@Component({
  selector: 'pp-product-post',
  templateUrl: './product-post.component.html',
  styleUrls: ['./product-post.component.scss']
})
export class ProductPostComponent extends PostBaseComponent implements OnInit {

  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
  }
}
