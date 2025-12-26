'use client';
import React from "react";
import styles from "./Main.module.css";

function ResultCard({ card, onAppeal, onClaim, showVote = true, onVote }) {
  const location = [card.country, card.city].filter(Boolean).join(", ") || "—";
  const birthDate = card.birth_date || "—";
  const phone = card.phones?.[0] || "—";
  const extraInfo = card.additional_info + (card.labels?.length ? card.labels.join(", ") : "");
  const photoSrc = card.photo_url || "/deathlist_photos/1.png";
  const statusText = card.status   || "—";

  const handleAppeal = () => {
    if (onAppeal) onAppeal();
  };

  const handleClaim = () => {
    if (onClaim) onClaim();
  };

  const handleVote = () => {
    if (onVote) onVote();
  };

  return (
    <div className={styles.result_block__card}>
      <div className={styles.result_block__card_image_status}>
        <img src={photoSrc} alt={card.full_name || `card-${card.id}`} />
        <p>
          Статус:
          <br />
          <span>{statusText}</span>
        </p>
      </div>

      <div className={styles.result_block__card_info}>
        <div className={styles.result_block__card_info_text}>
          <h2>{card.full_name}</h2>
          <ul className={styles.info_list}>
            <li>
              <span className={styles.icon}>
                <img src="/icons/home.svg" alt="" />
              </span>
              {location}
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/cake.svg" alt="" />
              </span>
              {birthDate}
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/call.svg" alt="" />
              </span>
              {phone}
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/info.svg" alt="" />
              </span>
              {extraInfo}
            </li>
          </ul>
        </div>

        <div className={styles.actions}>
          <button className={styles.chalk_button} onClick={handleAppeal}>ОБЖАЛОВАТЬ</button>
          <button className={styles.chalk_button} onClick={handleClaim}>ПОДАТЬ ИСК</button>
          {showVote && (
            <button className={styles.chalk_button} onClick={handleVote}>ПРОГОЛОСОВАТЬ</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
