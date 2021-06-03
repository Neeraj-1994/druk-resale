export interface Category {
  code?: string;
  label: string;
  value?: string;
  sub_category?: SubCategory[];
}

export interface SubCategory {
  code?: string;
  label: string;
  value?: string;
}

export interface AuthLink {
  label: string;
  route: string;
  icon: string;
}
