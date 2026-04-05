"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./VehicleCarousel.module.css";

function getCardState(index, activeIndex, total) {
  const distance = (index - activeIndex + total) % total;

  if (distance === 0) {
    return styles.active;
  }

  if (distance === 1) {
    return styles.next;
  }

  if (distance === 2) {
    return styles.after;
  }

  return styles.hidden;
}

export default function VehicleCarousel({ vehicles }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (vehicles.length < 2) {
      return undefined;
    }

    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % vehicles.length);
    }, 2500);

    return () => window.clearInterval(intervalId);
  }, [vehicles.length]);

  if (!vehicles.length) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.stage} aria-live="polite">
        {vehicles.map((vehicle, index) => (
          <article
            key={vehicle.src}
            className={`${styles.card} ${getCardState(index, activeIndex, vehicles.length)}`}
          >
            <div className={styles.imageWrap}>
              <Image
                src={vehicle.src}
                alt={vehicle.name}
                fill
                sizes="(max-width: 640px) 86vw, 720px"
                className={styles.image}
                priority={index === 0}
              />
            </div>
          </article>
        ))}
      </div>

      <div className={styles.meta}>
        <p className={styles.label}>현재 안내 차량</p>
        <strong className={styles.name}>{vehicles[activeIndex].name}</strong>
      </div>
    </div>
  );
}
