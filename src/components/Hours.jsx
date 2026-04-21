import styles from './Hours.module.css';

const SCHEDULE = [
  { day: 'Monday', open: '7:00 AM', close: '6:00 PM', status: 'open' },
  { day: 'Tuesday', open: '7:00 AM', close: '6:00 PM', status: 'open' },
  { day: 'Wednesday', open: '7:00 AM', close: '6:00 PM', status: 'open' },
  { day: 'Thursday', open: '7:00 AM', close: '6:00 PM', status: 'open' },
  { day: 'Friday', open: '7:00 AM', close: '5:30 PM', status: 'open' },
  { day: 'Saturday', open: '—', close: '—', status: 'closed' },
  { day: 'Sunday', open: '—', close: '—', status: 'closed' },
];

const POLICIES = [
  { icon: '📅', title: 'Holidays', desc: 'Closed on all major federal holidays. Parents notified 2 weeks in advance.' },
  { icon: '⏰', title: 'Late Pick-up', desc: '$5 per every 5 minutes after scheduled pick-up time.' },
  { icon: '🤧', title: 'Sick Policy', desc: 'Please keep children home if they have a fever, vomiting, or contagious illness.' },
  { icon: '📞', title: 'Drop-off', desc: 'Please notify us by 8:30 AM if your child will be absent or late.' },
];

export default function Hours() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <section id="hours" className={styles.section}>
      <div className={styles.bg} />
      <div className={styles.container}>
        <div className={styles.left}>
          <span className="section-label">When We're Open</span>
          <h2 className="section-title">Hours &amp;<br />Availability</h2>
          <p className="section-subtitle">
            Conveniently located in Denton County. Drop-off begins at 7 AM
            to help you make it to work on time — always.
          </p>

          <div className={styles.schedule}>
            {SCHEDULE.map((s) => (
              <div
                key={s.day}
                className={`${styles.row} ${s.status === 'closed' ? styles.closed : ''} ${s.day === today ? styles.today : ''}`}
              >
                <span className={styles.day}>
                  {s.day === today && <span className={styles.todayDot} />}
                  {s.day}
                </span>
                <span className={styles.time}>
                  {s.status === 'closed'
                    ? <span className={styles.closedLabel}>Closed</span>
                    : <>{s.open} – {s.close}</>
                  }
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.policiesCard}>
            <h3 className={styles.policiesTitle}>Good to Know</h3>
            <div className={styles.policies}>
              {POLICIES.map((p) => (
                <div key={p.title} className={styles.policy}>
                  <span className={styles.policyIcon}>{p.icon}</span>
                  <div>
                    <strong>{p.title}</strong>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.ratesCard}>
            <span className={styles.ratesLabel}>Tuition Rates</span>
            <div className={styles.rateItem}>
              <span>Full-time (5 days)</span>
              <strong>Contact Us</strong>
            </div>
            <div className={styles.rateItem}>
              <span>Part-time (3 days)</span>
              <strong>Contact Us</strong>
            </div>
            <div className={styles.rateItem}>
              <span>Drop-in (per day)</span>
              <strong>Contact Us</strong>
            </div>
            <a href="#contact" className={styles.ratesBtn}>Get a Quote →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
