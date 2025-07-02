import { Link } from 'react-router-dom'
import { ArrowRight, Zap, Leaf, Shield, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import { productCategories } from '../../data/products'

const ProductsSection = () => {
  const highlights = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'High Performance',
      description: 'Superior strength and durability'
    },
    {
      icon: <Leaf className="w-6 h-6" />,
      title: 'Eco-Friendly',
      description: 'Sustainable and biodegradable options'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Quality Assured',
      description: 'ISO certified manufacturing'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Industry Leading',
      description: 'Trusted by global brands'
    }
  ]

  return (
    <section className="section-padding gradient-bg">
      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Premium <span className="text-gradient">Textile Solutions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of high-quality yarns and innovative textile products, 
            designed to meet the diverse needs of global markets.
          </p>
        </motion.div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold text-lg">{category.name}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                <Link
                  to={`/products#${category.id}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose SAVITEX Products?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence ensures that every product meets the highest 
              standards of quality, performance, and sustainability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mx-auto mb-4">
                  {highlight.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products" className="btn-primary">
              View All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection