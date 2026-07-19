'use client';
import styles from './Navbar.module.css';
import Link from 'next/link';
import NavLinks from '../NavLinks/NavLinks';
import { useState } from 'react';

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => {
    if (window.innerWidth <= 768) {
      setTimeout(() => setClick(false), 700);
    } else {
      setClick(false);
    }
  };
  return (
    <nav className={styles.nav}>
      <div className='container'>
        <div className={`${styles.navbar} ${click ? 'active' : ''}`}>
          {' '}
          <div className={styles.logo} onClick={closeMobileMenu}>
            <Link href='/'>so</Link>
          </div>
          <div className={styles.menu}>
            <NavLinks click={click}  closeMobileMenu={closeMobileMenu}/>
          </div>
          <div
            className={`${styles.hamburger} ${click ? styles.active : ''}`}
            onClick={handleClick}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  );
}
