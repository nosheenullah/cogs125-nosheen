import Link from "next/link";
import shoots from "@/data/shoots";
import styles from "../page.module.css";

export default function ShootsPage() {
  return (
    <div className={styles.shootsPage}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>ullah studios</Link>
        <div className={styles.navLinks}>
          <Link href="/shoots">Work</Link>
          <Link href="/about">About</Link>
          <a href="https://instagram.com/ullahstudios" target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </nav>

      <div className={styles.pageHeader}>
        <p className={styles.sectionLabel}>All Shoots</p>
        <h1>Selected Work</h1>
      </div>

      <div className={styles.grid} style={{ borderTop: "none" }}>
        <div className={styles.shootGrid}>
          {shoots.map((shoot) => (
            <Link key={shoot.slug} href={`/shoots/${shoot.slug}`} className={styles.shootCard}>
              <div className={styles.shootImgWrap}>
                <img src={shoot.cover} alt={shoot.title} className={styles.shootImg} />
                <div className={styles.shootOverlay}><span>View Shoot →</span></div>
              </div>
              <div className={styles.shootMeta}>
                <span className={styles.shootCategory}>{shoot.category}</span>
                <h2 className={styles.shootTitle}>{shoot.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <footer className={styles.footer}>
        <span>© 2025 Ullah Studios</span>
        <a href="https://instagram.com/ullahstudios" target="_blank" rel="noopener noreferrer">@ullahstudios</a>
      </footer>
    </div>
  );
}
