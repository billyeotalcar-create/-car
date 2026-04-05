import { readdirSync, statSync } from "fs";
import path from "path";
import shellStyles from "./SectionShell.module.css";
import styles from "./BenefitsSection.module.css";
import VehicleCarousel from "./VehicleCarousel";

const VEHICLE_NAME_MAP = {
  "아반떼": "아반떼 (AVANTE)",
  "k5": "K5 (The Kia K5)",
  "제네시스 gv80": "GV80 (Genesis GV80)",
  "a6": "아우디 A6 (Audi A6)",
  "5시리즈": "BMW 5시리즈 (BMW 5 Series)",
  "벤츠 e클래스": "메르세데스-벤츠 E-클래스 (Mercedes-Benz E-Class)",
  "모델 y": "테슬라 모델 Y (Tesla Model Y)",
};

function getVehicleDisplayName(fileName) {
  const normalizedName = fileName.normalize("NFC");
  const key = normalizedName.toLowerCase();

  return VEHICLE_NAME_MAP[key] ?? normalizedName;
}

function getVehicleImages() {
  const publicDir = path.join(process.cwd(), "public");
  const vehicleFolder = readdirSync(publicDir).find((entry) => {
    const fullPath = path.join(publicDir, entry);

    return statSync(fullPath).isDirectory() && entry.normalize("NFC") === "차사진";
  });

  if (!vehicleFolder) {
    return [];
  }

  const vehicleDir = path.join(publicDir, vehicleFolder);

  return readdirSync(vehicleDir)
    .filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file))
    .sort((left, right) =>
      left.normalize("NFC").localeCompare(right.normalize("NFC"), "ko")
    )
    .map((file) => ({
      name: getVehicleDisplayName(path.parse(file).name),
      src: `/${encodeURIComponent(vehicleFolder)}/${encodeURIComponent(file)}`,
    }));
}

export default function BenefitsSection() {
  const vehicles = getVehicleImages();

  return (
    <section className={`${shellStyles.section} ${styles.section}`} id="vehicles">
      <div className={shellStyles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            <span className={styles.titleLine}>국산차량부터 수입 차량까지 단번에</span>
            <span className={styles.titleAccent}>최적화된 장기렌트 시스템</span>
          </h2>
          <p className={styles.subtitle}>그 외 모든 차량 문의 가능</p>
        </div>

        <VehicleCarousel vehicles={vehicles} />
      </div>
    </section>
  );
}
