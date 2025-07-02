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
        <title>SAVITEX (Pty) Ltd - Premium Yarns & Textile Solutions</title>
        <meta name="description" content="Leading textile company specializing in import and export of premium yarns and innovative textile products including paper-based textiles." />
        <meta name="keywords" content="yarns, textiles, import, export, paper-based textiles, SAVITEX, textile solutions" />
        <meta property="og:title" content="SAVITEX (Pty) Ltd - Premium Yarns & Textile Solutions" />
        <meta property="og:description" content="Leading textile company specializing in import and export of premium yarns and innovative textile products." />
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