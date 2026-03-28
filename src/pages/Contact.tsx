import calendar from '../assets/77_Essential_Icons_Calendar.svg';
import email from '../assets/77_Essential_Icons_Email.svg';
import phone from '../assets/77_Essential_Icons_Phone.svg';
import styles from './Contact.module.css';

function Contact() {
  return (
    <main className={`column narrow ${styles.content}`}>
      <h1>Contact Me</h1>
      <hr />
      <p>
        <a href='https://ssbcounselingservies.clientsecure.me/'>
          <img className={styles.icon} src={calendar} alt='Calendar icon' />
          Schedule Online
        </a>
      </p>
      <p>
        <a href='mailto:ssb@ssbcounselingservices.com'>
          <img className={styles.icon} src={email} alt='Email icon' />
          ssb<wbr/>@ssbcounselingservices<wbr/>.com
        </a>
      </p>
      <p>
        <a href='tel:+19043231775'>
          <img className={styles.icon} src={phone} alt='Phone icon' />
          (904) 323-1775
        </a>
      </p>
      <div className={styles.map}>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d381547.1057804377!2d-81.82395273548116!3d30.324841190302234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5ceee9125d277%3A0xba30ca9d307c5212!2s12627%20San%20Jose%20Blvd%20STE%20301%2C%20Jacksonville%2C%20FL%2032223!5e0!3m2!1sen!2sus!4v1774639328615!5m2!1sen!2sus'
          allowFullScreen
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </main>

  );
}

export default Contact;
