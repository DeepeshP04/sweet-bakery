import './About.css';

function About() {
  return (
    <section className="about section-pad" id="about" aria-labelledby="about-title">
      <div className="page-shell about-layout">
        <div className="about-mark" aria-hidden="true">
          <span>A</span>
          <i>✳</i>
        </div>

        <div className="about-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> A note from us</p>
          <h2 id="about-title">
            A place for every<br />
            <em>sweet moment.</em>
          </h2>
          <p>
            Ajanta Sweets and Bakery brings together the joy of traditional mithai and much-loved bakery treats. Whether you’re marking a special day or simply following a craving, find a little inspiration for the moments worth sharing.
          </p>
          <a className="text-link" href="#enquire">
            Let’s make it a little sweeter <span aria-hidden="true">→</span>
          </a>
        </div>

        <p className="about-aside">Tradition<br />meets a treat<br />for today.</p>
      </div>
    </section>
  );
}

export default About;
