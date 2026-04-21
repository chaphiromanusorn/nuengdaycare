import styles from './Hero.module.css';
import Logo from './Logo';

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Background blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />

      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span>🌟</span> Licensed Home Daycare · Denton County, TX
          </div>
          <h1 className={styles.heading}>
            Where Little Hearts
            <br />
            <em>Bloom & Grow</em>
          </h1>
          <p className={styles.subtext}>
            A warm, nurturing home environment where every child is celebrated,
            every milestone treasured, and every day is filled with love,
            laughter, and learning.
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.btnPrimary}>Schedule a Visit</a>
            <a href="#services" className={styles.btnSecondary}>Our Programs ↓</a>
          </div>
          <div className={styles.stats}>
            <div className={styles.stat}><strong>Ages</strong><span>6 wks – 5 yrs</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><strong>Ratio</strong><span>1:4 max</span></div>
            <div className={styles.divider} />
            <div className={styles.stat}><strong>Meals</strong><span>Included</span></div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.logoCircle}>
            <Logo size={100} textSize="2rem" showText={false} />
          </div>
          <div className={styles.floatCard1}>
            <span>🎨</span> Creative Play
          </div>
          <div className={styles.floatCard2}>
            <span>📚</span> Early Learning
          </div>
          <div className={styles.floatCard3}>
            <span>🌱</span> Safe & Loved
          </div>
        </div>
      </div>

      <div className={styles.wave}>
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#FDF6EC"/>
        </svg>
      </div>
    </section>
  );
}
