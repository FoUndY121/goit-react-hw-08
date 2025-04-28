import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FormComponent from "../FormComponent/FormComponent.jsx";
import Contact from "../Contact/Contact.jsx";
import { deleteContact } from '../../redux/contactsOps.js';
import { selectFilteredContacts } from '../../redux/contacts/selectors.js';
import SearchBar from "../SearchBar/SearchBar.jsx";
import s from './ContactList.module.css';
function ContactList() {
    const contacts = useSelector(selectFilteredContacts);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <div className={s.listContainer}>
            {/*<FormComponent />*/}
            {/*<SearchBar />*/}
            <ul className={s.contactList}>
                {contacts.map(contact => (
                    <Contact
                        key={contact.id}
                        contact={contact}
                        onDelete={() => handleDelete(contact.id)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default ContactList;
