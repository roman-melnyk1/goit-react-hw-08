import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/operations'; // Імпортуємо весь об'єкт
import css from './ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    dispatch(contactsOperations.addContact({ name, number })); // Викликаємо через об'єкт
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label className={css.label}>
        Імʼя
        <input type="text" name="name" required />
      </label>
      <label className={css.label}>
        Номер
        <input type="tel" name="number" required />
      </label>
      <button type="submit" className={css.button}>Додати контакт</button>
    </form>
  );
}
