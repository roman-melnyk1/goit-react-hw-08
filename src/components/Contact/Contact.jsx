import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

export default function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <div className={css.wrapper}>
      <span className={css.name}>{contact.name}:</span>
      <span className={css.phone}>{contact.phone}</span>
      <button
        type="button"
        onClick={() => dispatch(deleteContact(contact.id))}
        className={css.button}
      >
        Delete
      </button>
    </div>
  );
}