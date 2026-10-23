import { useEffect, useState } from 'react';
import './Navbar.css';

const navItems = [
  { label: 'Home', href: '#top' },
  { label: 'Our Specialties', href: '#specialties' },
  { label: 'Bakery', href: '#bakery' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'Enquire', href: '#enquire' },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header className="site-header" id="top">
      <div className="header-inner page-shell">
        <a className="wordmark" href="#top" aria-label="Ajanta Sweets and Bakery home">
          <span className="wordmark-mark" aria-hidden="true">A</span>
          <span className="wordmark-copy">
            <strong>Ajanta</strong>
            <span>Sweets &amp; Bakery</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="site-nav"
          aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsOpen((state) => !state)}
        >
          <span />
          <span />
        </button>

        <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} id="site-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setIsOpen(false)}>{item.label}</a>
          ))}
          <a className="nav-cta" href="#specialties" onClick={() => setIsOpen(false)}>
            Explore Our Menu <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
