'use client';
import React from "react";
import styles from "./Main.module.css";

function ResultCard({ card, onAppeal, onClaim, showVote = true, onVote }) {
  const location = [card.country, card.city].filter(Boolean).join(", ") || "—";
  
  const identity = card.identity_documents || " ";
  const birthDate = card.birth_date || " ";
  const debts = {};

  (card.debt_amount || []).forEach(({ currency, amount }) => {
    if (!currency) return;
    debts[currency] = (debts[currency] || 0) + Number(amount || 0);
  });

  const debtList = Object.entries(debts).map(
    ([currency, amount]) => Intl.NumberFormat("ru-RU").format(amount) + ` ${currency}`
  );


  const extraInfo = [
    card.additional_info,
    card.labels?.length ? card.labels.join(", ") : null,
    card.special_marks,
    card.criminal_organizations?.length
      ? card.criminal_organizations.join(", ")
      : null
  ]
    .filter(Boolean)
    .join(", ");

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
            {birthDate || identity ? (
              <li>
                <span className={styles.icon}>
                  <img src="/icons/cake.svg" alt="" />
                </span>
                {birthDate} {identity}
              </li>
            ) : null}          
            {Array.isArray(card.phones) && card.phones.length > 0 && (
              <li>
                <span className={styles.icon}>
                  <img src="/icons/call.svg" alt="" />
                </span>
                {card.phones.join(", ")}
              </li>
            )}

           {Array.isArray(card.court_decisions) && card.court_decisions.length > 0 && (
            <>
              {card.court_decisions.map((url, index) => (
                <li  >
                  <span className={styles.icon}>
                    <img src="/icons/cake.svg" alt="" />
                  </span>

                  <a href={url} target="_blank" rel="noopener noreferrer">
                    Решение суда №{index + 1}
                  </a>
                </li>
              ))}
            </>
          )}

          {debtList.length  && (
            <>
              {debtList.map((depth, index) => (
                <li >
                  <span className={styles.icon}>
                    <img src="/icons/info.svg" alt="" />
                  </span>
                  Задолженность: {depth}
                </li>
              ))}
            </>
          )}

          {extraInfo && (
            <li>
              <span className={styles.icon}>
                <img src="/icons/info.svg" alt="" />
              </span>
              {extraInfo}
            </li>
          )}

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
