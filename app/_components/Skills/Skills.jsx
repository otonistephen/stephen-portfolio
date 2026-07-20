'use client';
import { developerList, expertiseList } from '@/app/_data/data';
import styles from './Skills.module.css';
import Image from 'next/image';

export default function Skills() {
  return (
    <section className={styles.skills} >
      <div className='container'>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsStack}>
            <div className={styles.skillsHeader}>
              {' '}
              <p className={styles.subTitle}>tech stack</p>
              <h2>expertise & Tooling</h2>
              <p className={styles.skillsDescription}>
                I like building things that look sharp and actually work. Here
                is the stack I use to take ideas from a blank screen to a fully
                functional, secure web application.
              </p>
            </div>

            <div className={styles.developer}>
              {developerList.map(list => (
                <div className={styles.card} key={list.id}>
                  <Image
                    src={list.icon}
                    alt='developer icon'
                    height={24}
                    width={24}
                  />
                  <h3>{list.developer}</h3>
                  <p>{list.stack}</p>
                </div>
              ))}
            </div>
             <div className={styles.designHosting}>
              <div className={styles.hosting} >
                <h1>design & UI systems:</h1>
                <p>Tailwind CSS, Bootstrap</p>
              </div>
              <div className={styles.hosting}>
                <h1>workflow & hosting:</h1>
                <p>vercel, netlify, git/GitHub</p>
              </div>
            </div>
          </div>
          <div className={styles.expertise}>
            <ul className={styles.expertiseList}>
              {expertiseList.map(list => (
                <li className={styles.menu} key={list.id}>
                  <span className={styles.nameIndicator}>
                    <span className={styles.listName}>{list.name}</span>
                    <span className={styles.indicator}></span>
                  </span>
                  <span className={styles.listMastery}>{list.mastery}</span>
                </li>
              ))}{' '}
            </ul>
           
          </div>
        </div>
      </div>
    </section>
  );
}
