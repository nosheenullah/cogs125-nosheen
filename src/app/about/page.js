import Link from "next/link";
import styles from "../page.module.css";

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>ullah studios</Link>
        <div className={styles.navLinks}>
          <Link href="/shoots">Work</Link>
          <Link href="/about">About</Link>
          <a href="https://instagram.com/ullahstudios" target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </nav>

      <div className={styles.aboutContent}>
        <p className={styles.aboutEyebrow}>About</p>
        <h1>Life Through<br />My Lens</h1>

        <p className={styles.aboutBio}>
          I'm a freelance photographer and creator behind @ullahstudios. In my
          free time, I photograph and record videos of teams, events, and people
          using a Canon Mirrorless camera, while also executing complex digital
          manipulation of photos and footage.
        </p>
        <p className={styles.aboutBio}>
          I created a digital archive of these shoots on Instagram @ullahstudios,
          where I interact with my clients and present them with cherished
          recollections.
        </p>

        <div className={styles.aboutTools}>
          <h2>Tools & Gear</h2>
          <div className={styles.toolsList}>
            {["Canon Mirrorless", "Adobe Photoshop", "Adobe Lightroom", "Adobe Premiere Pro"].map((tool) => (
              <span key={tool} className={styles.tool}>{tool}</span>
            ))}
          </div>
        </div>

        <div className={styles.aboutInstagram}>
          <a
            href="https://instagram.com/ullahstudios"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookBtn}
          >
            Follow @ullahstudios →
          </a>
        </div>
      </div>

      <footer className={styles.footer}>
        <span>© 2025 Ullah Studios</span>
        <a href="https://instagram.com/ullahstudios" target="_blank" rel="noopener noreferrer">@ullahstudios</a>
      </footer>
    </div>
  );
}
