import { useState, useEffect } from 'react';
import Logo from './Logo';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Hours', href: '#hours' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Updates', href: '#notifications' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#home"><Logo size={40} textSize="1.2rem" /></a>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {NAV_LINKS.map(l => (
            <li key={l.label}>
              <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
            </li>
          ))}
          <li>
            <a href="#contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
              Enroll Now
            </a>
          </li>
        </ul>

        <button className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span className={menuOpen ? styles.rotated : ''}></span>
          <span className={menuOpen ? styles.hidden : ''}></span>
          <span className={menuOpen ? styles.rotatedNeg : ''}></span>
        </button>
      </div>
    </nav>
  );
}
