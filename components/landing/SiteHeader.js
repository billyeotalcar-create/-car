import styles from "./SiteHeader.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.brand}>
          <span className={styles.brandMain}>빌려탈</span>
          <span className={styles.brandAccent}>Car</span>
        </a>
        <a href="#contact" className={styles.cta}>
          빠른 상담신청
        </a>
      </div>
    </header>
  );
}
