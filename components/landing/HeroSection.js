import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.section} id="hero">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.caseTags} aria-label="가능 문의 유형">
            <span className={styles.caseTag}>#프리랜서</span>
            <span className={styles.caseTag}>#개인회생</span>
            <span className={styles.caseTag}>#신용불량</span>
            <span className={styles.caseTag}>#국세체납</span>
          </div>
          <p className={styles.subtitle}>다른 업체에서 안된다고 하던가요?</p>
          <h1 className={styles.title}>
            <span className={styles.titlePrimary}>빌려탈카는</span>
            <span className={styles.titleAccent}>다 - 된다.</span>
          </h1>
          <div className={styles.heroMeta}>
            <p className={styles.heroSubtext}>가장 빠른 장기렌트 출고 문의</p>
            <a href="#contact" className={styles.heroButton}>
              무심사 즉시출고 문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
