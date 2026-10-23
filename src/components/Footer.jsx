import './Footer.css';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell footer-main">
        <a className="wordmark footer-wordmark" href="#top" aria-label="Ajanta Sweets and Bakery, back to top">
          <span className="wordmark-mark" aria-hidden="true">A</span>
          <span className="wordmark-copy">
            <strong>Ajanta</strong>
            <span>Sweets &amp; Bakery</span>
          </span>
        </a>

        <p className="footer-tagline">
          A little sweetness<br />
          for every <em>occasion.</em>
        </p>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#specialties">Specialties</a>
          <a href="#bakery">Bakery</a>
          <a href="#gallery">Gallery</a>
          <a href="#about">About</a>
          <a href="#enquire">Enquire</a>
        </nav>

        <a className="back-top" href="#top">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </div>

      <div className="page-shell footer-bottom">
        <p>© {new Date().getFullYear()} Ajanta Sweets and Bakery</p>
        <p>Good things are worth sharing.</p>
      </div>
    </footer>
  );
}

export default Footer;
