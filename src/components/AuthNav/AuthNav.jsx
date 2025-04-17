import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div className={css.nav}>
      <NavLink to="/register" className={css.link}>
        Реєстрація
      </NavLink>
      <NavLink to="/login" className={css.link}>
        Логін
      </NavLink>
    </div>
  );
}