import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { formatNaira } from '../utils/currency'
import { products } from '../data/products'
import { openWhatsAppOrder } from '../utils/whatsapp'

export default function ProductDetail({ onAdd }) {
  const { id } = useParams()
  const product = products.find(item => item.id === id) || products[0]
  const [size, setSize] = useState('100ml')
  const price = size === '50ml'
    ? Math.max(45000, Math.round(product.price * 0.55 / 1000) * 1000)
    : product.price

  return (
    <main className="page product-page">
      <div className="breadcrumbs"><Link to="/fragrances">Fragrances</Link><span>/</span>{product.name}</div>
      <div className="detail-layout">
        <div className="detail-image"><p>THE {product.profile.toUpperCase()}</p><img src={product.image} alt={`${product.name} perfume`} /></div>
        <div className="detail-copy">
          <p className="eyebrow">HAPSAT DUO LONDON</p><h1>{product.name}</h1><p className="detail-intro">{product.intro}</p>
          <div className="detail-price">{formatNaira(price)} <span>Taxes included</span></div>
          <div className="size-select"><p>Select size</p>{['50ml', '100ml'].map(option => <button key={option} className={size === option ? 'active' : ''} onClick={() => setSize(option)}>{option}</button>)}</div>
          <button className="gold-button wide" onClick={() => openWhatsAppOrder(`${product.name} (${size})`, formatNaira(price))}>Add to Bag — {formatNaira(price)}</button>
          <div className="note-breakdown"><div><span>TOP NOTES</span><p>{product.top.join(', ')}</p></div><div><span>HEART NOTES</span><p>{product.heart.join(', ')}</p></div><div><span>BASE NOTES</span><p>{product.base.join(', ')}</p></div></div>
          <p className="shipping">Complimentary delivery & two samples with every order.</p>
        </div>
      </div>
    </main>
  )
}
