import { useState } from 'react';
import './Header.css';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'our-services', label: 'Our Services' },
  { id: 'covid-home', label: 'COVID-19 Home Test Collection Service' },
  { id: 'covid-workplace', label: 'COVID-19 Workplace Testing' },
  { id: 'become-courier', label: 'Become a Courier' },
  { id: 'contact', label: 'Contact Us' },
];

export default function Header({ activePage = 'home', onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    if (onNavigate) onNavigate(id);
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="logo-strip">
          <div className="logo">
            <span className="logo-main">TREADSTONE</span>
            <span className="logo-sub">LAST MILE DELIVERY</span>
          </div>
        </div>
        <button
          type="button"
          className="mobile-menu-btn"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          onClick={toggleMobileMenu}
        >
          <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'} />
          <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'} />
          <span className={mobileMenuOpen ? 'hamburger open' : 'hamburger'} />
        </button>
      </div>
      <div className={`nav-strip ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="header-inner">
          <nav className="main-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                className={activePage === item.id ? 'nav-link active' : 'nav-link'}
                onClick={(e) => handleClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
