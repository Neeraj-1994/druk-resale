import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dr-sort-section',
  templateUrl: './sort-section.component.html',
  styleUrls: ['./sort-section.component.scss']
})

export class SortSectionComponent implements OnInit {

  @Output() changeView = new EventEmitter<string>();
  toggle = true;

  constructor() {
  }
  sort = [
    {option: 'Most Relivant'},
    {option: 'Most Relivant'},
    {option: 'Most Relivant'}
  ];

  view(viewType: string): void {
    this.changeView.emit(viewType);
  }

  ngOnInit(): void {
  }
}
