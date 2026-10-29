import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImage from '../assets/hapsat-duo-logo.jpg'

export default function Navbar({ cartCount = 0 }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="navbar">
      <Link to="/" className="brand" aria-label="Hapsat Duo home" onClick={closeMenu}><img src={logoImage} alt="Hapsat Duo Luxury Perfume House" /></Link>
      <button className="menu-toggle" aria-expanded={menuOpen} aria-label="Toggle navigation" onClick={() => setMenuOpen(value => !value)}>☰</button>
      <nav className={menuOpen ? 'open' : ''}>
        <NavLink to="/" end onClick={closeMenu}>Home</NavLink>
        <NavLink to="/fragrances" onClick={closeMenu}>Fragrances</NavLink>
        <NavLink to="/quiz" onClick={closeMenu}>Find Your Scent</NavLink>
        <a href="/#story" onClick={closeMenu}>Our Story</a>
      </nav>
      <button className="bag-button" aria-label={`Shopping bag with ${cartCount} items`}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 8h12l-1 12H7L6 8Zm3 0V6a3 3 0 0 1 6 0v2" fill="none" stroke="currentColor" strokeWidth="1.4" /></svg><span>{cartCount}</span></button>
    </header>
  )
}
