import React from 'react';
import styles from './navbar.module.css';

const Navbar = ({ rollUp }) => {
  return (
    <section className={styles.Navbar}>
      <div>
        
      </div>
      <div>
        <img src="./pictures/logo.png" alt="Logo" className={styles.logo} />
      </div>
      <div className={styles.NavbarItems}>
        <a
          href="/"
          className={!rollUp ? styles.NavbarItem : styles.NavbarItemRollUp}
        >
          Projects
        </a>
        <a
          href="/"
          className={!rollUp ? styles.NavbarItem : styles.NavbarItemRollUp}
        >
          Contact
        </a>
      </div>
    </section>
  );
};

export default Navbar;
