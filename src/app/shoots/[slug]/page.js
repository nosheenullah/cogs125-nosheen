import Link from "next/link";
import shoots from "@/data/shoots";
import styles from "../../page.module.css";

export function generateStaticParams() {
  return shoots.map((shoot) => ({ slug: shoot.slug }));
}

export default async function ShootPage({ params }) {
    const { slug } = await params;
    const shoot = shoots.find((s) => s.slug === slug);
  
    if (!shoot) return <div style={{ color: "#f0ece4", padding: 48 }}>Shoot not found.</div>;  

  return (
    <div className={styles.shootPage}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>ullah studios</Link>
        <div className={styles.navLinks}>
          <Link href="/shoots">Work</Link>
          <Link href="/about">About</Link>
          <a href="https://instagram.com/ullahstudios" target="_blank" rel="noopener noreferrer">Book</a>
        </div>
      </nav>

      <div className={styles.shootHeader}>
        <Link href="/shoots" className={styles.backLink}>← All Shoots</Link>
        <p className={styles.shootHeaderMeta}>{shoot.category} · {shoot.date}</p>
        <h1>{shoot.title}</h1>
        <p className={styles.shootHeaderDesc}>{shoot.description}</p>
      </div>

      <div className={styles.photoGrid}>
        {shoot.photos.map((src, i) => (
          <div key={i} className={styles.photoWrap}>
            <img src={src} alt={`${shoot.title} photo ${i + 1}`} />
          </div>
        ))}
      </div>

      <div className={styles.cta} style={{ textAlign: "center" }}>
        <p className={styles.ctaEyebrow}>Want a shoot like this?</p>
        <h2 className={styles.ctaTitle}>Let's work together.</h2>
        <a
          href="https://instagram.com/ullahstudios"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookBtn}
        >
          DM @ullahstudios →
        </a>
      </div>

      <footer className={styles.footer}>
        <span>© 2025 Ullah Studios</span>
        <a href="https://instagram.com/ullahstudios" target="_blank" rel="noopener noreferrer">@ullahstudios</a>
      </footer>
    </div>
  );
}
