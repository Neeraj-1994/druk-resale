export class ProductPost {
  name: string;
  category: string;
  sub_category?: string;
  item_category?: string;
  description: string;
  tags: string[];
  price: number;
  price_type: string;
  want_min_price?: boolean;
  min_price?: number;
  condition: string;
  product_images?: File[];
  contact_name: string;
  email?: string;
  show_phone_number?: boolean;
  phone: string;
  location?: string;
  feature_name: string;
  reposting?: boolean;

  constructor() {
    this.name = undefined;
    this.category = undefined;
    this.sub_category = undefined;
    this.item_category = undefined;
    this.description = undefined;
    this.tags = [undefined];
    this.price = undefined;
    this.price_type = undefined;
    this.want_min_price = undefined;
    this.min_price = undefined;
    this.condition = undefined;
    this.contact_name = undefined;
    this.email = undefined;
    this.show_phone_number = false;
    this.phone = undefined;
    this.location = undefined;
    this.product_images = [undefined];
    this.feature_name = undefined;
    this.reposting = false;
  }
}
