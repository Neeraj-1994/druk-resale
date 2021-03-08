export class ProductPost {
  basic_details: BasicDetails;
  descriptive_info: DescriptiveInfo;
  financials: Financials;
  visual_description: VisualDescription;
  owner_details: OwnerDetails;
  feature_type: FeatureType;
  misc_data: MiscData;

  constructor() {
    this.basic_details = undefined;
    this.descriptive_info = undefined;
    this.financials = undefined;
    this.visual_description = undefined;
    this.owner_details = undefined;
    this.feature_type = undefined;
    this.misc_data = undefined;
  }
}

export class BasicDetails {
  name: string;
  category: string;
  sub_category: string;
  item_category: string;

  constructor() {
    this.name = undefined;
    this.category = undefined;
    this.sub_category = undefined;
    this.item_category = undefined;
  }
}

export class DescriptiveInfo {
  description: string;
  tags: string[];

  constructor() {
    this.description = undefined;
    this.tags = [undefined];
  }
}

export class Financials {
  price: number;
  price_type: string;
  want_min_price?: boolean;
  min_price?: number;
  condition: string;

  constructor() {
    this.price = undefined;
    this.price_type = undefined;
    this.want_min_price = undefined;
    this.min_price = undefined;
    this.condition = undefined;
  }
}

export class VisualDescription {
  product_images?: File[];

  constructor() {
    this.product_images = [undefined];
  }
}

export class Category {
  name: string;
  id: string;
  label: string;
  selected: boolean;
  sub_category?: SubCategory[];

  constructor() {
    this.name = undefined;
    this.id = undefined;
    this.label = undefined;
    this.sub_category = [undefined];
  }
}

export class SubCategory {
  name: string;
  id: string;
  label: string;
  selected: boolean;
  item_category?: ItemCategory[];

  constructor() {
    this.name = undefined;
    this.id = undefined;
    this.label = undefined;
    this.item_category = [undefined];
  }
}

export class ItemCategory {
  name: string;
  id: string;
  label: string;
  selected: boolean;

  constructor() {
    this.name = undefined;
    this.id = undefined;
    this.label = undefined;
  }
}

export class OwnerDetails {
  contact_name: string;
  email: string;
  show_phone_number: boolean;
  phone: string;
  location: string;

  constructor() {
    this.contact_name = undefined;
    this.email = undefined;
    this.show_phone_number = false;
    this.phone = undefined;
    this.location = undefined;
  }
}

export class FeatureType {
  name: string;
  multiplier: number;
  clicks: number;
  actual_clicks: number;
  total_clicks: number;
  checked: boolean;

  constructor() {
    this.name = undefined;
    this.multiplier = undefined;
    this.clicks = 0;
    this.actual_clicks = 0;
    this.total_clicks = 0;
    this.checked = false;
  }
}

export class MiscData {
  reposting?: boolean;

  constructor() {
    this.reposting = undefined;
  }
}
