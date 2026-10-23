import './Celebrate.css';

function Celebrate() {
  return (
    <section className="celebrate" id="celebrate" aria-labelledby="celebrate-title">
      <div className="celebrate-image">
        <img
          src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1200&q=85"
          alt="An Indian dessert ready to share, representative food imagery"
          width="1200"
          height="1000"
          loading="lazy"
        />
      </div>
      <div className="celebrate-copy">
        <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Gather, gift, celebrate</p>
        <h2 id="celebrate-title">
          Make every<br />
          <em>celebration sweeter.</em>
        </h2>
        <p>
          Festivals, family get-togethers, birthdays or just-because moments — a box of something lovely always says a little more.
        </p>
        <p className="celebrate-note">
          Ask about sweet selections and celebration treats. Availability and arrangements can be discussed when you enquire.
        </p>
        <a className="button button-cream" href="#enquire">
          Enquire about celebrations <span aria-hidden="true">↗</span>
        </a>
      </div>
      <span className="celebrate-ornament" aria-hidden="true">✳</span>
    </section>
  );
}

export default Celebrate;
