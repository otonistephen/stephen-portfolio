import Link from 'next/link';
import styles from './HeroContent.module.css';

export default function HeroContent() {
  return (
    <div className={styles.heroContent}>
      <h1>Hi, my name is </h1>
      <div className={styles.header}>
        <h2>Stephen Otoni</h2>
        <h3>Building the Future of the Web</h3>
      </div>

      <p>
        Frontend Developer building complete web apps with NextJs, React and
        modern backend tools.
      </p>
      <Link href=''>contact me</Link>
    </div>
  );
}
