import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps.js';
import ContactForm from '../../components/FormComponent/FormComponent';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/SearchBar/SearchBar';

function ContactsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div style={{ padding: 20 }}>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
}

export default ContactsPage;
