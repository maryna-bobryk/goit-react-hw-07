import { useDispatch } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
// import { showError, showSuccess } from './services/toastifyAlert';
// import { addContact, deleteContact, fetchContacts } from './redux/contactsOps';

function App() {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       await dispatch(fetchContacts()).unwrap();
  // showSuccess('Kontakte erfolgreich geladen');
  //     } catch (error) {
  //       showError('Fehler beim Laden der Kontakte');
  //     }
  //   };
  //   getData();
  // }, [dispatch]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}

export default App;
