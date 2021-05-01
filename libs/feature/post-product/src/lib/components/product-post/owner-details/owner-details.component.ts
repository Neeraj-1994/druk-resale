import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PostFacadeService } from '../../../services/post-facade.service';
import { Router } from '@angular/router';
import { PostBaseComponent } from '../../post-base/post-base.component';

@Component({
  selector: 'pp-owner-details',
  templateUrl: './owner-details.component.html',
  styleUrls: ['./owner-details.component.scss']
})
export class OwnerDetailsComponent extends PostBaseComponent implements OnInit {

  @Input() ownerDetailsForm: FormGroup;
  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
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
}
