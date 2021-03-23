export interface ProductList {
  id?: string;
  name: string;
  category: string;
  sub_category?: string;
  item_category?: string;
  price: number;
  pricing_option: string;
  want_minimum_price?: boolean;
  minimum_price?: number;
  condition: string;
  description?: string;
  images?: File[];
}
