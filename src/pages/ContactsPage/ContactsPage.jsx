import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../../redux/contacts/operations';

import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactsList/ContactsList';
import SearchBox from '../../components/SearchBox/SearchBox';
import css from './ContactsPage.module.css';

export default function ContactsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Ваші Контакти</h2>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
