import shellStyles from "./SectionShell.module.css";
import styles from "./ConditionsSection.module.css";
import { DriveIcon, UserCircleIcon, WalletIcon } from "./icons";
import { conditions } from "@/data/landingContent";

const iconMap = {
  age: UserCircleIcon,
  career: DriveIcon,
  income: WalletIcon,
};

export default function ConditionsSection() {
  return (
    <section className={`${shellStyles.section} ${shellStyles.white}`} id="conditions">
      <div className={shellStyles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            신용등급 <span className={styles.titleAccent}>무심사</span>
          </h2>
          <p className={styles.subtitle}>
            단 <span className={styles.subtitleAccent}>세가지</span> 조건만 보시면 됩니다.
          </p>
        </div>

        <ul className={styles.checklist} aria-label="이용 조건 체크리스트">
          {conditions.map((item) => {
            const Icon = iconMap[item.key];

            return (
              <li key={item.key} className={styles.checkItem}>
                <span className={styles.checkBadge} aria-hidden="true">
                  <Icon />
                </span>
                <span className={styles.checkText}>{item.title}</span>
              </li>
            );
          })}
        </ul>

        <p className={styles.notice}>
          <span className={styles.noticeAccent}>3가지 이용조건</span>만 해당되면 누구나 가능합니다.
        </p>
      </div>
    </section>
  );
}
