import styles from "./SiteFooter.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brand}>빌려탈카</p>
        <p className={styles.text}>
          다른 업체에서 안된다고 하던가요? 빌려탈카는 다 - 된다.
        </p>
      </div>
    </footer>
  );
}
