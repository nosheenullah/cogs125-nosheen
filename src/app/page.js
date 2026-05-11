import Image from "next/image";
import styles from "./page.module.css";

const techStack = [
  { name: "Figma", emoji: "🎨" },
  { name: "React", emoji: "⚛️" },
  { name: "Python", emoji: "🐍" },
  { name: "JavaScript", emoji: "🟨" },
  { name: "Framer", emoji: "🖼️" },
  { name: "GitHub", emoji: "🐙" },
  { name: "CSS", emoji: "🎀" },
  { name: "Node.js", emoji: "🟩" },
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

          {/* Row 1 — scrolls left */}
          <div className={styles.marqueeWrapper}>
            <div className={`${styles.marqueeTrack} ${styles.scrollLeft}`}>
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className={styles.techChip}>
                  <span className={styles.techEmoji}>{tech.emoji}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2 — scrolls right */}
          <div className={styles.marqueeWrapper}>
            <div className={`${styles.marqueeTrack} ${styles.scrollRight}`}>
              {[...techStack, ...techStack].map((tech, i) => (
                <div key={i} className={styles.techChip}>
                  <span className={styles.techEmoji}>{tech.emoji}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
