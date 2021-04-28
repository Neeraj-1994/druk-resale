import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sc-sort-section',
  templateUrl: './sort-section.component.html',
  styleUrls: ['./sort-section.component.scss']
})

export class SortSectionComponent implements OnInit {

  toggle = true;

  constructor() {
  }
  sort = [
    {option: 'Most Relivant'},
    {option: 'Most Relivant'},
    {option: 'Most Relivant'}
  ];

  view(): void {
    this.toggle = !this.toggle;
  }

  ngOnInit(): void {
  }
}
