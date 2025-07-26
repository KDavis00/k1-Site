import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  {
    src: '/assets/Art/chikko-hluv.png',
    title: 'Chikko Love Holiday',
    tag: 'Digital Painting',
  },
  {
    src: '/assets/Art/k1-ded.png',
    title: 'K1 Dead',
    tag: 'Digital Painting',
  },
  {
    src: '/assets/Art/buffsona.jpg',
    title: 'Natures Form',
    tag: 'Digital Painting',
  },
];

export default function ArtShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section id="art">
      <h2>Art Showcase</h2>
      <p>
        This is my little corner where I share Art/ music projects, fresh ideas, and creative vibes.
      </p>
      <div className="art-grid">
        {images.map((art, i) => (
          <div
            key={i}
            className="art-card"
            onClick={() => {
              setIndex(i);
              setIsOpen(true);
            }}
            style={{ cursor: 'pointer' }}
          >
            <img src={art.src} alt={art.title} />
            <p className="art-title">{art.title}</p>
            <span className="art-tag">{art.tag}</span>
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={index}
        slides={images.map((img) => ({
          src: img.src,
          description: `${img.title} – ${img.tag}`,
        }))}
      />
    </section>
  );
}
