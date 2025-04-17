import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav>
      <NavLink className={styles.link} to="/">Home</NavLink>
      <NavLink className={styles.link} to="/contacts">Contacts</NavLink>
    </nav>
  );
};

export default Navigation;
