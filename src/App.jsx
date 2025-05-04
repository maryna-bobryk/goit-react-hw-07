import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import { useEffect } from 'react';
import { fetchContacts } from './redux/contactsOps';
// import { selectError, selectLoading } from './redux/contactsSlice';
// import { showError } from './services/toastifyAlert';
import Loader from './components/Loader/Loader';

function App() {
  const dispatch = useDispatch();
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

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
