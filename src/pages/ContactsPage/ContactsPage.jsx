import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps.js';
import ContactForm from '../../components/FormComponent/FormComponent';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/SearchBar/SearchBar';
import s from './ContactsPage.module.css';
function ContactsPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return (
        <div className={s.pageContainer}>
            <h1 className={s.title}>Phonebook</h1>
            <ContactForm  />
            <h2 className={s.subtitle}> Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    );
}

export default ContactsPage;
