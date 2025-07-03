import { Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>SAVITEX (Pty) Ltd - Premium Knitted Garments Manufacturer & Wholesale</title>
        <meta name="description" content="India-based manufacturers of premium knitted garments with integrated production. Wholesale T-shirts, hoodies, track pants, and golfers across South Africa." />
        <meta name="keywords" content="knitted garments, T-shirts wholesale, hoodies manufacturer, track pants, golfers, South Africa wholesale, integrated manufacturing" />
        <meta property="og:title" content="SAVITEX (Pty) Ltd - Premium Knitted Garments Manufacturer" />
        <meta property="og:description" content="India-based manufacturers of premium knitted garments with integrated production and wholesale operations in South Africa." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  )
}

export default App