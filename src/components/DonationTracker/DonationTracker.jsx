// components/DonationTracker.jsx
'use client';
import { useState, useEffect } from "react";
import styles from "./Donation.module.css";

export default function DonationTracker({ initialGoal = 10000 }) {
  const [donationAmount, setDonationAmount] = useState(0);
  const goalAmount = initialGoal;

  useEffect(() => {
    const interval = setInterval(() => {
      setDonationAmount((prev) => Math.min(prev + 100, goalAmount));
    }, 100);

    return () => clearInterval(interval);
  }, [goalAmount]);

  // Розрахунок відсотка для прогрес-бару
  const percentage = Math.min((donationAmount / goalAmount) * 100, 100);

  return (
    <section role="donation-information" className={styles.donation_section}>
      <div className={styles.donation_field}>
        <div className={styles.donation_fill_block} />
        <div
          className={styles.donation_fill}
          style={{ width: `${percentage}%` }}
        >
          <img
            src="/prg.svg"
            style={{ width: `${percentage}%` }}
            alt="progress bar"
          />
        </div>
      </div>

      <div className={styles.donation_count}>
        ${donationAmount} of {goalAmount}
      </div>

      <div className={styles.donation_button}>
        <a href="/donation">
          <img role="donate" src="/DONATE.png" alt="Donate button" />
        </a>
      </div>
    </section>
  );
}