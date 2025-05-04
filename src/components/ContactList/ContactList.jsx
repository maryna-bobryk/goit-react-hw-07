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

import { showError } from '../../services/toastifyAlert';
import { useState } from 'react';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContactsMemo);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [toastShown, setToastShown] = useState(false);

  if (!loading && error && !toastShown) {
    showError('Es gab einen Fehler beim Laden der Kontakte.');
    setToastShown(true);
  } else if (!loading && !error && contacts.length === 0 && !toastShown) {
    showError('Keine Kontakte gefunden');
    setToastShown(true);
  } else if (contacts.length > 0 && toastShown) {
    setToastShown(false);
  }

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
