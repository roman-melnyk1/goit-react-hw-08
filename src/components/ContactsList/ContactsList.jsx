import { useSelector, useDispatch } from 'react-redux';
import contactsSelectors from '../../redux/contacts/contactsSelectors';  // Імпортуємо весь об'єкт
import contactsOperations from '../../redux/contacts/contactsOperations';  // Імпортуємо все через дефолтний експорт
import css from './ContactsList.module.css';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.selectFilteredContacts);  // Доступ через об'єкт

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.item}>
          <p>{name}: {number}</p>
          <button
            className={css.button}
            onClick={() => dispatch(contactsOperations.deleteContact(id))}  // Використовуємо через об'єкт
          >
            Видалити
          </button>
        </li>
      ))}
    </ul>
  );
}
