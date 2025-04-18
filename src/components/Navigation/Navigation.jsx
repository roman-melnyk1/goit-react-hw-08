import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <nav>
      <NavLink className={styles.link} to="/">Home</NavLink>
      {isLoggedIn && (
        <NavLink className={styles.link} to="/contacts">Contacts</NavLink>
      )}
    </nav>
  );
};

export default Navigation;
