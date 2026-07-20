// 'use client';
// import styles from './Navbar.module.css';
// import Link from 'next/link';
// import NavLinks from '../NavLinks/NavLinks';
// import { useState } from 'react';

// export default function Navbar() {
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => {
//     if (window.innerWidth <= 768) {
//       setTimeout(() => setClick(false), 700);
//     } else {
//       setClick(false);
//     }
//   };
//   return (
//     <nav className={styles.nav}>
//       <div className='container'>
//         <div className={`${styles.navbar} ${click ? 'active' : ''}`}>
//           {' '}
//           <div className={styles.logo} onClick={closeMobileMenu}>
//             <Link href='/#home'>so</Link>
//           </div>
//           <div className={styles.menu}>
//             <NavLinks click={click}  closeMobileMenu={closeMobileMenu}/>
//           </div>
//           <div
//             className={`${styles.hamburger} ${click ? styles.active : ''}`}
//             onClick={handleClick}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }


'use client';
import styles from './Navbar.module.css';
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

  // Force scroll and state sync back to home when logo is clicked
  const handleLogoClick = (e) => {
    // 1. Sync local storage and dispatch event to alert NavLinks to change active state
    localStorage.setItem('lastClickedNav', 'home');
    
    // 2. Programmatically scroll to the home section just like Solution 1
    const element = document.getElementById('home');
    if (element) {
      e.preventDefault();
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      
      // 3. Dispatch a custom window event to force NavLinks component to update its active highlights instantly
      window.dispatchEvent(new Event('storage'));
    }
    
    closeMobileMenu();
  };

  return (
    <nav className={styles.nav}>
      <div className='container'>
        <div className={`${styles.navbar} ${click ? 'active' : ''}`}>
          
          {/* Swapped Link for a native <a> tag connected to state handler */}
          <div className={styles.logo}>
            <a href="/" onClick={handleLogoClick}>so</a>
          </div>

          <div className={styles.menu}>
            <NavLinks click={click} closeMobileMenu={closeMobileMenu}/>
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