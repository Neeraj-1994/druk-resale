import { Component, Input, OnInit } from '@angular/core';
import { ProductList } from '../../models/product-list.model';

@Component({
  selector: 'sc-product-list-card',
  templateUrl: './product-list-card.component.html',
  styleUrls: ['./product-list-card.component.scss']
})
export class ProductListCardComponent implements OnInit {
select=false;
  @Input() product: ProductList;
  @Input() index: number;
  @Input() viewType: string;
  centered = false;
  disabled = false;
  unbounded = false;

  radius: number;
  color: string;
  constructor() { }

  ngOnInit(): void {
  }

  favourite():void {
    this.select != this.select;
  }
}
