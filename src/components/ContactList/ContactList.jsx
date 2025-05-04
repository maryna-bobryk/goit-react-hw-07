import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContactsMemo,
  selectLoading,
} from '../../redux/contactsSlice';
import { DiVim } from 'react-icons/di';
import Loader from '../Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { showError } from '../../services/toastifyAlert';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContactsMemo);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [toastShown, setToastShown] = useState(false);
  useEffect(() => {
    if (!loading && error && !toastShown) {
      showError('Es gab einen Fehler beim Laden der Kontakte.');
      setToastShown(true);
    }
    if (!loading && !error && contacts.length === 0 && !toastShown) {
      showError('Keine Kontakte gefunden');
      setToastShown(true);
    }
    if (loading || contacts.length > 0 || error === null) {
      setToastShown(false);
    }
  }, [contacts, loading, error, toastShown]);

  return (
    <div className={s.contactListWrapper}>
      {loading && <Loader />}
      <ul className={s.contactList}>
        {contacts.map(contact => (
          <li key={contact.id} className={s.contactItem}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
