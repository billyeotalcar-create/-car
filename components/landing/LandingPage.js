import styles from "./LandingPage.module.css";
import SiteHeader from "./SiteHeader";
import HeroSection from "./HeroSection";
import ConditionsSection from "./ConditionsSection";
import BenefitsSection from "./BenefitsSection";
import ProcessSection from "./ProcessSection";
import ContactSection from "./ContactSection";
import FloatingKakaoButton from "./FloatingKakaoButton";

export default function LandingPage() {
  return (
    <div className={styles.page}>
      <SiteHeader />
      <main className={styles.main}>
        <HeroSection />
        <ConditionsSection />
        <BenefitsSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <FloatingKakaoButton />
    </div>
  );
}
