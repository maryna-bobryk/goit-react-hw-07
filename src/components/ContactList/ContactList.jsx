import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const filter = useSelector(state => state.filter.filters.name);
  const contacts = useSelector(state => state.contacts.contacts.items);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={s.contactItem}>
          <Contact
            name={contact.name}
            number={contact.number}
            id={contact.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
