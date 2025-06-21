import { useDispatch} from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import styles from './UserMenu.module.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const UserMenu = () => {

  const navigate = useNavigate();
  const isLoggedIn = useSelector(selectIsLoggedIn);


  useEffect(() => {
  
    if (!isLoggedIn) {
      navigate('/');
    }
    
  }, [isLoggedIn, navigate])

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={styles.userMenuContainer}>
      <p className={styles.welcomeText}>Welcome, {user.name}🤗</p>
      <button type='button' onClick={handleLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
