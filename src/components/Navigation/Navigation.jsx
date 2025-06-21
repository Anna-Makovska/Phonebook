import { NavLink } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink to='/' className={styles.navLink}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to='/contacts' className={styles.navLink}>
          Phonebook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
