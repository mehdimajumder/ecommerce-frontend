import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import { Plus, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className={styles.container}
      role="contentinfo"
      aria-label="Site Footer"
    >
      {/* === MAIN LINK SECTIONS === */}
      <section className={styles.options} aria-label="Footer Navigation Links">
        <ul>
          <li>
            <button
              type="button"
              className={styles.footerButton}
              aria-expanded="false"
              aria-controls="footer-shop"
              aria-label="Toggle Shop links"
            >
              Shop <Plus />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.footerButton}
              aria-expanded="false"
              aria-controls="footer-corporate-info"
              aria-label="Toggle Corporate Info links"
            >
              Corporate Info <Plus />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.footerButton}
              aria-expanded="false"
              aria-controls="footer-help"
              aria-label="Toggle Help links"
            >
              Help <Plus />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles.footerButton}
              aria-expanded="false"
              aria-controls="footer-become-a-member"
              aria-label="Toggle Become A Member links"
            >
              Become A Member <Plus />
            </button>
          </li>
        </ul>
      </section>

      {/* === LOGO SECTION === */}
      <div className={styles.logoSection}>
        <Link to="/" className={styles.logo} aria-label="Go to homepage">
          Logo
        </Link>
      </div>

      {/* === REGION INFO === */}
      <section
        className={styles.region}
        aria-label="Region and Currency Selector"
        role="region"
      >
        <p>United States ($)</p>
        <Link
          to="/"
          className={styles.regionLink}
          aria-label="Change region and currency"
        >
          Change Region
        </Link>
      </section>

      {/* === SOCIAL MEDIA ICONS === */}
      <nav className={styles.icons} aria-label="Follow us on social media">
        <Link
          to="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Instagram"
        >
          <Instagram />
        </Link>
        <Link
          to="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Follow us on Facebook"
        >
          <Facebook />
        </Link>
      </nav>

      {/* === ACCESSIBILITY NOTE === */}
      <section
        className={styles.accessibilityNote}
        aria-label="Accessibility Commitment"
        role="region"
      >
        <p>
          We are committed to accessibility. Our site follows WCAG guidelines
          and supports assistive technologies such as screen readers. If you are
          using a screen reader, magnifier, or other assistive technology and
          are experiencing issues, please call our toll-free support line (...)
          for help.
        </p>
      </section>
    </footer>
  );
};

export default Footer;
