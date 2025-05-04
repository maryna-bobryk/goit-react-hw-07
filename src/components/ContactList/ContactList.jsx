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

const ContactList = () => {
  const contacts = useSelector(selectFilteredContactsMemo);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  return (
    <div className={s.contactListWrapper}>
      {loading && <Loader />}
      {!loading && !error && (
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
      )}
    </div>
  );
};

export default ContactList;
