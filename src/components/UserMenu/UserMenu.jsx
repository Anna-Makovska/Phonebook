import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.userMenuContainer}>
      <p className={styles.welcomeText}>Welcome, {user.name}</p>
      <button type='button' onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
