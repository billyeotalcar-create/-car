import shellStyles from "./SectionShell.module.css";
import styles from "./ProcessSection.module.css";
import { testimonials } from "@/data/landingContent";

export default function ProcessSection() {
  return (
    <section className={`${shellStyles.section} ${styles.section}`} id="reviews">
      <div className={shellStyles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>후기가 말합니다.</p>
          <h2 className={styles.title}>
            고객만족도 <span className={styles.titleAccent}>100%</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map((item) => (
            <article key={item.vehicle} className={styles.card}>
              <div className={styles.cardTop}>
                <strong className={styles.vehicle}>{item.vehicle}</strong>
                <div className={styles.stars} aria-label="별점 5점 만점">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
              </div>

              <p className={styles.quote}>"{item.quote}"</p>
              <p className={styles.customer}>{item.customer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
