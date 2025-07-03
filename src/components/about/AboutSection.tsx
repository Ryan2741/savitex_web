import { CheckCircle, Award, Globe, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Integrated Manufacturing',
      description: 'Complete production cycle from yarn spinning to finished garments under one roof.'
    },
    {
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Strategic Location',
      description: 'Based in Durban for efficient import, stock, and distribution across South Africa.'
    },
    {
      icon: <Users className="w-5 h-5 md:w-6 md:h-6" />,
      title: 'Wholesale Expertise',
      description: 'Specialized in bulk orders for retailers, corporates, and promotional companies.'
    }
  ]

  const values = [
    'High-quality knitted garment manufacturing',
    'Integrated production from yarn to finished product',
    'Reliable wholesale supply chain management',
    'Custom branding and private label services',
    'Competitive pricing for bulk orders',
    'Fast turnaround times for urgent orders'
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-3 md:px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-xs md:text-sm font-medium"
              >
                About SAVITEX
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
              >
                Leading <span className="text-gradient">Knitted Garments</span> Manufacturer
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-base md:text-lg text-gray-600 leading-relaxed"
              >
                We are India-based manufacturers of high-quality knitted garments with integrated 
                units covering the complete production cycle from yarn spinning to fabric knitting 
                and garment manufacturing. Strategically located in Durban, we wholesale premium 
                T-shirts, hoodies, track pants, and more across South Africa.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-4 md:gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 md:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{feature.title}</h3>
                    <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900">Our Capabilities</h3>
              <div className="grid grid-cols-1 gap-2 md:gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm md:text-base">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-3 md:space-y-4">
                <img
                  src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Knitted garments manufacturing facility"
                  className="rounded-lg shadow-lg w-full h-32 sm:h-40 md:h-48 object-cover card-hover"
                />
                <img
                  src="https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Premium T-shirts and garments production"
                  className="rounded-lg shadow-lg w-full h-40 sm:h-52 md:h-64 object-cover card-hover"
                />
              </div>
              <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                <img
                  src="https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Hoodies and sweatshirts manufacturing"
                  className="rounded-lg shadow-lg w-full h-40 sm:h-52 md:h-64 object-cover card-hover"
                />
                <img
                  src="https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Quality control and garment finishing"
                  className="rounded-lg shadow-lg w-full h-32 sm:h-40 md:h-48 object-cover card-hover"
                />
              </div>
            </div>
            
            {/* Stats Card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white rounded-xl shadow-xl p-4 md:p-6 max-w-xs"
            >
              <div className="text-center">
                <div className="text-xl md:text-2xl font-bold text-primary-600 mb-1">1M+</div>
                <div className="text-xs md:text-sm text-gray-600">Garments Produced Annually</div>
                <div className="text-xs text-gray-500 mt-2">Trusted by retailers across SA</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection