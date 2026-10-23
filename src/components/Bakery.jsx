import './Bakery.css';

const bakeryItems = [
  { title: 'Chocolate pastries', image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=650&q=80', alt: 'Chocolate pastry inspiration, representative bakery imagery', number: '01 / 04' },
  { title: 'Cookies & biscuits', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=650&q=80', alt: 'Cookies and biscuits, representative bakery imagery', number: '02 / 04' },
  { title: 'Puffs & savoury bites', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=650&q=80', alt: 'Savoury snack pastries, representative bakery imagery', number: '03 / 04' },
  { title: 'Cream cake favourites', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=650&q=80', alt: 'A light cream dessert, representative bakery imagery', number: '04 / 04' },
];

function Bakery() {
  return (
    <section className="bakery section-pad" id="bakery" aria-labelledby="bakery-title">
      <div className="page-shell bakery-layout">
        <div className="bakery-intro">
          <p className="eyebrow"><span className="eyebrow-line" /> From the bakery counter</p>
          <h2 id="bakery-title">
            Freshly tempting<br />
            <em>bakery delights.</em>
          </h2>
          <p>
            For candlelit birthdays, afternoon cravings and everything in between, there’s always room for a little something from the bakery.
          </p>
          <p className="menu-note">A representative selection of bakery ideas. Please enquire about availability.</p>
          <a className="button button-outline" href="#enquire">
            Ask about bakery treats <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="bakery-showcase">
          <article className="bakery-feature">
            <img
              src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=85"
              alt="A decorated celebration cake, representative bakery imagery"
              width="1000"
              height="600"
              loading="lazy"
            />
            <div className="bakery-feature-label">
              <span>For the big little moments</span>
              <h3>Celebration cakes</h3>
            </div>
          </article>

          <div className="bakery-mini-grid">
            {bakeryItems.map((item) => (
              <article key={item.title} className="bakery-mini">
                <img src={item.image} alt={item.alt} width="650" height="480" loading="lazy" />
                <h3>{item.title}</h3>
                <span aria-hidden="true">{item.number}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bakery;
