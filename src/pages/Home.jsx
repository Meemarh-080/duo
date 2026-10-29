import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

export default function Home({ onAdd }) {
  return (
    <>
      <section className="hero-section">
        <div className="hero-glow" />
        <div className="hero-copy">
          <p className="eyebrow">THE SIGNATURE COLLECTION</p>
          <h1>Introducing our masterpiece:<br /><em>HAPSAT DUO PARFUM</em></h1>
          <p className="hero-sub">Timeless Elegance in Every Drop.</p>
          <p className="established">EST. 2026</p>
          <Link className="gold-button" to="/fragrances">Discover the Collection <span>→</span></Link>
        </div>
        <div className="hero-bottle">
          <img src={new URL('../assets/p2.jpg', import.meta.url).href} alt="Hapsat Duo perfume presented with its gift bag" />
        </div>
      </section>
      <section className="collection-section">
        <div className="section-heading"><div><p className="eyebrow">CURATED FOR YOU</p><h2>The Collection</h2></div><Link to="/fragrances">View all fragrances →</Link></div>
        <div className="product-grid featured-grid">{products.map(product => <ProductCard key={product.id} product={product} onAdd={onAdd} />)}</div>
      </section>

      <section className="finder-section">
        <p className="eyebrow">SCENT FINDER QUIZ</p>
        <h2>Discover the scent that defines you</h2>
        <p>Answer a few questions and find your match in moments.</p>
        <div className="finder-options">
          <button aria-label="Feminine"><span>✦</span><small>Feminine</small></button>
          <button aria-label="Masculine"><span>◆</span><small>Masculine</small></button>
          <button aria-label="Unisex"><span>♔</span><small>Unisex</small></button>
          <button aria-label="Surprise me"><span>♛</span><small>Surprise me</small></button>
        </div>
        <Link className="gold-button finder-button" to="/quiz">Find your perfect scent</Link>
      </section>

      <section className="gift-section-layout">
        <h2>THE GIFTING COLLECTION</h2>
        <p className="gift-intro">Presented in signature midnight-blue packaging, finished by hand with golden details.</p>
        <div className="gift-showcase">
          <button className="gift-featured" onClick={() => onAdd(products[0])}>
            <img src={new URL('../assets/p2.jpg', import.meta.url).href} alt="Hapsat Duo signature perfume gift set with presentation bag" />
            <span className="gift-name">DUO SIGNATURE SET</span><strong>₦290,000</strong>
          </button>
          <div className="gift-side-grid">
            <button className="gift-small" onClick={() => onAdd(products[3])}>
              <img src={new URL('../assets/p12.jpg', import.meta.url).href} alt="Hapsat Duo discovery perfume gift box and bag" />
              <span className="gift-name">DISCOVERY DUO</span><strong>₦290,000</strong>
            </button>
            <button className="gift-small" onClick={() => onAdd(products[5])}>
              <img src={new URL('../assets/p12.jpg', import.meta.url).href} alt="Hapsat Duo luxury perfume gift collection and presentation bag" />
              <span className="gift-name">THE ROSE EDITION</span><strong>₦290,000</strong>
            </button>
          </div>
        </div>
      </section>

      <section className="portrait-section-layout">
        <p className="eyebrow">A PORTRAIT OF SCENT</p>
        <div className="portrait-grid">
          <article><img src={products[0].image} alt="Golden light perfume portrait" /><div><span>THE RITUAL</span><h3>Perfume inspired by golden light</h3></div><small>GOLDEN HOUR</small></article>
          <article><img src={products[1].image} alt="Elegant dark perfume portrait" /><div><span>THE SIGNATURE</span><h3>Perfume defined by quiet confidence</h3></div><small>THE SIGNATURE</small></article>
          <article><img src={products[4].image} alt="Refined perfume composition" /><div><span>THE MAISON</span><h3>Perfume inspired by a timeless atelier</h3></div><small>THE MAISON</small></article>
          <article><img src={products[2].image} alt="Golden perfume bottle at dusk" /><div><span>THE JOURNEY</span><h3>Perfume inspired by a golden horizon</h3></div><small>GOLDEN HOUR</small></article>
          <article><img src={products[6].image} alt="Premium fragrance portrait" /><div><span>THE NIGHT</span><h3>A fragrance for evening elegance</h3></div><small>NOCTURNE</small></article>
          <article><img src={products[5].image} alt="Floral fragrance composition" /><div><span>THE GARDEN</span><h3>Perfume with a softly floral soul</h3></div><small>FLEUR</small></article>
        </div>
        <div className="portrait-tags"><span>THE WILD</span><span>THE GARDEN</span><span>TRENDS</span></div>
      </section>

      <section className="story" id="story"><p className="eyebrow">OUR HOUSE</p><h2>The art of an unforgettable presence</h2><p>Created for modern life, Hapsat Duo is composed for those who understand that true luxury is felt rather than seen—an intimate ritual, crafted to linger.</p></section>
    </>
  )
}
