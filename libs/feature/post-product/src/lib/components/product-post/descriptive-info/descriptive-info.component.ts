import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'pp-descriptive-info',
  templateUrl: './descriptive-info.component.html',
  styleUrls: ['./descriptive-info.component.scss']
})
export class DescriptiveInfoComponent implements OnInit {

  @Input() descriptiveDetailsForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
  }

  get description(): FormControl {
    return this.descriptiveDetailsForm.get('description') as FormControl;
  }
}
