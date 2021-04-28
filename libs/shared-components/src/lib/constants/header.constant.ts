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
    label: 'Land & Real Estate',
    value: '/product/list'
  },
  {
    label: 'Cars & Vehicles',
    value: '/product/list'
  },
  {
    label: 'Electrical Appliances',
    value: '/product/list'
  },
  {
    label: 'Electronics',
    value: '/product/list'
  },
  {
    label: 'Home & Furniture',
    value: '/product/list'
  },
  {
    label: 'Books, Music & Games',
    value: '/product/list'
  },
  {
    label: 'More',
    value: '/product/list'
  }
];

export const authHiddenRoutes: string[] = ['/user/login', '/user/register', '/user/forgot-password'];

export const postHiddenRoutes: string[] = ['/post/ads'];
