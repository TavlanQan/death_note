'use client'
import React from 'react';
import styles from './Header.module.css';

function Header() {

  const HandleSearch = (e) => {
    e.preventDefault();
  }

  return (
    <header role="banner" className={styles.header}>
      <div className="logo">
        <a href="/" aria-label="Homepage"> 
          <img src="/logo.png" alt="death note logo" />
        </a>
      </div>

      <nav aria-label="Main selection" className={styles.nav_select}>
        <label htmlFor="category-select">Select category</label>
        <select id="category-select" name="category">
          <option value="all">1</option>
          <option value="articles">2</option>
          <option value="products">3</option>
        </select>
      </nav>
        
      <form role="search" className={styles.search_form}>
        <label htmlFor="search-input">Search</label>
        <input
          id="search-input"
          type="search"
          name="q"
          placeholder="Search..."
          aria-label="Search"
        >
        </input>
        <button type="submit">
          <img src="/search.png" alt="search" />
        </button>
      </form>
        
    </header>
  )

}


export default Header;
