import { Component, Input, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'dr-filter-section',
  templateUrl: './filter-section.component.html',
  styleUrls: ['./filter-section.component.scss']
})
export class FilterSectionComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  checked = false;
  @Input()
  expanded: true;
  filteredBrands = [
    { brandName: 'Adidas Original' },
    { brandName: 'Mango Sport' },
    { brandName: 'Puma' }
  ];
  options = [
    { name: 'option1' },
    { name: 'option2' },
    { name: 'option13' }
  ];

  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our item
    if ((value || '').trim()) {
      this.options.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(fruit): void {
    const index = this.options.indexOf(fruit);

    if (index >= 0) {
      this.options.splice(index, 1);
    }
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
