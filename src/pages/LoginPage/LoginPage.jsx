import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/operations'; 
import css from './LoginPage.module.css';

export default function LoginPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      authOperations.logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Вхід</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Email
          <input type="email" name="email" required />
        </label>
        <label className={css.label}>
          Пароль
          <input type="password" name="password" required />
        </label>
        <button type="submit" className={css.button}>Увійти</button>
      </form>
    </div>
  );
}
