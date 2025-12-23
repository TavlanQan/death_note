'use client'
import React, { useState } from 'react';
import styles from './Header.module.css';
import DonationTracker from '../DonationTracker/DonationTracker';

function Header() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);
  const handleSearch = (e) => e.preventDefault();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <a href="/" aria-label="Homepage"> 
          <img src="/logo.png" alt="Death Note logo" />
        </a>
      </div>
      <div className={styles.donations}>
        <DonationTracker initialGoal={10000} />
      </div>

    </header>
  );
}

export default Header;
