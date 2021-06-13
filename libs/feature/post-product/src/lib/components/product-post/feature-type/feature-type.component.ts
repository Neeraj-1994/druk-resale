import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostFacadeService } from '../../../services/post-facade.service';
import { Router } from '@angular/router';
import { PostBaseComponent } from '../../post-base/post-base.component';
import { featureTypes } from '../../../constants/product-post.constant';

@Component({
  selector: 'dr-feature-type',
  templateUrl: './feature-type.component.html',
  styleUrls: ['./feature-type.component.scss']
})
export class FeatureTypeComponent extends PostBaseComponent implements OnInit {

  featureTypes;
  @Input() featureForm: FormGroup;
  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
    this.featureTypes = featureTypes;
  }

  selectFeature(event): void {
    event.selected = true;
  }

  get featureName(): FormControl {
    return this.featureForm.get('feature_name') as FormControl;
  }

  get reposting(): FormControl {
    return this.featureForm.get('reposting') as FormControl;
  }
}
