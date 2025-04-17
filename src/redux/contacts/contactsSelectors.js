import { createSelector } from '@reduxjs/toolkit';
import { selectNameFilter } from '../filters/filtersSelectors';

const selectContacts = state => state.contacts.items;

const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    )
);

// Використовуємо дефолтний експорт
export default {
  selectContacts,
  selectFilteredContacts,
};
