import React, { useState } from "react";
import "../../../../assets/stylesheets/farm-detail/gallery-section/Gallery.css";

export default function GallerySection({ title, images, subtitle }) {
  const [showList, setShowList] = useState(false);

  const handleOpenList = () => setShowList(true);
  const thumbs = images.slice(1, 5);

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <div>
        <h2 className="gallery-title">{title}</h2>
        {subtitle && <p className="text-sm text-grey">{subtitle}</p>}
        </div>
        <div className="gallery-grid">
          {/* big clickable image */}
          <img
            src={images[0].src}
            alt={images[0].alt}
            className="photo-card gallery-item--large"
            onClick={handleOpenList}
          />

          {/* thumb images */}
          {thumbs.map((img, i) => (
            <img
              key={i}
              src={img.src}
              alt={img.alt}
              className={`photo-card gallery-thumb thumb${i + 1}`}
              onClick={handleOpenList}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
