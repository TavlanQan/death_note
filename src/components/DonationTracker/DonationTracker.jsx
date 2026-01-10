// components/DonationTracker.jsx
'use client';
import { DONATION_CURRENT, DONATION_GOAL } from "@/constants/donation";
import styles from "./Donation.module.css";

export default function DonationTracker({ initialGoal = 10000 }) {
  const goalAmount = initialGoal ?? DONATION_GOAL;
  const donationAmount = Math.min(DONATION_CURRENT, goalAmount);

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
        <a href="/support">
          <img role="donate" src="/DONATE.png" alt="Donate button" />
        </a>
      </div>
    </section>
  );
}
