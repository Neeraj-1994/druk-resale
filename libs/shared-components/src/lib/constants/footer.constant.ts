import { LinkGroups } from '../models/footer.model';

export const footerLinks: LinkGroups[] = [
  {
    label: 'Tips & Help',
    links: [
      {
        label: 'About Druk ReSale'
      },
      {
        label: 'Help'
      },
      {
        label: 'Contact Us'
      },
      {
        label: 'Register',
        route: '/user/signup'
      }
    ]
  },
  {
    label: 'Legal',
    links: [
      {
        label: 'Terms of Use'
      },
      {
        label: 'Privacy policy'
      },
      {
        label: 'Posting policy'
      },
      {
        label: 'Cookie policy'
      }
    ]
  },
  {
    label: 'Explore',
    links: [
      {
        label: 'Top searches'
      },
      {
        label: 'Blog'
      },
      {
        label: 'Content'
      },
      {
        label: '2nd Hand Economy'
      }
    ]
  },
  {
    label: 'Top Categories',
    links: [
      {
        label: 'Home & Furniture'
      },
      {
        label: 'Land & Real Estate'
      },
      {
        label: 'Electronics'
      },
      {
        label: 'Electrical Appliances'
      }
    ]
  }
]
