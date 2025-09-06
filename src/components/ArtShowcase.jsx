import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const BASE = import.meta.env.BASE_URL;

const images = [
  { src: `${BASE}assets/Art/chikko-hluv.png`, title: "Chikko Love Holiday" },
  { src: `${BASE}assets/Art/k1-ded.png`, title: "K1 Dead" },
  { src: `${BASE}assets/Art/buffsona.jpg`, title: "Natures Form" },
    { src: `${BASE}assets/Art/k1_cool.png`, title: "K1 cool" },
    { src: `${BASE}assets/Art/CHIKKO_SPEEP.png`, title: "CHIKKO SPEEP" },
  // Add more images
];

export default function ArtShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <section className="art" id="art">
      <h2 className="card-title">Art Showcase</h2>
      <div className="art-grid">
        {images.map((img, i) => (
          <div
            key={i}
            className="art-card"
            onClick={() => { setIndex(i); setIsOpen(true); }}
          >
            <img src={img.src} alt={img.title} />
            <div className="art-overlay">{img.title}</div>
          </div>
        ))}
      </div>

      <Lightbox
        open={isOpen}
        index={index}
        slides={images.map(img => ({ src: img.src }))}
        onClose={() => setIsOpen(false)}
      />
    </section>
  );
}
