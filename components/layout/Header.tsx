"use client"

import styles from './Header.module.css'
import { useState } from 'react'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
        <nav className={styles.nav}>
            <div className={styles.logo}><img src="/images/LogoBgNull.png" alt="Logo" /></div>
            
            <button 
              className={styles.hamburger} 
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            
            <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
                <li><a href="#" className={styles.navLink}>BTP</a></li>
                <li><a href="#" className={styles.navLink}>Informatique</a></li>
                <li><a href="#" className={styles.navLink}>Autres</a></li>
            </ul>
            
            <ul className={`${styles.authLinks} ${menuOpen ? styles.active : ''}`}>
                <li><a href="#" className={styles.navLink}>Se connecter</a></li>
                <li><a href="#" className={styles.navLink}>S'inscrire</a></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header
