import { NavLink } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <main className={`column narrow ${styles.content}`}>
      <h1>Welcome!</h1>
      <p className={styles.large}>
        My name is Sara, and I am so glad you are here.
        Taking the next steps to improve your mental health often comes with doubt, insecurity, and fears, so the fact that you've even stumbled across this page means a lot.
        Let's get started!
      </p>
      <NavLink className={styles.schedule} to='/contact'><div className={styles.schedule}>Schedule Our First Meeting</div></NavLink>
    </main>

  );
}

export default Home;
