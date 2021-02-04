import { AuthLink, Category } from '../models/header.model';

export const authNav: AuthLink[] = [
  {
    label: 'Sign In',
    route: '/user/login',
    icon: ''
  },
  {
    label: 'Register',
    route: '/user/register',
    icon: ''
  }
];

export const category: Category[] = [
  {
    label: 'Land & Real Estate'
  },
  {
    label: 'Electrical Appliances'
  },
  {
    label: 'Electronics'
  },
  {
    label: 'Home & Furniture'
  },
  {
    label: 'Books, Music & Games'
  },
  {
    label: 'Clothing & Jewellery'
  }
];
