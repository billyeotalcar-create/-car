import styles from "./SectionHeader.module.css";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
  center = false,
}) {
  return (
    <div className={`${styles.header} ${center ? styles.center : ""}`}>
      <p className={`${styles.eyebrow} ${light ? styles.light : ""}`}>{eyebrow}</p>
      <h2 className={`${styles.title} ${light ? styles.titleLight : ""}`}>{title}</h2>
      {description ? (
        <p className={`${styles.description} ${light ? styles.descriptionLight : ""}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
