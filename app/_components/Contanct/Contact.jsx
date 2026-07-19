import styles from './Contact.module.css';
import Link from 'next/link';

export default function Contact() {
  const emailAddress = 'otonistephendec@gmail.com';
  const phone = '2348085909201';

  const emailSubject = encodeURIComponent('Hi There');
  const emailBody = encodeURIComponent(
    'i would like to learn about your services',
  );
  const whatsappMessage = encodeURIComponent('Hi! I want to get in touch');

  return (
    <section className={styles.contact}>
      <div className='container'>
        <div className={styles.contactWrapper}>
          <h1>start a project</h1>
          <p>
            Seeking a web dev for your next project. Let's discuss architecture,
            scalability and impact
          </p>
          <div className={styles.emailPhone}>
            <Link
              href={`mailto:${emailAddress}>?subject=${emailSubject}&body=${emailBody}`}
            >
              send email
            </Link>
            <Link
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              message on whatsapp
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
