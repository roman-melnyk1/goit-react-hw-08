import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        Вітаємо у Телефонній книзі
      </h1>
      <p className={css.subtitle}>
        Авторизуйтесь або зареєструйтесь, щоб зберігати свої контакти
      </p>
    </div>
  );
}
