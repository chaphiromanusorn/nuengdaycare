import styles from './Notifications.module.css';

// ─────────────────────────────────────────────────────────────
// HOW TO POST A NEW NOTIFICATION:
// Add a new object at the TOP of the NOTIFICATIONS array below.
// Types: 'notice' | 'event' | 'closure' | 'update'
// ─────────────────────────────────────────────────────────────
export const NOTIFICATIONS = [
  {
    id: 1,
    type: 'event',
    date: 'May 15, 2025',
    title: '🌸 Spring Family Picnic',
    body: 'Join us for our annual spring picnic in the backyard! Bring a dish to share. Kids will enjoy games, bubbles, and face painting. RSVP by May 10th.',
    pinned: true,
  },
  {
    id: 2,
    type: 'closure',
    date: 'May 26, 2025',
    title: '🇺🇸 Memorial Day Closure',
    body: 'Nueng Day Care will be closed on Monday, May 26th in observance of Memorial Day. Regular hours resume Tuesday, May 27th.',
    pinned: false,
  },
  {
    id: 3,
    type: 'update',
    date: 'May 1, 2025',
    title: '📋 May Learning Theme: Growing Things!',
    body: "This month we're exploring plants, bugs, and the garden. We'll be planting seeds, going on nature walks, and creating nature-inspired art all month long.",
    pinned: false,
  },
  {
    id: 4,
    type: 'notice',
    date: 'April 20, 2025',
    title: '🤧 Reminder: Sick Child Policy',
    body: 'Please remember to keep your child home if they have a fever of 100°F or higher, vomiting, or diarrhea. Children may return 24 hours after symptoms resolve.',
    pinned: false,
  },
];

const TYPE_CONFIG = {
  event:   { label: 'Event',   bg: '#FEF3D0', accent: '#E8A838', dot: '#E8A838' },
  closure: { label: 'Closure', bg: '#FCE4EC', accent: '#E57373', dot: '#E57373' },
  update:  { label: 'Update',  bg: '#E8F4EA', accent: '#4E7A52', dot: '#4E7A52' },
  notice:  { label: 'Notice',  bg: '#F9E4CC', accent: '#D4785A', dot: '#D4785A' },
};

export default function Notifications() {
  const pinned = NOTIFICATIONS.filter(n => n.pinned);
  const rest = NOTIFICATIONS.filter(n => !n.pinned);

  const Card = ({ n }) => {
    const cfg = TYPE_CONFIG[n.type] || TYPE_CONFIG.notice;
    return (
      <div
        className={`${styles.card} ${n.pinned ? styles.pinned : ''}`}
        style={{ '--cfg-bg': cfg.bg, '--cfg-accent': cfg.accent }}
      >
        {n.pinned && <div className={styles.pinnedBadge}>📌 Pinned</div>}
        <div className={styles.cardTop}>
          <span className={styles.typeBadge} style={{ background: cfg.bg, color: cfg.accent }}>
            <span style={{ background: cfg.dot }} className={styles.typeDot} />
            {cfg.label}
          </span>
          <span className={styles.date}>{n.date}</span>
        </div>
        <h3 className={styles.cardTitle}>{n.title}</h3>
        <p className={styles.cardBody}>{n.body}</p>
      </div>
    );
  };

  return (
    <section id="notifications" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">What's Happening</span>
          <h2 className="section-title">Updates &amp;<br />Announcements</h2>
          <p className="section-subtitle">
            Stay in the loop with upcoming events, closures, and news
            from our little community.
          </p>
        </div>

        {pinned.length > 0 && (
          <div className={styles.pinnedSection}>
            {pinned.map(n => <Card key={n.id} n={n} />)}
          </div>
        )}

        <div className={styles.grid}>
          {rest.map(n => <Card key={n.id} n={n} />)}
        </div>
      </div>
    </section>
  );
}
