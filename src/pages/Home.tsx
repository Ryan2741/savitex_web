import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/hero/HeroSection'
import AboutSection from '../components/about/AboutSection'
import ProductsSection from '../components/products/ProductsSection'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SAVITEX (Pty) Ltd - Premium Knitted Garments Manufacturer & Wholesale</title>
        <meta name="description" content="India-based manufacturers of premium knitted garments with integrated production. Wholesale T-shirts, hoodies, track pants, and golfers across South Africa." />
        <meta name="keywords" content="knitted garments manufacturer, T-shirts wholesale, hoodies, track pants, golfers, South Africa wholesale, integrated manufacturing, Durban" />
        <meta property="og:title" content="SAVITEX (Pty) Ltd - Premium Knitted Garments Manufacturer" />
        <meta property="og:description" content="India-based manufacturers of premium knitted garments with integrated production and wholesale operations in South Africa." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/" />
      </Helmet>
      
      <div className="pt-20">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
      </div>
    </>
  )
}

export default Home