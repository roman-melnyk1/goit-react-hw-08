import { createSlice } from '@reduxjs/toolkit';
import operations from './operations';
import authOperations from '../auth/operations';

const { fetchContacts, addContact, deleteContact } = operations;
const { logOut } = authOperations;

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder

      .addCase(fetchContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(item => item.id !== action.payload);
      })

      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.loading = false;
        state.error = null;
      }),
});

const contactsReducer = contactsSlice.reducer;
export default contactsReducer;
