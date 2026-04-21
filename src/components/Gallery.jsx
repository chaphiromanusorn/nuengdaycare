import { useState } from 'react';
import styles from './Gallery.module.css';

// ─────────────────────────────────────────────────────────────
// HOW TO ADD PHOTOS:
// 1. Place image files in /public/gallery/
// 2. Add entries below: { src: '/gallery/filename.jpg', alt: '...', category: '...' }
// Categories: 'art', 'outdoor', 'learning', 'meals', 'events'
// ─────────────────────────────────────────────────────────────
const PHOTOS = [
  { src: null, alt: 'Art time fun', category: 'art', emoji: '🎨' },
  { src: null, alt: 'Outdoor play', category: 'outdoor', emoji: '🌿' },
  { src: null, alt: 'Story time', category: 'learning', emoji: '📚' },
  { src: null, alt: 'Healthy snacks', category: 'meals', emoji: '🍎' },
  { src: null, alt: 'Sensory play', category: 'art', emoji: '✨' },
  { src: null, alt: 'Garden time', category: 'outdoor', emoji: '🌱' },
  { src: null, alt: 'ABC learning', category: 'learning', emoji: '🔤' },
  { src: null, alt: 'Birthday celebration', category: 'events', emoji: '🎂' },
];

const CATEGORIES = ['all', 'art', 'outdoor', 'learning', 'meals', 'events'];

const CATEGORY_COLORS = {
  art: '#F9E4CC',
  outdoor: '#E8F4EA',
  learning: '#FEF3D0',
  meals: '#FCE4EC',
  events: '#EDE7F6',
};

export default function Gallery() {
  const [active, setActive] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = active === 'all'
    ? PHOTOS
    : PHOTOS.filter(p => p.category === active);

  return (
    <section id="gallery" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Life at Nueng's</span>
          <h2 className="section-title">A Peek Into<br />Our Happy Days</h2>
          <p className="section-subtitle">
            Every day brings new adventures. Here's a glimpse of the joy, creativity,
            and growth happening in our little home.
          </p>
        </div>

        <div className={styles.filters}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`${styles.filter} ${active === cat ? styles.filterActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((photo, i) => (
            <div
              key={i}
              className={styles.item}
              style={{ '--item-bg': CATEGORY_COLORS[photo.category] }}
              onClick={() => photo.src && setLightbox(photo)}
            >
              {photo.src ? (
                <img src={photo.src} alt={photo.alt} className={styles.img} />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderEmoji}>{photo.emoji}</span>
                  <span className={styles.placeholderText}>{photo.alt}</span>
                  <span className={styles.placeholderHint}>Add photo to /public/gallery/</span>
                </div>
              )}
              <div className={styles.overlay}>
                <span>{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Video section */}
        <div className={styles.videoSection}>
          <h3 className={styles.videoTitle}>📹 Our Story in Motion</h3>
          <p className={styles.videoSubtitle}>
            Replace the src below with your YouTube video ID in <code>Gallery.jsx</code>
          </p>
          <div className={styles.videoWrap}>
            <div className={styles.videoPlaceholder}>
              <span style={{ fontSize: '3rem' }}>▶</span>
              <p>Paste your YouTube embed here</p>
              <code style={{ fontSize: '0.8rem', opacity: 0.6 }}>
                {'<iframe src="https://youtube.com/embed/YOUR_VIDEO_ID" />'}
              </code>
            </div>
            {/* Uncomment and replace YOUR_VIDEO_ID when ready:
            <iframe
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Nueng Day Care"
              allowFullScreen
              className={styles.video}
            /> */}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className={styles.lightbox} onClick={() => setLightbox(null)}>
          <button className={styles.lightboxClose}>✕</button>
          <img src={lightbox.src} alt={lightbox.alt} className={styles.lightboxImg} />
        </div>
      )}
    </section>
  );
}
