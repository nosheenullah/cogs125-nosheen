// src/app/page.js
import Link from "next/link";
import shoots from "@/data/shoots";
import styles from "./page.module.css";

const allPhotos = [
  "/shoots/kaitlyn-graduation/photo1.jpg",
  "/shoots/kaitlyn-graduation/photo4.jpg",
  "/shoots/kaitlyn-graduation/photo7.jpg",
  "/shoots/kaitlyn-graduation/photo12.jpg",
  "/shoots/john-and-friends/photo1.jpg",
  "/shoots/john-and-friends/photo5.jpg",
  "/shoots/john-and-friends/photo10.jpg",
  "/shoots/john-and-friends/photo15.jpg",
  "/shoots/john-and-friends/photo20.jpg",
  "/shoots/bsa-holuder-raat/photo1.jpg",
  "/shoots/bsa-holuder-raat/photo3.jpg",
  "/shoots/bsa-holuder-raat/photo5.jpg",
  "/shoots/bsa-holuder-raat/photo7.jpg",
];

export default function Home() {
  return (
    <div className={styles.site}>
      {/* Nav */}
      <nav className={styles.nav}>
        <span className={styles.logo}>ullah studios</span>
        <div className={styles.navLinks}>
          <Link href="/shoots">Work</Link>
          <Link href="/about">About</Link>
          <a href="https://instagram.com/ullahstudios" target="_blank" rel="noopener noreferrer">
            Book
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className={styles.hero}>
        <p className={styles.heroEyebrow}>Freelance Photography · San Diego</p>
        <h1 className={styles.heroTitle}>Life Through My Lens</h1>
        <p className={styles.heroSub}>
          Graduations · Events · Couples · Headshots · Families
        </p>
        <a
          href="https://instagram.com/ullahstudios"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookBtn}
        >
          Book via Instagram →
        </a>
      </section>

      {/* Photo Filmstrip */}
      <div className={styles.marqueeWrapper}>
        <div className={`${styles.marqueeTrack} ${styles.scrollLeft}`}>
          {[...allPhotos, ...allPhotos].map((src, i) => (
            <div key={i} className={styles.filmPhoto}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>

      {/* Shoots Grid */}
      <section className={styles.grid}>
        <p className={styles.sectionLabel}>Selected Work</p>
        <div className={styles.shootGrid}>
          {shoots.map((shoot) => (
            <Link key={shoot.slug} href={`/shoots/${shoot.slug}`} className={styles.shootCard}>
              <div className={styles.shootImgWrap}>
                <img src={shoot.cover} alt={shoot.title} className={styles.shootImg} />
                <div className={styles.shootOverlay}>
                  <span>View Shoot →</span>
                </div>
              </div>
              <div className={styles.shootMeta}>
                <span className={styles.shootCategory}>{shoot.category}</span>
                <h2 className={styles.shootTitle}>{shoot.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className={styles.cta}>
        <p className={styles.ctaEyebrow}>Ready to work together?</p>
        <h2 className={styles.ctaTitle}>Let's make something beautiful.</h2>
        <a
          href="https://instagram.com/ullahstudios"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookBtn}
        >
          DM @ullahstudios →
        </a>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <span>© 2025 Ullah Studios</span>
        <a href="https://instagram.com/ullahstudios" target="_blank" rel="noopener noreferrer">
          @ullahstudios
        </a>
      </footer>
    </div>
  );
}

/*import styles from "./page.module.css";

const techStack = [
  { name: "Figma", logo: "https://cdn.simpleicons.org/figma" },
  { name: "React", logo: "https://cdn.simpleicons.org/react" },
  { name: "Python", logo: "https://cdn.simpleicons.org/python" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github" },
  { name: "iMovie", logo: "https://cdn.simpleicons.org/kuaishou" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Framer", logo: "https://cdn.simpleicons.org/framer" },
  { name: "Photoshop", logo: "https://cdn.simpleicons.org/phpstorm" },
  { name: "Rive", logo: "https://cdn.simpleicons.org/rive" },
  { name: "Coda", logo: "https://cdn.simpleicons.org/coda" },
  { name: "Notion", logo: "https://cdn.simpleicons.org/notion" },
  { name: "Adobe", logo: "https://cdn.simpleicons.org/artstation" },
];

export default function Page() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.intro}>
          <h1>Nosheen Ullah</h1>
          <p>Designer & Developer building thoughtful digital experiences.</p>
        </div>

        <section className={styles.techSection}>
          <h2 className={styles.techTitle}>Tech Stack</h2>

          <div className={styles.marqueeWrapper}>
            <div className={`${styles.marqueeTrack} ${styles.scrollLeft}`}>
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className={styles.techChip}>
                  <img src={tech.logo} alt={tech.name} width={32} height={32} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
*/