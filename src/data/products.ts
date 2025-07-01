export interface Product {
  id: string
  name: string
  category: string
  description: string
  features: string[]
  applications: string[]
  image: string
  specifications?: Record<string, string>
}

export const productCategories = [
  {
    id: 'cotton-yarns',
    name: 'Cotton Yarns',
    description: 'Premium quality cotton yarns for various textile applications',
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'synthetic-yarns',
    name: 'Synthetic Yarns',
    description: 'High-performance synthetic yarns including polyester, nylon, and blends',
    image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'paper-textiles',
    name: 'Paper-Based Textiles',
    description: 'Innovative eco-friendly paper-based textile solutions',
    image: 'https://images.pexels.com/photos/6474468/pexels-photo-6474468.jpeg?auto=compress&cs=tinysrgb&w=800'
  },
  {
    id: 'specialty-fibers',
    name: 'Specialty Fibers',
    description: 'Unique and specialized fibers for technical applications',
    image: 'https://images.pexels.com/photos/5691661/pexels-photo-5691661.jpeg?auto=compress&cs=tinysrgb&w=800'
  }
]

export const products: Product[] = [
  {
    id: 'cotton-combed-yarn',
    name: 'Combed Cotton Yarn',
    category: 'cotton-yarns',
    description: 'Premium combed cotton yarn with superior strength and smoothness',
    features: ['High tensile strength', 'Excellent dye absorption', 'Minimal hairiness', 'Consistent quality'],
    applications: ['High-end apparel', 'Home textiles', 'Technical textiles'],
    image: 'https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Count Range': 'Ne 10/1 to Ne 80/1',
      'Twist': 'Z & S Twist',
      'Strength': 'High',
      'Evenness': 'CV% < 12'
    }
  },
  {
    id: 'polyester-yarn',
    name: 'Polyester Filament Yarn',
    category: 'synthetic-yarns',
    description: 'High-quality polyester filament yarn for diverse applications',
    features: ['Excellent durability', 'Color fastness', 'Wrinkle resistance', 'Quick drying'],
    applications: ['Sportswear', 'Industrial textiles', 'Home furnishing'],
    image: 'https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Denier': '75D to 300D',
      'Filaments': '36F to 144F',
      'Tenacity': '4.5-5.5 g/d',
      'Elongation': '25-35%'
    }
  },
  {
    id: 'paper-yarn',
    name: 'Eco Paper Yarn',
    category: 'paper-textiles',
    description: 'Sustainable paper-based yarn for eco-friendly textile production',
    features: ['100% biodegradable', 'Lightweight', 'Natural texture', 'Sustainable'],
    applications: ['Fashion accessories', 'Home decor', 'Packaging textiles'],
    image: 'https://images.pexels.com/photos/6474468/pexels-photo-6474468.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Material': 'Recycled paper pulp',
      'Weight': '50-200 gsm',
      'Biodegradability': '100%',
      'Tensile Strength': 'Medium'
    }
  },
  {
    id: 'aramid-fiber',
    name: 'Aramid Technical Fiber',
    category: 'specialty-fibers',
    description: 'High-performance aramid fiber for technical applications',
    features: ['Heat resistance', 'Chemical resistance', 'High strength-to-weight ratio', 'Cut resistance'],
    applications: ['Protective clothing', 'Automotive', 'Aerospace', 'Industrial'],
    image: 'https://images.pexels.com/photos/5691661/pexels-photo-5691661.jpeg?auto=compress&cs=tinysrgb&w=800',
    specifications: {
      'Tensile Strength': '3.0-3.5 GPa',
      'Temperature Resistance': 'Up to 400°C',
      'Density': '1.44 g/cm³',
      'Elongation': '3.5-4.0%'
    }
  }
]