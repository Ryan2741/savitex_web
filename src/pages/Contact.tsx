import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Globe, Users } from 'lucide-react'
import ContactForm from '../components/contact/ContactForm'

const Contact = () => {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Head Office',
      details: [
        '123 Textile Avenue',
        'Industrial District',
        'Cape Town, 8001',
        'South Africa'
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: [
        '+27 21 123 4567',
        '+27 21 123 4568 (Fax)'
      ]
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: [
        'info@savitex.co.za',
        'sales@savitex.co.za',
        'support@savitex.co.za'
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ]

  const globalOffices = [
    {
      country: 'United States',
      city: 'New York',
      address: '456 Fashion Ave, NY 10018',
      phone: '+1 (555) 123-4567',
      email: 'usa@savitex.co.za'
    },
    {
      country: 'United Kingdom',
      city: 'London',
      address: '789 Textile St, London E1 6AN',
      phone: '+44 20 7123 4567',
      email: 'uk@savitex.co.za'
    },
    {
      country: 'Germany',
      city: 'Hamburg',
      address: '321 Industrie Str, 20095 Hamburg',
      phone: '+49 40 123 4567',
      email: 'germany@savitex.co.za'
    },
    {
      country: 'India',
      city: 'Mumbai',
      address: '654 Cotton Mill Rd, Mumbai 400013',
      phone: '+91 22 1234 5678',
      email: 'india@savitex.co.za'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Contact Us - Get in Touch | SAVITEX (Pty) Ltd</title>
        <meta name="description" content="Contact SAVITEX for premium yarn and textile solutions. Get quotes, technical support, and connect with our global offices. We're here to help with your textile needs." />
        <meta name="keywords" content="contact SAVITEX, textile quotes, yarn supplier contact, global offices, textile support, get in touch" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <section className="section-padding gradient-bg">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
                Contact Us
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Let's <span className="text-gradient">Connect</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ready to discuss your textile needs? Our expert team is here to provide 
                personalized solutions and exceptional service for your business.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <ContactForm />
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Why Choose SAVITEX?</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">24h</div>
                      <div className="text-sm text-gray-600">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">50+</div>
                      <div className="text-sm text-gray-600">Countries Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">25+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">100%</div>
                      <div className="text-sm text-gray-600">Quality Assured</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Global Offices */}
        <section className="section-padding gradient-bg">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                <Globe className="w-4 h-4 mr-2" />
                Global Presence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-gradient">Worldwide Offices</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With offices across four continents, we're always close to our clients, 
                providing local support with global expertise.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {globalOffices.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg p-6 card-hover"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{office.country}</h3>
                      <p className="text-sm text-gray-600">{office.city}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex items-start space-x-2">
                      <MapPin className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{office.address}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{office.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{office.email}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section-padding bg-white">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Visit Our <span className="text-gradient">Head Office</span>
              </h2>
              <p className="text-xl text-gray-600">
                Located in the heart of Cape Town's industrial district, our headquarters 
                welcomes visitors and partners from around the world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-100 rounded-2xl h-96 flex items-center justify-center"
            >
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4" />
                <p className="text-lg font-medium">Interactive Map</p>
                <p className="text-sm">Map integration would be implemented here</p>
                <p className="text-sm mt-2">123 Textile Avenue, Industrial District, Cape Town</p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Contact