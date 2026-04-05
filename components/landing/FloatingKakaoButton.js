import styles from "./FloatingKakaoButton.module.css";

export default function FloatingKakaoButton() {
  return (
    <a
      href="https://open.kakao.com/o/sr9Ug1Uf"
      className={styles.button}
      aria-label="카카오톡 상담 링크 열기"
      title="카카오톡 상담"
      target="_blank"
      rel="noreferrer"
    >
      <span className={styles.iconWrap} aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" className={styles.icon}>
          <path
            d="M12 4.5C7.6 4.5 4.2 7.3 4.2 10.9C4.2 13.1 5.4 15 7.4 16.1L6.8 19.5L10.1 17.6C10.7 17.7 11.3 17.8 12 17.8C16.4 17.8 19.8 15 19.8 10.9C19.8 7.3 16.4 4.5 12 4.5Z"
            fill="currentColor"
          />
          <path
            d="M9.2 10.4H14.8M9.2 13H13.1"
            stroke="#1C1C1C"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className={styles.label}>카카오톡 상담하기</span>
    </a>
  );
}
