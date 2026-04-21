import Logo from './Logo';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Logo size={40} textSize="1.1rem" color="#E8A838" />
          <p className={styles.tagline}>
            A warm home where every child is cherished, every day.
          </p>
        </div>

        <div className={styles.links}>
          <strong>Quick Links</strong>
          <a href="#services">Our Programs</a>
          <a href="#hours">Hours & Rates</a>
          <a href="#gallery">Gallery</a>
          <a href="#notifications">Updates</a>
          <a href="#contact">Contact & Enroll</a>
        </div>

        <div className={styles.contact}>
          <strong>Contact</strong>
          <span>📍 Denton County, Texas</span>
          <span>📞 (XXX) XXX-XXXX</span>
          <span>📧 hello@nuengdaycare.com</span>
        </div>
      </div>

      <div className={styles.bottom}>
        <span>© {year} Nueng Day Care LLC · All rights reserved.</span>
        <span>Made with ❤️ in Texas</span>
      </div>
    </footer>
  );
}
