import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from '../Layout/Layout';
import s from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import RestrictedRoute from '../RestrictedRoute';
import PrivateRoute from '../PrivateRoute';
const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegisterPage = lazy(() =>
  import('../../pages/RegisterPage/RegisterPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);

export default function App() {
  const dispatch = useDispatch();

  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <strong>Page needs some shower</strong>
  ) : (
    <div className={s.appContainer}>
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route
              path='/register'
              element={<RestrictedRoute redirectTo="/" component={<RegisterPage />} />}
            />
            <Route
              path='/login'
              element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
            />
              <Route path='/contacts' element={<PrivateRoute component={<ContactsPage />} /> } />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
