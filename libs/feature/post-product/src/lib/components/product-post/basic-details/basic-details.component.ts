import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostBaseComponent } from '../../post-base/post-base.component';
import { PostFacadeService } from '../../../services/post-facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'dr-basic-details',
  templateUrl: './basic-details.component.html',
  styleUrls: ['./basic-details.component.scss']
})
export class BasicDetailsComponent extends PostBaseComponent implements OnInit {


  @Input() basicDetailsForm: FormGroup;

  constructor(public postFacadeService: PostFacadeService, public route: Router) {
    super(postFacadeService, route);
  }

  ngOnInit(): void {
  }
}
