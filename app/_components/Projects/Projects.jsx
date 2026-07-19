'use client';
import styles from './Projects.module.css';
import { projectList } from '@/app/_data/data';
import Image from 'next/image';
import Link from 'next/link';
import FadeInSection from '../FadeInSection';

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className='container'>
        <div className={styles.projectsWrapper}>
          <div className={styles.header}>
            <h1>Featured Projects</h1>
            <h2>Architectural case studies</h2>
          </div>{' '}
          <div className={styles.projectsContainer}>
            <div className={styles.cardWrapper}>
              {projectList.map(list => (
                <FadeInSection key={list.id}>
                  <div className={styles.card} key={list.id}>
                    <div className={styles.imageWrapper}>
                      <Image
                        src={list.img}
                        alt='project image'
                        width={480}
                        height={300}
                        loading='eager'
                      />
                    </div>

                    <div className={styles.cardContent}>
                      <h2>{list.name}</h2>
                      <p>{list.description}</p>
                      <p className={styles.stack}>{list.stack}</p>
                      <div className={styles.links}>
                        {' '}
                        <Link href={list.live}>Live</Link>
                        <Link href={list.git}>Github</Link>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
              ;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
