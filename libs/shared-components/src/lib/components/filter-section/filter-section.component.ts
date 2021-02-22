import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
@Component({
  selector: 'sc-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {

  value= 40;
  highValue= 60;
  options: Options = {
    floor: 0,
    ceil: 100
  };

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
