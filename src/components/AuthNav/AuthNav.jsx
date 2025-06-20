import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div className={styles.authNavContainer}>
      <NavLink to='/register' className={styles.authNavLink}>
        Register
      </NavLink>
      <NavLink to='/login' className={styles.authNavLink}>
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
