import React from 'react'
import { CheckCircle, Award, Globe, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Premium Quality',
      description: 'ISO certified processes ensuring the highest quality standards in every product.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Network',
      description: 'Extensive international partnerships spanning over 50 countries worldwide.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Expert Team',
      description: 'Experienced professionals with deep industry knowledge and technical expertise.'
    }
  ]

  const values = [
    'Commitment to sustainable textile solutions',
    'Innovation in paper-based textile technology',
    'Reliable supply chain management',
    'Customer-centric approach to business',
    'Continuous quality improvement',
    'Environmental responsibility'
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
              >
                About SAVITEX
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-gray-900"
              >
                Leading the Future of <span className="text-gradient">Textile Innovation</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 leading-relaxed"
              >
                Since 1995, SAVITEX (Pty) Ltd has been at the forefront of textile innovation, 
                specializing in the import and export of premium yarns and revolutionary 
                paper-based textile solutions. Our commitment to quality and sustainability 
                has made us a trusted partner for businesses worldwide.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
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
              <h3 className="text-xl font-semibold text-gray-900">Our Core Values</h3>
              <div className="grid grid-cols-1 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{value}</span>
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
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/5691659/pexels-photo-5691659.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Textile yarn manufacturing and quality control"
                  className="rounded-lg shadow-lg w-full h-48 object-cover card-hover"
                />
                <img
                  src="https://images.pexels.com/photos/6474468/pexels-photo-6474468.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sustainable paper-based textile innovation"
                  className="rounded-lg shadow-lg w-full h-64 object-cover card-hover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/5691660/pexels-photo-5691660.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Industrial textile machinery and production"
                  className="rounded-lg shadow-lg w-full h-64 object-cover card-hover"
                />
                <img
                  src="https://images.pexels.com/photos/5691661/pexels-photo-5691661.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Premium cotton and synthetic yarn products"
                  className="rounded-lg shadow-lg w-full h-48 object-cover card-hover"
                />
              </div>
            </div>
            
            {/* Stats Card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs"
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-1">25+</div>
                <div className="text-sm text-gray-600">Years of Excellence</div>
                <div className="text-xs text-gray-500 mt-2">Trusted by industry leaders worldwide</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection