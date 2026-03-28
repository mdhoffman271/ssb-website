import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/SSB LOGO.jpg';
import { useMediaQuery } from '../hooks/useMediaQuery';
import Hamburger from './Hamburger';
import styles from './Header.module.css';

function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}

function DesktopHeader() {
  return (
    <header className={`${styles.header} column wide`}>
      <img src={logo} className={styles.logo}/>
      <Menu />
    </header>
  );
}

function MobileHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header className={`${styles.header} column wide`}>
      <img src={logo} className={`${styles.logo} ${styles.mobile}`}/>
      <Hamburger isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />

      {isMenuOpen && (
        <div className={styles.popup}>
          <Menu />
        </div>
      )}
    </header>
  );
}

function Menu() {
  return (<nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/about'>About Me</NavLink>
    <NavLink to='/services'>Services</NavLink>
    <NavLink to='/contact'>Contact</NavLink>
  </nav>);
}


export default Header;
