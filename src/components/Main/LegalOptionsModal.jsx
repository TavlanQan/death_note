'use client';
import React from "react";
import styles from "./Main.module.css";

function LegalOptionsModal({ open, onClose, options = [], actionLabel }) {
  if (!open) return null;

  return (
    <div className={styles.modal_overlay} role="dialog" aria-modal="true">
      <div className={styles.modal}>
        <div className={styles.modal_header}>
          <h3>{actionLabel}</h3>
          <button className={styles.modal_close} onClick={onClose} aria-label="Закрити">
            ×
          </button>
        </div>

        <div className={styles.modal_cards}>
          {options.map(option => (
            <div key={option.id} className={styles.modal_card}>
              <div className={styles.modal_card__image}>
                <img src={option.image} alt={option.title} />
              </div>
              <div className={styles.modal_card__body}>
                <div className={styles.modal_card__title}>{option.title}</div>
                <div className={styles.modal_card__description}>{option.description}</div>
                <div className={styles.modal_card__amount}>{option.amount}</div>
              </div>
              <div className={styles.modal_card__action}>
                <a href={option.link} target="_blank" rel="noreferrer" className={styles.modal_select_btn}>
                  Select
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LegalOptionsModal;
