'use client'
import Image from 'next/image';
import styles from './Footer.module.css';
import Link from 'next/link';
import { images } from '@/app/_data/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.footer}>
      <div className='container'>
        <div className={styles.footerContainer}>
          <div className={styles.copyRight}>
            ©️ {currentYear} otonistephendev. All Rights Reserved
          </div>
          <div className={styles.socialMedia}>
            <Link href='https://www.instagram.com/otonistephen/'>
              <Image
                src={images.instagram}
                alt='instagram image'
                width={25}
                height={25}
              />
            </Link>
            <Link href='https://github.com/otonistephen'>
              <Image
                src={images.github}
                alt='instagram image'
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
