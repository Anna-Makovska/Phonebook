import { selectIsLoggedIn } from '../redux/auth/selectors';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';

const PrivateRoute = ({ component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? component : <Navigate to="/login" /> ;
};

export default PrivateRoute;
