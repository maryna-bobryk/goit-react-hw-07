import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectLoading,
} from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import { DiVim } from 'react-icons/di';
import Loader from '../Loader/Loader';

import 'react-toastify/dist/ReactToastify.css';

const ContactList = () => {
  const filter = useSelector(selectNameFilter);
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={s.contactListWrapper}>
      {loading && <Loader />}
      {error && !loading && (
        <div className={s.errorMessage}>
          <p>❌ Fehler beim Laden der Kontakte.</p>
        </div>
      )}
      {!loading && !error && filteredContacts.length > 0 && (
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
      )}
      {!loading && !error && filteredContacts.length === 0 && (
        <p className={s.emptyMessage}>Keine Kontakte gefunden.</p>
      )}
    </div>
  );
};

export default ContactList;
