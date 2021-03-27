import { FirstLevelCategory } from '../models/edit-ads.model';
import { PriceType } from '../models/post-ads.model';

export const itemCategories: FirstLevelCategory[] = [
  {
    value: 'electronics',
    label: 'Electronics',
    sub_category: [
      {
        label: 'Mobile',
        value: 'mobile',
        item_category: [
          {
            label: 'Android Phones',
            value: 'android_phones'
          },
          {
            label: 'Iphones',
            value: 'iphones'
          },
          {
            label: 'Other Phones',
            value: 'other_phones'
          }
        ]
      },
      {
        label: 'Mobile Accessories',
        value: 'mobile_accessories',
        item_category: [
          {
            label: 'Charger',
            value: 'charger'
          },
          {
            label: 'Mobile Covers',
            value: 'mobile_covers'
          },
          {
            label: 'Headphones, Earphones & more',
            value: 'earphones_headphones_more'
          },
          {
            label: 'Speakers',
            value: 'speakers'
          }
        ]
      },
      {
        label: 'Tablets, iPad',
        value: 'tablets, iPad'
      },
      {
        label: 'Video Games & Consoles',
        value: 'video_games_consoles'
      },
      {
        label: 'Laptops',
        value: 'laptops',
        item_category: [
          {
            label: 'Macbook',
            value: 'macbook'
          },
          {
            label: 'Hp Laptops',
            value: 'hp_laptops'
          },
          {
            label: 'Dell Laptops',
            value: 'dell_laptops'
          },
          {
            label: 'Lenovo Laptops',
            value: 'lenovo_laptops'
          },
          {
            label: 'Gaming Laptops',
            value: 'gaming_laptops'
          },
          {
            label: 'Other Laptops',
            value: 'other_laptops'
          }
        ]
      }
    ]
  },
  {
    value: 'electrical_appliances',
    label: 'Electrical Appliances',
    sub_category: [
      {
        label: 'Television',
        value: 'television'
      },
      {
        label: 'Washing Machine',
        value: 'washing_machine'
      },
      {
        label: 'Refrigerator',
        value: 'refrigerator'
      },
      {
        label: 'Air Conditioner',
        value: 'air_conditioner'
      },
      {
        label: 'Vacuum Cleaner',
        value: 'vacuum_cleaner'
      },
      {
        label: 'Other Machines',
        value: 'other_machines'
      }
    ]
  },
  {
    value: 'furniture',
    label: 'Furniture',
    sub_category: [
      {
        label: 'Sofa',
        value: 'sofa'
      },
      {
        label: 'Bed',
        value: 'bed'
      },
      {
        label: 'Wardrobe',
        value: 'wardrobe'
      },
      {
        label: 'Dining Table',
        value: 'dining_table'
      },
      {
        label: 'Shelf',
        value: 'shelf'
      }
    ]
  },
  {
    label: 'Fashion',
    value: 'fashion',
    sub_category: [
      {
        label: 'Mens Fashion',
        value: 'mens_fashion'
      },
      {
        label: 'Womens Fashion',
        value: 'womens_fashion'
      },
      {
        label: 'Kids Fashion',
        value: 'kids_fashion'
      }
    ]
  },
  {
    label: 'Cars & Vehicles',
    value: 'cars_vehicles',
    sub_category: [
      {
        label: 'Light Vehicle',
        value: 'light_vehicle'
      },
      {
        label: 'Motorbikes & Scooters',
        value: 'motorbikes_scooters'
      },
      {
        label: 'Medium Vehicles',
        value: 'medium_vehicles'
      },
      {
        label: 'Heavy Vehicles',
        value: 'heavy_vehicle'
      },
      {
        label: 'Construction Vehicles',
        value: 'construction_vehicles'
      }
    ]
  },
  {
    label: 'Books, Games & Music',
    value: 'books_games_music',
    sub_category: [
      {
        label: 'Books',
        value: 'books',
        item_category: [
          {
            label: 'Fiction',
            value: 'fiction'
          },
          {
            label: 'Non-fiction',
            value: 'non_fiction'
          }
        ]
      },
      {
        label: 'Games',
        value: 'games',
        item_category: [
          {
            label: 'Outdoor Games',
            value: 'outdoor_games'
          },
          {
            label: 'Indoor Games',
            value: 'indoor_games'
          }
        ]
      },
      {
        label: 'Music',
        value: 'music'
      }
    ]
  },
  {
    label: 'Antiques, Arts & Collectibles',
    value: 'antiques_arts'
  },
  {
    label: 'Home & Garden',
    value: 'home_garden'
  }
];

export const priceType: PriceType[] = [
  {
    label: 'Fixed',
    value: 'fixed'
  },
  {
    label: 'Free',
    value: 'free'
  },
  {
    label: 'Negotiable',
    value: 'negotiable'
  }
];

export const conditionType: PriceType[] = [
  {
    label: 'Used',
    value: 'used'
  },
  {
    label: 'New',
    value: 'new'
  }
];

export let featureTypes = [
  {
    name: 'DRUK FREE',
    description: {
        type: 'Your standard Druk-reSale ad'
    },
    price: 0,
    details: [
      {
        row: 'Unlimited Edits'
      },
      {
        row: 'Up to 10 photos'
      }
    ],
    value: 'free',
    background_color: '#8D918D',
    color: '#000000',
    selected: false
  },
  {
    name: 'DRUK PLUS',
    description: {
      type: 'Increase views by 2x',
      sup: '*'
    },
    price: 25,
    details: [
      {
        head: 'ALL FREE features',
        row: 'Highlighted background'
      },
      {
        row: 'Website link'
      }
    ],
    value: 'plus',
    background_color: '#a62c2b',
    color: '#000000',
    selected: false
  },
  {
    name: 'DRUK PRO',
    description: {
        type: 'Increase views by 7x',
        sup: '*'
      },
    price: 100,
    details: [
      {
        head: 'ALL PLUS features',
        row: 'Up to 20 Photos'
      },
      {
        row: 'Top Ad'
      },
      {
        row: 'Bigger image in search results'
      },
      {
        row: 'Website link'
      }
    ],
    value: 'pro',
    background_color: '#228b22',
    color: '#000000',
    selected: false
  },
  {
    name: 'DRUK PREMIUM',
    description: {
        type: 'Increase views by 12x',
        sup: '*'
      },
    price: 250,
    details: [
      {
        head: 'ALL PRO features',
        row: 'Homepage Gallery'
      },
      {
        row: '3 images in search results'
      },
      {
        row: 'Website link'
      }
    ],
    value: 'premium',
    background_color: '#FFD700',
    color: '#000000',
    selected: false
  }
];
