import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import QuoteModal from '../products/QuoteModal'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showProductsDropdown, setShowProductsDropdown] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Products', path: '/products', hasDropdown: true },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  const productCategories = [
    { name: 'T-Shirts', path: '/products#t-shirts' },
    { name: 'Hoodies & Sweatshirts', path: '/products#hoodies-sweatshirts' },
    { name: 'Track Pants & Shorts', path: '/products#track-pants-shorts' },
    { name: 'Golfers & Polos', path: '/products#golfers-polos' },
  ]

  const handleQuoteClick = () => {
    setIsQuoteModalOpen(true)
    setIsOpen(false)
  }

  return (
    <>
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}>
        <div className="container-max">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">S</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-lg md:text-xl font-bold text-gray-900">SAVITEX</span>
                <span className="text-xs md:text-sm text-gray-600 block">(Pty) Ltd</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setShowProductsDropdown(true)}
                      onMouseLeave={() => setShowProductsDropdown(false)}
                    >
                      <Link
                        to={item.path}
                        className={`flex items-center space-x-1 font-medium transition-colors duration-200 ${
                          location.pathname === item.path
                            ? 'text-primary-600'
                            : 'text-gray-700 hover:text-primary-600'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </Link>
                      
                      {showProductsDropdown && (
                        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2">
                          {productCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.path}
                              className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors duration-200"
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`font-medium transition-colors duration-200 ${
                        location.pathname === item.path
                          ? 'text-primary-600'
                          : 'text-gray-700 hover:text-primary-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <button 
                onClick={handleQuoteClick}
                className="btn-primary text-sm px-4 py-2"
              >
                Get Quote
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`font-medium transition-colors duration-200 ${
                      location.pathname === item.path
                        ? 'text-primary-600'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <button
                  onClick={handleQuoteClick}
                  className="btn-primary inline-block text-center text-sm py-2"
                >
                  Get Quote
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Quote Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        productName="General Inquiry"
      />
    </>
  )
}

export default Navbar