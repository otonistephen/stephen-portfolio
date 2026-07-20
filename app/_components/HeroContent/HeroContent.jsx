import Link from 'next/link';
import styles from './HeroContent.module.css';

export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <p className={styles.introText}>Hi, my name is </p>
      <div className={styles.header}>
        <h1>Stephen Otoni</h1>
        <h2>Building the Future of the Web</h2>
      </div>

      <p className={styles.contentP}>
        Frontend Developer building complete web apps with NextJs, React and
        modern backend tools.
      </p>
      <Link href='/#contact'>contact me</Link>
    </div>
  );
}
