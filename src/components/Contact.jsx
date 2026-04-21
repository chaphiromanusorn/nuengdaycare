import { useState } from 'react';
import styles from './Contact.module.css';

// ─────────────────────────────────────────────────────────────
// SETUP: Replace YOUR_FORMSPREE_ID with your Formspree form ID
// 1. Go to https://formspree.io and create a free account
// 2. Create a new form — you'll get an ID like "xpwzabcd"
// 3. Replace below: action="https://formspree.io/f/YOUR_FORMSPREE_ID"
// ─────────────────────────────────────────────────────────────
const FORMSPREE_ID = 'YOUR_FORMSPREE_ID';

const CONTACT_INFO = [
  { icon: '📍', label: 'Location', value: 'Denton County, Texas', sub: 'Exact address shared upon enrollment inquiry' },
  { icon: '📞', label: 'Phone', value: '(XXX) XXX-XXXX', sub: 'Monday – Friday, 9 AM – 5 PM' },
  { icon: '📧', label: 'Email', value: 'hello@nuengdaycare.com', sub: 'We respond within 24 hours' },
  { icon: '📱', label: 'Text', value: 'Text us anytime!', sub: 'Quickest way to reach us' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', childAge: '', message: '', program: '' });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (FORMSPREE_ID === 'YOUR_FORMSPREE_ID') {
      alert('⚠️ Please set up your Formspree ID in Contact.jsx to enable form submissions.');
      return;
    }
    setStatus('loading');
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>
          <span className="section-label">Get in Touch</span>
          <h2 className="section-title">We'd Love to<br />Meet Your Family</h2>
          <p className="section-subtitle">
            Have questions? Ready to enroll? Fill out the form and we'll
            get back to you within one business day.
          </p>

          <div className={styles.infoList}>
            {CONTACT_INFO.map(c => (
              <div key={c.label} className={styles.infoItem}>
                <span className={styles.infoIcon}>{c.icon}</span>
                <div>
                  <span className={styles.infoLabel}>{c.label}</span>
                  <strong className={styles.infoValue}>{c.value}</strong>
                  <span className={styles.infoSub}>{c.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.right}>
          {status === 'success' ? (
            <div className={styles.success}>
              <span style={{ fontSize: '3rem' }}>🎉</span>
              <h3>Message Received!</h3>
              <p>Thank you for reaching out. We'll be in touch within one business day!</p>
              <button onClick={() => setStatus('idle')} className={styles.resetBtn}>Send Another Message</button>
            </div>
          ) : (
            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGrid}>
                <div className={styles.field}>
                  <label>Parent / Guardian Name *</label>
                  <input name="name" type="text" required placeholder="Jane Smith"
                    value={form.name} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label>Email Address *</label>
                  <input name="email" type="email" required placeholder="jane@email.com"
                    value={form.email} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label>Phone Number</label>
                  <input name="phone" type="tel" placeholder="(817) 555-0100"
                    value={form.phone} onChange={handleChange} />
                </div>
                <div className={styles.field}>
                  <label>Child's Age</label>
                  <input name="childAge" type="text" placeholder="e.g. 18 months"
                    value={form.childAge} onChange={handleChange} />
                </div>
              </div>

              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label>Program Interest</label>
                <select name="program" value={form.program} onChange={handleChange}>
                  <option value="">Select a program...</option>
                  <option value="infant">Infant Care (6 weeks – 12 months)</option>
                  <option value="toddler">Toddler Program (1–3 years)</option>
                  <option value="preschool">Preschool Prep (3–5 years)</option>
                  <option value="dropin">Drop-In Care</option>
                  <option value="unsure">Not sure yet</option>
                </select>
              </div>

              <div className={`${styles.field} ${styles.fullWidth}`}>
                <label>Message *</label>
                <textarea name="message" required rows={4}
                  placeholder="Tell us about your child and any questions you have..."
                  value={form.message} onChange={handleChange} />
              </div>

              {status === 'error' && (
                <p className={styles.errorMsg}>Something went wrong. Please try again or email us directly.</p>
              )}

              <button type="submit" className={styles.submitBtn} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending…' : 'Send Message 💌'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
