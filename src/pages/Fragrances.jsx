import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Fragrances({ onAdd }) {
  const [filter, setFilter] = useState('All')
  const filteredProducts = filter === 'All' ? products : products.filter(product => product.profile === filter)

  return (
    <main className="page shop-page">
      <header className="page-header"><p className="eyebrow">THE COLLECTION</p><h1>Exceptional Fragrances</h1><p>Each creation is an olfactory portrait, composed with rare materials and extraordinary restraint.</p></header>
      <div className="filters" aria-label="Filter fragrances">{['All', 'Floral', 'Woody', 'Oriental', 'Fresh'].map(option => <button key={option} className={filter === option ? 'active' : ''} onClick={() => setFilter(option)}>{option}</button>)}</div>
      <div className="product-grid">{filteredProducts.map(product => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}</div>
    </main>
  )
}
