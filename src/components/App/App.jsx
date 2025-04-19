import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import Layout from '../Layout/Layout';
import HomePage from '../../pages/HomePage/HomePage';
import RegistrationPage from '../../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../../pages/LoginPage/LoginPage';
import ContactsPage from '../../pages/ContactsPage/ContactsPage';

import PrivateRoute from '../PrivateRoute';
import RestrictedRoute from '../RestrictedRoute';

import authOperations from '../../redux/auth/operations'; 
import { selectIsRefreshing } from '../../redux/auth/selectors';

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(authOperations.refreshUser());  // Викликаємо refreshUser через authOperations
  }, [dispatch]);

  return isRefreshing ? (
    <p>Loading user...</p>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="register"
          element={<RestrictedRoute redirectTo="/contacts" component={<RegistrationPage />} />}
        />
        <Route
          path="login"
          element={<RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute redirectTo="/login" component={<ContactsPage />} />}
        />
        <Route path="*" element={<p>404 Not Found</p>} />
      </Route>
    </Routes>
  );
}
