import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section id='about' className={styles.aboutSection}>
      <div className='container'>
        <p className={styles.subTitle}>my background</p>
        <h2 className={styles.sectionTitle}>About Me</h2>

        <div className={styles.contentGrid}>
        
          <div className={styles.imageWrapper}>
            <Image
              src='/images/profile_image.jpg' 
              alt='Stephen Otoni - Frontend Developer Portfolio Photo'
              width={600}
              height={600}
              className={styles.profileImg}
              priority={false} 
            />
          </div>

        
          <div className={styles.textWrapper}>
            <h3>
              Designing Functional Interfaces, Engineering Scalable Systems
            </h3>

            <p>
              Hey there! I'm Stephen Otoni, a Frontend Developer dedicated to
              engineering fast, responsive, and fully functional web
              applications. My sweet spot lies at the intersection of crisp
              design implementation and robust, server-rendered application
              architecture.
            </p>

            <p>
              I specialize in leveraging modern tools like{' '}
              <strong>Next.js</strong> and <strong>React</strong> to build
              highly optimized user interfaces, while handling secure
              authentication and real-time state management using backend
              solutions like <strong>Supabase</strong>.
            </p>

            <p>
              Whether I'm structuring clean component patterns or tailoring
              technical parameters to boost SEO and performance metrics, my goal
              is always the same: delivering premium user experiences that scale
              cleanly.
            </p>

           
          
          </div>
        </div>
      </div>
    </section>
  );
}
