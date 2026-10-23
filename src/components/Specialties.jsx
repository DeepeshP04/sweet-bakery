import './Specialties.css';

const specialties = [
  { name: 'Gulab Jamun', image: 'https://images.pexels.com/photos/11887844/pexels-photo-11887844.jpeg?auto=compress&w=600', alt: 'An Indian dessert, representative food imagery', number: '01', description: 'Soft, golden bites with all the comfort of a classic.', featured: true },
  { name: 'Motichoor Laddoo', image: 'images/motichoor-laddu.jpg', alt: 'A sweet treat, representative food imagery', number: '02', description: 'A festive favourite, round and full of cheer.' },
  { name: 'Kaju Katli', image: 'https://images.unsplash.com/photo-1708782343574-b9d0dc6dd112?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D', alt: 'An Indian dessert, representative food imagery', number: '03', description: 'Delicate diamond-shaped bites for sharing or gifting.' },
  { name: 'Milk Cake', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80', alt: 'A rich, tender milk-based sweet, representative food imagery', number: '04', description: 'A comforting classic for the sweet-toothed.' },
  { name: 'Rasmalai', image: 'images/rasmalai.jpg', alt: 'Creamy rasmalai garnished with nuts, representative food imagery', number: '05', description: 'Soft, milky sweetness with a hint of celebration.' },
];

function Specialties() {
  return (
    <section className="specialties section-pad" id="specialties" aria-labelledby="specialties-title">
      <div className="page-shell">
        <div className="section-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> The mithai edit</p>
            <h2 id="specialties-title">
              A little something<br />
              <em>for every craving.</em>
            </h2>
          </div>
          <p className="heading-aside">
            Familiar favourites and timeless Indian treats, made for those moments when only something sweet will do.
          </p>
        </div>

        <div className="sweet-grid">
          {specialties.map((item) => (
            <article key={item.name} className={`sweet-card ${item.featured ? 'sweet-card-large' : ''}`}>
              <a className="card-image" href="#enquire" aria-label={`Enquire about ${item.name}`}>
                <img src={item.image} alt={item.alt} width="900" height="1100" loading="lazy" />
                <span className="card-number">{item.number}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
              </a>
              <div className="card-copy">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="section-foot">
          <p>Menu inspiration only. Ask about current availability.</p>
          <a className="text-link" href="#enquire">
            View all specialties <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Specialties;
