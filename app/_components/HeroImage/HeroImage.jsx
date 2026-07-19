import styles from './HeroImage.module.css';

export default function HeroImage() {
  return (
    <div className={styles.heroImage}>
   
      <div className={styles.window}>
        <div className={styles.titleBar}>
          <div className={styles.dots}>
            <span className={styles.dotRed}></span>
            <span className={styles.dotYellow}></span>
            <span className={styles.dotGreen}></span>
          </div>
          <p className={styles.fileName}>FrontendDev.js</p>
        </div>

        <pre className={styles.codeBlock}>
          <code>
            {`class FrontendDev {
  constructor() {
    this.specialization = "Frontend";
    this.stack = "Next.js + React + JS";
  }

  build(vision) {
    return vision.map(feature => feature.ship());
  }
}`}
          </code>
        </pre>
      </div>
    </div>
  );
}
