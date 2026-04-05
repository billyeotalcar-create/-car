import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandBlock}>
          <p className={styles.brand}>빌려탈Car</p>
          <p className={styles.tagline}>무심사 즉시출고 장기렌트·오토리스 전문</p>
        </div>

        <div className={styles.infoGrid}>
          <div className={styles.infoItem}>
            <span className={styles.label}>대표이사</span>
            <span className={styles.value}>정지승</span>
          </div>

          <div className={styles.infoItem}>
            <span className={styles.label}>주소</span>
            <span className={styles.value}>반포대로 316</span>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={`${styles.inner} ${styles.bottomInner}`}>
          <p className={styles.notice}>빌려탈Car는 빠른 상담과 출고 안내를 위해 문의 내용을 접수합니다.</p>
        </div>
      </div>
    </footer>
  );
}
