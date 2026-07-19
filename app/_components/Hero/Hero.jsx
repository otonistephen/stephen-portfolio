import HeroContent from '../HeroContent/HeroContent';
import HeroImage from '../HeroImage/HeroImage';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.heroSection} style={{ paddingTop: '100px' }} >
      <div className='container'>
        <div className={styles.heroContainer}>
          <HeroContent />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}
