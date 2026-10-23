import './Hero.css';

function Hero() {
  return (
    <section className="hero page-shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span className="eyebrow-line" /> A little sweetness goes a long way</p>
        <h1 id="hero-title">
          Har khushi mein,<br />
          <em>kuch meetha.</em>
        </h1>
        <p className="hero-intro">
          From traditional Indian mithai to irresistible bakery favourites, discover something special for every craving and celebration.
        </p>
        <div className="hero-actions">
          <a className="button button-dark" href="#specialties">
            Explore Our Specialties <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#celebrate">
            Plan Your Celebration <span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="note-flower" aria-hidden="true">✳</span>
          <span>
            Made for sharing<br />
            <strong>and savouring slowly</strong>
          </span>
        </div>
      </div>

      <div className="hero-art">
        <img
          className="hero-image"
          src="https://images.unsplash.com/photo-1543773495-2cd9248a5bda?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          alt="An Indian dessert, shown as representative menu inspiration"
          width="1200"
          height="1400"
          fetchPriority="high"
        />
        <div className="hero-stamp" aria-label="A sweet moment, made special">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <defs>
              <path id="stamp-circle" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
            </defs>
            <text>
              <textPath href="#stamp-circle">A SWEET MOMENT · MADE SPECIAL · </textPath>
            </text>
          </svg>
          <span aria-hidden="true">✳</span>
        </div>
        <span className="image-caption">
          A feast for the senses <span>— mithai inspiration</span>
        </span>
      </div>

      <div className="hero-side-note" aria-hidden="true">SWEETNESS, SHARED</div>
    </section>
  );
}

export default Hero;
