import { Helmet } from 'react-helmet-async'
import HeroSection from '../components/hero/HeroSection'
import AboutSection from '../components/about/AboutSection'
import ProductsSection from '../components/products/ProductsSection'

const Home = () => {
  return (
    <>
      <Helmet>
        <title>SAVITEX (Pty) Ltd - Premium Yarns & Textile Solutions</title>
        <meta name="description" content="Leading textile company specializing in import and export of premium yarns and innovative paper-based textile products for global markets." />
        <meta name="keywords" content="yarns, textiles, import, export, paper-based textiles, SAVITEX, textile solutions, cotton yarns, synthetic yarns" />
        <meta property="og:title" content="SAVITEX (Pty) Ltd - Premium Yarns & Textile Solutions" />
        <meta property="og:description" content="Leading textile company specializing in import and export of premium yarns and innovative paper-based textile products." />
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