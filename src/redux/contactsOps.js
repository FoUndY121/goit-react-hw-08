// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
//
// // Загружаем контакты
// export const fetchContacts = createAsyncThunk(
//     'contacts/fetchContacts',
//     async (_, { getState }) => {
//         const state = getState();
//         const userEmail = state.auth.user.email;
//
//         const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
//
//         // Фильтруем только свои контакты
//         const userContacts = contacts.filter(contact => contact.owner === userEmail);
//
//         return userContacts;
//     }
// );
//
// // Добавляем контакт
// export const addContact = createAsyncThunk(
//     'contacts/addContact',
//     async (contactData, { getState }) => {
//         const state = getState();
//         const userEmail = state.auth.user.email;
//
//         const newContact = {
//             id: nanoid(),
//             ...contactData,
//             owner: userEmail,
//         };
//
//         const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
//         contacts.push(newContact);
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//
//         return newContact;
//     }
// );
//
// // Удаляем контакт
// export const deleteContact = createAsyncThunk(
//     'contacts/deleteContact',
//     async (contactId, { getState }) => {
//         const state = getState();
//         const userEmail = state.auth.user.email;
//
//         let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
//
//         contacts = contacts.filter(
//             contact => !(contact.id === contactId && contact.owner === userEmail)
//         );
//
//         localStorage.setItem('contacts', JSON.stringify(contacts));
//
//         return { id: contactId };
//     }
// );
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchContacts = createAsyncThunk(
    'contacts/fetchAll',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/contacts');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const addContact = createAsyncThunk(
    'contacts/addContact',
    async (newContact, thunkAPI) => {
        try {
            const response = await axios.post('/contacts', newContact);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (contactId, thunkAPI) => {
        try {
            const response = await axios.delete(`/contacts/${contactId}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
