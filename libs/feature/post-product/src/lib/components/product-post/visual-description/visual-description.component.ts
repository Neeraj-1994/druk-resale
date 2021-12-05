import { Component, Input, OnInit } from '@angular/core';
import { PostBaseComponent } from '../../post-base/post-base.component';
import { PostFacadeService } from '../../../services/post-facade.service';
import { Router } from '@angular/router';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'dr-visual-description',
  templateUrl: './visual-description.component.html',
  styleUrls: ['./visual-description.component.scss']
})
export class VisualDescriptionComponent extends PostBaseComponent implements OnInit {

  @Input() visualDescriptionForm: FormGroup;
  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
  }

  files: File[] = [];

  onSelect(event: any): void {
    this.files.push(...event.addedFiles);
    for (let i = 0; i < this.files.length; i++) {
      this.images.controls[i].setValue(this.files[i]);
    }
  }

  onRemove(event: any): void {
    this.files.splice(this.files.indexOf(event), 1);
  }

  get images(): FormArray {
    return this.visualDescriptionForm.get('product_images') as FormArray;
  }
}
