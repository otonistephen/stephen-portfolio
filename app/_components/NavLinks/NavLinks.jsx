
// 'use client';

// import { navLink } from '@/app/_data/data';
// import styles from './NavLinks.module.css';
// import Link from 'next/link';
// import { useState, useEffect, useRef } from 'react';

// export default function NavLinks({ closeMobileMenu, click }) {
//   const [activeNav, setActiveNav] = useState('home');
  
 
//   const isClickedRef = useRef(false);
//   const clickTimeoutRef = useRef(null);


//   useEffect(() => {
//     const savedNav = localStorage.getItem('lastClickedNav');
//     if (savedNav) {
//       setActiveNav(savedNav);
      
//       const matchingLink = navLink.find(link => link.name === savedNav);
//       const targetId = matchingLink?.targetId || (matchingLink?.url === '/' ? 'home' : matchingLink?.url.replace('/#', ''));
      
//       if (targetId) {
    
//         isClickedRef.current = true;
//         setTimeout(() => {
//           const element = document.getElementById(targetId);
//           if (element) {
//             element.scrollIntoView({ behavior: 'smooth' });
//           }
       
//           setTimeout(() => {
//             isClickedRef.current = false;
//           }, 800);
//         }, 100);
//       }
//     }

//     return () => {
//       if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       entries => {
  
//         if (isClickedRef.current) return;

//         if (window.scrollY < 80) return;
//         entries.forEach(entry => {
//           const sectionId = entry.target.id;
//           if (entry.isIntersecting) {
//             const matchingLink = navLink.find(
//               link => link.targetId === sectionId || link.url.replace('/#', '') === sectionId
//             );
//             if (matchingLink) {
//               setActiveNav(matchingLink.name);
//             }
//           }
//         });
//       },
//       {
//         threshold: 0.25,
//         rootMargin: '-20px 0px -40px 0px',
//       }
//     );

//     // Observe sections
//     navLink.forEach(link => {
//       const targetId = link.targetId || (link.url === '/' ? 'home' : link.url.replace('/#', ''));
//       const section = document.getElementById(targetId);
//       if (section) observer.observe(section);
//     });

  
//     const handleScroll = () => {
    
//       if (isClickedRef.current) return;

//       if (window.scrollY < 80) {
//         setActiveNav('home');
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       observer.disconnect();
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   const handleLinkClick = name => {
//     setActiveNav(name);
//     localStorage.setItem('lastClickedNav', name);


//     isClickedRef.current = true;
    
//     if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    

//     clickTimeoutRef.current = setTimeout(() => {
//       isClickedRef.current = false;
//     }, 1000);

//     if (closeMobileMenu) closeMobileMenu();
//   };

//   return (
//     <ul className={`${styles.menuList} ${click ? styles.menuActive : ''}`}>
//       {navLink.map(link => (
//         <li key={link.id}>
//           <Link
//             href={link.url}
//             onClick={() => handleLinkClick(link.name)}
//             className={activeNav === link.name ? styles.linkActive : ''}
//             scroll={true}
//           >
//             {link.name}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }



'use client';

import { navLink } from '@/app/_data/data';
import styles from './NavLinks.module.css';
import { useState, useEffect, useRef } from 'react';

export default function NavLinks({ closeMobileMenu, click }) {
  const [activeNav, setActiveNav] = useState('home');
  
  const isClickedRef = useRef(false);
  const clickTimeoutRef = useRef(null);

  // 1. Initial Load: Restore last active nav state
  useEffect(() => {
    const savedNav = localStorage.getItem('lastClickedNav');
    if (savedNav) {
      setActiveNav(savedNav);
      
      const matchingLink = navLink.find(link => link.name === savedNav);
      const targetId = matchingLink?.targetId || (matchingLink?.url === '/' ? 'home' : matchingLink?.url.replace('/#', ''));
      
      if (targetId) {
        isClickedRef.current = true;
        setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
       
          setTimeout(() => {
            isClickedRef.current = false;
          }, 800);
        }, 100);
      }
    }

    return () => {
      if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    };
  }, []);

  // 2. Intersection Observer & Manual Scroll spy logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (isClickedRef.current) return;
        if (window.scrollY < 80) return;

        entries.forEach(entry => {
          const sectionId = entry.target.id;
          if (entry.isIntersecting) {
            const matchingLink = navLink.find(
              link => link.targetId === sectionId || link.url.replace('/#', '') === sectionId
            );
            if (matchingLink) {
              setActiveNav(matchingLink.name);
            }
          }
        });
      },
      {
        threshold: 0.25,
        rootMargin: '-20px 0px -40px 0px',
      }
    );

    navLink.forEach(link => {
      const targetId = link.targetId || (link.url === '/' ? 'home' : link.url.replace('/#', ''));
      const section = document.getElementById(targetId);
      if (section) observer.observe(section);
    });

    const handleScroll = () => {
      if (isClickedRef.current) return;
      if (window.scrollY < 80) {
        setActiveNav('home');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 3. Native Scroll Handle Logic
  const handleLinkClick = (e, name, url) => {
    setActiveNav(name);
    localStorage.setItem('lastClickedNav', name);

    isClickedRef.current = true;
    
    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    
    clickTimeoutRef.current = setTimeout(() => {
      isClickedRef.current = false;
    }, 1000);

    // Force native programmatic scrolling to instantly resolve double-clicking sticking bugs
    const targetId = url === '/' ? 'home' : url.replace('/#', '');
    const element = document.getElementById(targetId);
    if (element) {
      e.preventDefault(); // Stop default browser jumping instantly
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', url); // Keep browser address bar in sync
    }

    if (closeMobileMenu) closeMobileMenu();
  };

  return (
    <ul className={`${styles.menuList} ${click ? styles.menuActive : ''}`}>
      {navLink.map(link => (
        <li key={link.id}>
          {/* Swapped out <Link> for standard native <a> tag */}
          <a
            href={link.url}
            onClick={(e) => handleLinkClick(e, link.name, link.url)}
            className={activeNav === link.name ? styles.linkActive : ''}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}