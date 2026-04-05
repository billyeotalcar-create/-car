"use client";

import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    if (!serviceId || !templateId || !publicKey) {
      setShowSuccess(false);
      setErrorMessage("EmailJS 설정이 아직 완료되지 않았습니다. 키를 연결한 뒤 다시 시도해 주세요.");
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage("");
      setShowSuccess(false);

      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      });

      form.reset();
      setShowSuccess(true);

      timeoutRef.current = window.setTimeout(() => {
        setShowSuccess(false);
        timeoutRef.current = null;
      }, 2500);
    } catch (error) {
      console.error("EmailJS send failed", error);
      setShowSuccess(false);
      setErrorMessage("전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Contact</p>
            <h2 className={styles.title}>원하시는 조건만 남겨주세요.</h2>
            <p className={styles.subtitle}>
              희망 차종과 기간을 남겨주시면 장기렌트, 오토리스 가능
              <span className={styles.mobileBreak}> </span>
              여부부터 빠르게 안내해드립니다.
            </p>
          </div>

          <div className={styles.cardStack}>
            <form ref={formRef} className={styles.formCard} onSubmit={handleSubmit} aria-busy={isSubmitting}>
              <div className={styles.formHeader}>
                <strong className={styles.formTitle}>빠른 상담 신청</strong>
                <p className={styles.formDescription}>
                  원하시는 조건을 남겨주시면 확인 후 빠르게 안내드리겠습니다.
                </p>
              </div>

              <div className={styles.formGrid}>
                <label className={styles.field}>
                  <span className={styles.fieldLabel}>성함</span>
                  <input
                    className={styles.input}
                    type="text"
                    name="name"
                    placeholder="성함을 입력해 주세요"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.fieldLabel}>전화번호</span>
                  <input
                    className={styles.input}
                    type="tel"
                    name="phone"
                    placeholder="010-0000-0000"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.fieldLabel}>희망차종</span>
                  <input
                    className={styles.input}
                    type="text"
                    name="vehicle"
                    placeholder="예: G80, 카니발"
                    required
                  />
                </label>

                <label className={styles.field}>
                  <span className={styles.fieldLabel}>희망 약정개월 수</span>
                  <select className={styles.select} name="term" defaultValue="" required>
                    <option value="" disabled>
                      선택해 주세요
                    </option>
                    <option value="12">12개월</option>
                    <option value="24">24개월</option>
                    <option value="36">36개월</option>
                    <option value="48">48개월</option>
                    <option value="60">60개월</option>
                  </select>
                </label>

                <label className={`${styles.field} ${styles.fullWidth}`}>
                  <span className={styles.fieldLabel}>연간 주행거리</span>
                  <select className={styles.select} name="mileage" defaultValue="" required>
                    <option value="" disabled>
                      선택해 주세요
                    </option>
                    <option value="10000">연 10,000km</option>
                    <option value="15000">연 15,000km</option>
                    <option value="20000">연 20,000km</option>
                    <option value="25000">연 25,000km</option>
                    <option value="30000">연 30,000km 이상</option>
                  </select>
                </label>

                <fieldset className={`${styles.fieldset} ${styles.fullWidth}`}>
                  <legend className={styles.fieldLabel}>상품구분</legend>
                  <div className={styles.optionGroup}>
                    <label className={styles.optionPill}>
                      <input type="radio" name="productType" value="장기렌트" required />
                      <span>장기렌트</span>
                    </label>

                    <label className={styles.optionPill}>
                      <input type="radio" name="productType" value="오토리스" required />
                      <span>오토리스</span>
                    </label>
                  </div>
                </fieldset>
              </div>

              <div className={styles.consentList}>
                <label className={styles.checkboxRow}>
                  <input type="checkbox" name="consent" value="동의" required />
                  <span>빌려탈Car 정보수집 및 마케팅 활용 동의</span>
                </label>
              </div>

              <button type="submit" className={styles.button} disabled={isSubmitting}>
                {isSubmitting ? "전송 중..." : "연락 남기기"}
              </button>

              {showSuccess ? (
                <p className={styles.feedbackMessage} role="status" aria-live="polite">
                  상담 신청이 완료되었습니다. 확인 후 빠르게 안내드리겠습니다.
                </p>
              ) : null}

              {errorMessage ? (
                <p className={`${styles.feedbackMessage} ${styles.feedbackError}`} role="alert">
                  {errorMessage}
                </p>
              ) : null}
            </form>
          </div>

          <div className={styles.contactCard}>
            <div className={styles.contactPerson}>
              <strong className={styles.contactPersonName}>정지승 과장</strong>
            </div>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>전화번호</span>
                <a href="tel:01045970873" className={styles.contactItemValue}>
                  010-4597-0873
                </a>
              </div>

              <div className={styles.contactItem}>
                <span className={styles.contactItemLabel}>카카오톡 ID</span>
                <span className={styles.contactItemValue}>rent_halcar</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
