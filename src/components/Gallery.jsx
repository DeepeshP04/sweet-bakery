import './Gallery.css';

const galleryItems = [
  { className: 'gallery-tall', image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=900&q=80', alt: 'A bowl of creamy Indian dessert with a nut garnish', caption: 'A moment to savour' },
  { className: '', image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=80', alt: 'Rich bite-sized sweet treats', caption: 'Little bites of joy' },
  { className: 'gallery-wide', image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80', alt: 'A celebration cake with decorative frosting', caption: 'Make a wish' },
  { className: '', image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=700&q=80', alt: 'Freshly baked cookies ready to share', caption: 'A little something for later' },
];

function Gallery() {
  return (
    <section className="gallery section-pad" id="gallery" aria-labelledby="gallery-title">
      <div className="page-shell">
        <div className="gallery-heading">
          <div>
            <p className="eyebrow"><span className="eyebrow-line" /> A visual treat</p>
            <h2 id="gallery-title">
              A feast for<br />
              <em>the eyes, too.</em>
            </h2>
          </div>
          <p>
            Sweet little inspirations for gifting, gathering and savouring. Photos are illustrative, not representations of the shop or confirmed products.
          </p>
        </div>

        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <figure key={item.caption} className={`gallery-item ${item.className}`}>
              <img src={item.image} alt={item.alt} width="900" height="1100" loading="lazy" />
              <figcaption>{item.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
