import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Fragrances from './pages/Fragrances'
import Quiz from './pages/Quiz'
import ProductDetail from './pages/ProductDetail'
import './App.css'

export default function App() {
  const [cartCount, setCartCount] = useState(0)
  const addToCart = () => setCartCount(count => count + 1)

  return (
    <BrowserRouter>
      <div className="site-shell">
        <Navbar cartCount={cartCount} />
        <main className="route-main">
          <Routes>
            <Route path="/" element={<Home onAdd={addToCart} />} />
            <Route path="/fragrances" element={<Fragrances onAdd={addToCart} />} />
            <Route path="/quiz" element={<Quiz onAdd={addToCart} />} />
            <Route path="/product/:id" element={<ProductDetail onAdd={addToCart} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
