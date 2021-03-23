import { Component, Input, OnInit } from '@angular/core';
import { ProductList } from '../../models/product-list.model';

@Component({
  selector: 'sc-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.scss']
})
export class ProductListCardComponent implements OnInit {

  @Input() product: ProductList;
  @Input() index: number;
  constructor() { }

  ngOnInit(): void {
  }

}
