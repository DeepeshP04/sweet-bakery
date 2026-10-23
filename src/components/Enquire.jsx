import { useState } from 'react';
import './Enquire.css';

function Enquire() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name = form.elements.name.value.trim();
    setStatus(`Thanks, ${name}. This is a frontend demo — your enquiry has not been sent.`);
    form.reset();
  };

  return (
    <section className="enquire section-pad" id="enquire" aria-labelledby="enquire-title">
      <div className="page-shell enquire-layout">
        <div className="enquire-copy">
          <p className="eyebrow eyebrow-light"><span className="eyebrow-line" /> Tell us what you have in mind</p>
          <h2 id="enquire-title">
            What can we make<br />
            <em>sweeter for you?</em>
          </h2>
          <p>
            Share a little about your occasion or the treats you’re looking for. This is a frontend demo form and won’t send your enquiry.
          </p>
          <div className="enquire-decoration" aria-hidden="true">✳</div>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit} noValidate>
          <div className="form-row">
            <div className="field">
              <label htmlFor="name">Your name <span>*</span></label>
              <input id="name" name="name" type="text" autoComplete="name" placeholder="How should we address you?" required />
            </div>
            <div className="field">
              <label htmlFor="occasion">Occasion or enquiry type <span>*</span></label>
              <select id="occasion" name="occasion" required defaultValue="">
                <option value="" disabled>Select an occasion</option>
                <option>Festival or family gathering</option>
                <option>Birthday or celebration</option>
                <option>Wedding or special event</option>
                <option>Everyday sweet craving</option>
                <option>Something else</option>
              </select>
            </div>
          </div>

          <div className="field">
            <label htmlFor="interest">What are you interested in?</label>
            <select id="interest" name="interest" defaultValue="">
              <option value="">Choose a category (optional)</option>
              <option>Traditional mithai</option>
              <option>Cakes and pastries</option>
              <option>Cookies and savoury bakery</option>
              <option>Gifting and assorted sweets</option>
              <option>Not sure yet</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="message">A few more details <span>*</span></label>
            <textarea id="message" name="message" rows="3" placeholder="Tell us what you’re dreaming up…" required />
          </div>

          <button className="button button-cream form-submit" type="submit">
            Preview enquiry <span aria-hidden="true">↗</span>
          </button>
          <p className="form-status" aria-live="polite" role="status">{status}</p>
          <p className="form-disclaimer">Demo only: nothing is sent or stored. Connect a backend to receive enquiries.</p>
        </form>
      </div>
    </section>
  );
}

export default Enquire;
