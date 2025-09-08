import { Category } from '../types';

export const categories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    description: 'Latest gadgets and electronic devices',
    image: 'https://placehold.co/400x300?text=Modern+electronics+and+gadgets+display+showcase',
    productCount: 45,
    subcategories: [
      {
        id: 'smartphones',
        name: 'Smartphones',
        description: 'Latest mobile phones and accessories',
        categoryId: 'electronics'
      },
      {
        id: 'laptops',
        name: 'Laptops',
        description: 'Portable computers for work and gaming',
        categoryId: 'electronics'
      },
      {
        id: 'headphones',
        name: 'Headphones',
        description: 'Audio devices and accessories',
        categoryId: 'electronics'
      },
      {
        id: 'smartwatches',
        name: 'Smart Watches',
        description: 'Wearable technology and fitness trackers',
        categoryId: 'electronics'
      }
    ]
  },
  {
    id: 'clothing',
    name: 'Fashion',
    description: 'Trendy clothing and accessories',
    image: 'https://placehold.co/400x300?text=Fashion+clothing+and+accessories+collection+display',
    productCount: 78,
    subcategories: [
      {
        id: 'mens-clothing',
        name: "Men's Clothing",
        description: 'Stylish apparel for men',
        categoryId: 'clothing'
      },
      {
        id: 'womens-clothing',
        name: "Women's Clothing",
        description: 'Fashionable clothing for women',
        categoryId: 'clothing'
      },
      {
        id: 'shoes',
        name: 'Shoes',
        description: 'Footwear for all occasions',
        categoryId: 'clothing'
      },
      {
        id: 'accessories',
        name: 'Accessories',
        description: 'Bags, jewelry, and fashion accessories',
        categoryId: 'clothing'
      }
    ]
  },
  {
    id: 'home',
    name: 'Home & Living',
    description: 'Furniture and home decoration items',
    image: 'https://placehold.co/400x300?text=Modern+home+furniture+and+decor+collection',
    productCount: 62,
    subcategories: [
      {
        id: 'furniture',
        name: 'Furniture',
        description: 'Tables, chairs, and storage solutions',
        categoryId: 'home'
      },
      {
        id: 'decor',
        name: 'Home Decor',
        description: 'Decorative items and artwork',
        categoryId: 'home'
      },
      {
        id: 'kitchen',
        name: 'Kitchen',
        description: 'Cooking tools and kitchen appliances',
        categoryId: 'home'
      },
      {
        id: 'lighting',
        name: 'Lighting',
        description: 'Lamps and lighting fixtures',
        categoryId: 'home'
      }
    ]
  },
  {
    id: 'sports',
    name: 'Sports & Fitness',
    description: 'Equipment for active lifestyle',
    image: 'https://placehold.co/400x300?text=Sports+and+fitness+equipment+collection+display',
    productCount: 34,
    subcategories: [
      {
        id: 'fitness',
        name: 'Fitness Equipment',
        description: 'Home gym and exercise equipment',
        categoryId: 'sports'
      },
      {
        id: 'outdoor',
        name: 'Outdoor Sports',
        description: 'Equipment for outdoor activities',
        categoryId: 'sports'
      },
      {
        id: 'athletic-wear',
        name: 'Athletic Wear',
        description: 'Sports clothing and footwear',
        categoryId: 'sports'
      }
    ]
  }
];

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id);
};

export const getSubcategoryById = (categoryId: string, subcategoryId: string) => {
  const category = getCategoryById(categoryId);
  return category?.subcategories.find(sub => sub.id === subcategoryId);
};