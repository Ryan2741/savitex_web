export interface Product {
  id: string
  name: string
  category: string
  description: string
  features: string[]
  applications: string[]
  image: string
  specifications?: Record<string, string>
  colors?: string[]
  sizes?: string[]
}

export const productCategories = [
  {
    id: 't-shirts',
    name: 'T-Shirts',
    description: 'Premium quality round neck and V-neck T-shirts in various colors and sizes',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'hoodies-sweatshirts',
    name: 'Hoodies & Sweatshirts',
    description: 'Comfortable hoodies with or without zippers and premium sweatshirts',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'track-pants-shorts',
    name: 'Track Pants & Shorts',
    description: 'Athletic wear including track pants and comfortable shorts for all activities',
    image: 'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'golfers-polos',
    name: 'Golfers & Polos',
    description: 'Professional golfer shirts and polo shirts for corporate and casual wear',
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

export const products: Product[] = [
  {
    id: 'round-neck-tshirt',
    name: 'Round Neck T-Shirt',
    category: 't-shirts',
    description: 'Premium quality 100% cotton round neck T-shirts available in multiple colors',
    features: ['100% Cotton fabric', 'Pre-shrunk material', 'Reinforced seams', 'Colorfast dyes'],
    applications: ['Casual wear', 'Corporate branding', 'Promotional merchandise', 'Retail'],
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Fabric Weight': '160-180 GSM',
      'Material': '100% Cotton',
      'Sizes Available': 'XS to 5XL',
      'Colors': '20+ Standard Colors'
    },
    colors: ['White', 'Black', 'Navy', 'Red', 'Royal Blue', 'Grey'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL', '5XL']
  },
  {
    id: 'v-neck-tshirt',
    name: 'V-Neck T-Shirt',
    category: 't-shirts',
    description: 'Stylish V-neck T-shirts perfect for casual and semi-formal occasions',
    features: ['Comfortable V-neck design', 'Soft cotton blend', 'Durable construction', 'Easy care'],
    applications: ['Fashion retail', 'Corporate wear', 'Casual occasions', 'Layering'],
    image: 'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Fabric Weight': '160-180 GSM',
      'Material': 'Cotton Blend',
      'Sizes Available': 'XS to 4XL',
      'Neckline': 'V-Neck'
    },
    colors: ['White', 'Black', 'Grey', 'Navy', 'Maroon'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL', '4XL']
  },
  {
    id: 'zip-hoodie',
    name: 'Zip-Up Hoodie',
    category: 'hoodies-sweatshirts',
    description: 'Premium zip-up hoodies with adjustable hood and front pockets',
    features: ['Full zip closure', 'Adjustable drawstring hood', 'Kangaroo pocket', 'Ribbed cuffs'],
    applications: ['Sportswear', 'Casual wear', 'Corporate merchandise', 'Winter clothing'],
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Fabric Weight': '280-320 GSM',
      'Material': 'Cotton-Polyester Blend',
      'Closure': 'Full Zip',
      'Features': 'Hood with drawstring'
    },
    colors: ['Black', 'Grey', 'Navy', 'Red', 'Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
  },
  {
    id: 'pullover-hoodie',
    name: 'Pullover Hoodie',
    category: 'hoodies-sweatshirts',
    description: 'Classic pullover hoodies without zip, perfect for casual comfort',
    features: ['Pullover design', 'Soft fleece lining', 'Front kangaroo pocket', 'Durable construction'],
    applications: ['Casual wear', 'Sports teams', 'University merchandise', 'Street fashion'],
    image: 'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Fabric Weight': '280-320 GSM',
      'Material': 'Cotton-Polyester Blend',
      'Style': 'Pullover',
      'Lining': 'Soft Fleece'
    },
    colors: ['Black', 'Grey', 'White', 'Navy', 'Burgundy'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
  },
  {
    id: 'track-pants',
    name: 'Track Pants',
    category: 'track-pants-shorts',
    description: 'Comfortable track pants with elastic waistband and side stripes',
    features: ['Elastic waistband', 'Side stripe design', 'Tapered fit', 'Moisture-wicking'],
    applications: ['Athletic wear', 'Gym clothing', 'Casual wear', 'Team uniforms'],
    image: 'https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Fabric Weight': '220-250 GSM',
      'Material': 'Polyester Blend',
      'Waistband': 'Elastic with drawstring',
      'Fit': 'Tapered'
    },
    colors: ['Black', 'Navy', 'Grey', 'Red', 'Blue'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
  },
  {
    id: 'athletic-shorts',
    name: 'Athletic Shorts',
    category: 'track-pants-shorts',
    description: 'Lightweight athletic shorts perfect for sports and casual wear',
    features: ['Lightweight fabric', 'Elastic waistband', 'Side pockets', 'Quick-dry material'],
    applications: ['Sports activities', 'Gym wear', 'Summer clothing', 'Beach wear'],
    image: 'https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Fabric Weight': '140-160 GSM',
      'Material': 'Polyester',
      'Length': '7-9 inches',
      'Features': 'Quick-dry technology'
    },
    colors: ['Black', 'Navy', 'Grey', 'Red', 'White'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: 'golf-shirt',
    name: 'Golf Shirt',
    category: 'golfers-polos',
    description: 'Professional golf shirts with collar and button placket',
    features: ['Collar design', '3-button placket', 'Moisture-wicking', 'UV protection'],
    applications: ['Golf courses', 'Corporate wear', 'Casual business', 'Sports clubs'],
    image: 'https://images.pexels.com/photos/8532618/pexels-photo-8532618.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Fabric Weight': '180-200 GSM',
      'Material': 'Cotton-Polyester Blend',
      'Collar': 'Ribbed collar',
      'Placket': '3-button'
    },
    colors: ['White', 'Navy', 'Black', 'Red', 'Royal Blue'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
  },
  {
    id: 'polo-shirt',
    name: 'Polo Shirt',
    category: 'golfers-polos',
    description: 'Classic polo shirts suitable for both casual and business casual wear',
    features: ['Classic polo design', 'Ribbed collar and cuffs', 'Side vents', 'Preshrunk fabric'],
    applications: ['Business casual', 'Retail uniforms', 'Corporate events', 'Casual wear'],
    image: 'https://images.pexels.com/photos/8532619/pexels-photo-8532619.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Fabric Weight': '180-200 GSM',
      'Material': '100% Cotton Pique',
      'Collar': 'Ribbed polo collar',
      'Hem': 'Side vents'
    },
    colors: ['White', 'Black', 'Navy', 'Grey', 'Green'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL', '3XL']
  }
]