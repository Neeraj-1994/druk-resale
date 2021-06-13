import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'dr-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  @Input()
  expanded: true;
  filteredBrands=[
    {brandName:'Adidas Original'},
    {brandName:'Mango Sport'},
    {brandName:'Puma'},
  ];

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
