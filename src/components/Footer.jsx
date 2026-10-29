import logoImage from '../assets/hapsat-duo-logo.jpg'

export default function Footer() {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-brand"><img src={logoImage} alt="Hapsat Duo Parfumerie de Luxe" /><p>Luxury Perfume House · Nigeria</p></div>
        <div><h4>Client Care</h4><a href="#shipping">Delivery & Returns</a><a href="#contact">Contact</a><a href="#faq">FAQ</a></div>
        <div className="newsletter"><h4>Join the Inner Circle</h4><p>Private releases, invitations, and stories from our atelier.</p><form onSubmit={event => event.preventDefault()}><input aria-label="Email address" type="email" placeholder="Your email address" required /><button aria-label="Subscribe">→</button></form></div>
      </div>
      <div className="copyright">© 2026 HAPSAT DUO Luxury Perfume House. <span>Nigeria · Worldwide</span></div>
    </footer>
  )
}
