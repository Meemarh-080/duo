import { Link } from 'react-router-dom'
import { formatNaira } from '../utils/currency'
import { openWhatsAppOrder } from '../utils/whatsapp'

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`} className="product-image"><img src={product.image} alt={`${product.name} perfume`} /></Link>
      <div className="product-info">
        <p className="eyebrow">{product.profile}</p>
        <Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link>
        <p className="notes"><span>Top</span> {product.top.join(', ')}</p>
        <p className="notes"><span>Heart</span> {product.heart.join(', ')}</p>
        <p className="notes"><span>Base</span> {product.base.join(', ')}</p>
        <div className="card-bottom"><strong>{formatNaira(product.price)}</strong><button onClick={() => openWhatsAppOrder(product.name, formatNaira(product.price))}>Add to Bag</button></div>
      </div>
    </article>
  )
}
