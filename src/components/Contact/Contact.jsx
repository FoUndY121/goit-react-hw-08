import s from  './Contact.module.css';
const Contact = ({ contact, onDelete }) => {
    return (
        <li className={s.contactItem}>
            <p className={s.contactText}>{contact.name}: {contact.number}</p>
            <button className={s.deleteButton} onClick={onDelete}>Delete</button>
        </li>
    );
};

export default Contact;
