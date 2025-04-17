import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/authOperations'; // Імпортуємо весь об'єкт
import css from './RegistrationPage.module.css';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    const newUser = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(authOperations.register(newUser)); // Викликаємо через об'єкт
    form.reset();
  };

  return (
    <div className={css.container}>
      <h2 className={css.title}>Реєстрація</h2>
      <form onSubmit={handleSubmit} className={css.form}>
        <label className={css.label}>
          Імʼя
          <input type="text" name="name" required />
        </label>
        <label className={css.label}>
          Email
          <input type="email" name="email" required />
        </label>
        <label className={css.label}>
          Пароль
          <input type="password" name="password" required />
        </label>
        <button type="submit" className={css.button}>Зареєструватися</button>
      </form>
    </div>
  );
}
