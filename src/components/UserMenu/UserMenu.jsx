import { useDispatch, useSelector } from 'react-redux';
import authOperations from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import css from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.greeting}>Вітаємо, {user.name}!</p>
      <button
        type="button"
        onClick={() => dispatch(authOperations.logOut())} 
        className={css.button}
      >
        Вийти
      </button>
    </div>
  );
}
