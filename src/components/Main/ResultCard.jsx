'use client';
import React from "react";
import styles from "./Main.module.css";
import DonationTracker from "../DonationTracker/DonationTracker";
import MenuNav from "./MenuNav";

function ResultCard({ card, onAppeal, onClaim, showVote = true, onVote }) {
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
    <>
      <MenuNav /> 
    <div className={styles.result_block__card}>
      
      <div className={styles.result_block__card_image_status}>
        <img src={card.photo} alt={`card-${card.id}`} />
        <p>
          Статус:
          <br />
          <span>{card.status}</span>
        </p>
      </div>

      <div className={styles.result_block__card_info}>
        <div className={styles.result_block__card_info_text}>
          <h2>{card.name}</h2>
          <ul className={styles.info_list}>
            <li>
              <span className={styles.icon}>
                <img src="/icons/home.svg" alt="" />
              </span>
              {card.location}
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/cake.svg" alt="" />
              </span>
              {card.birth_date}
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/call.svg" alt="" />
              </span>
              {card.phone}
            </li>
            <li>
              <span className={styles.icon}>
                <img src="/icons/info.svg" alt="" />
              </span>
              {card.deathlist_reason}
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
          
          <DonationTracker initialGoal={10000} />
          </div>
          </div>
          </>
    
  );
}

export default ResultCard;
