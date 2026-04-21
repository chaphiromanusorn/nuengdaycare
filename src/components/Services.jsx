import styles from './Services.module.css';

const SERVICES = [
  {
    icon: '👶',
    title: 'Infant Care',
    age: '6 weeks – 12 months',
    desc: 'Tender, attentive care for your newest arrival. Feeding schedules, tummy time, sensory play, and endless cuddles.',
    color: '#F9E4CC',
    accent: '#D4785A',
  },
  {
    icon: '🚶',
    title: 'Toddler Program',
    age: '1 – 3 years',
    desc: 'Exploration-driven days filled with music, movement, messy art, storytime, and building those crucial social skills.',
    color: '#E8F4EA',
    accent: '#4E7A52',
  },
  {
    icon: '🎒',
    title: 'Preschool Prep',
    age: '3 – 5 years',
    desc: 'Structured learning through play. Letters, numbers, science experiments, and confidence-building for Kindergarten.',
    color: '#FEF3D0',
    accent: '#E8A838',
  },
  {
    icon: '🌙',
    title: 'Drop-In Care',
    age: 'All ages',
    desc: 'Flexible occasional care when you need it. Subject to availability — call ahead to reserve your child\'s spot.',
    color: '#F0EAFA',
    accent: '#9B72CF',
  },
];

const FEATURES = [
  { icon: '🍎', text: 'Nutritious home-cooked meals & snacks included' },
  { icon: '📸', text: 'Daily photos & activity updates shared with parents' },
  { icon: '🌿', text: 'Outdoor play in safe, fenced backyard' },
  { icon: '📋', text: 'Weekly learning themes & activity plans' },
  { icon: '❤️', text: 'Small group sizes — every child gets personal attention' },
  { icon: '🔒', text: 'Licensed & background-checked caregiver' },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">What We Offer</span>
          <h2 className="section-title">Programs Designed<br />With Love</h2>
          <p className="section-subtitle">
            Every program is crafted around your child's natural curiosity and
            developmental stage — because the best learning happens through joy.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={styles.card}
              style={{ '--card-bg': s.color, '--card-accent': s.accent }}
            >
              <div className={styles.iconWrap}>
                <span>{s.icon}</span>
              </div>
              <div className={styles.ageTag}>{s.age}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.features}>
          <div className={styles.featuresHeader}>
            <span className="section-label">Always Included</span>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', color: 'var(--warm-brown)' }}>
              Every Day at Nueng's
            </h3>
          </div>
          <div className={styles.featureGrid}>
            {FEATURES.map((f) => (
              <div key={f.text} className={styles.feature}>
                <span className={styles.featureIcon}>{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
