import s from './ContactForm.module.css';
import { Form, Formik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  const handleAddContact = values => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
  };

  const onSubmit = (values, options) => {
    handleAddContact(values);
    options.resetForm();
  };

  const applySchema = () =>
    Yup.object().shape({
      name: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
      number: Yup.string()
        .min(3, 'Too Short!')
        .max(50, 'Too Long!')
        .matches(/^\+?\d{5,13}$/, 'Number must be 5-13 digits')
        .required('Required'),
    });

  return (
    <>
      <h1>Phonebook</h1>
      <div className={s.contactFormWrapper}>
        <Formik
          onSubmit={onSubmit}
          initialValues={initialValues}
          validationSchema={applySchema}
        >
          <Form className={s.contactForm}>
            <div className={s.contactFormInput}>
              <label htmlFor="name" className={s.contactFormLabel}>
                <span>Name</span>
                <Field
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={s.errorMessage}
                />
              </label>
            </div>
            <div className={s.contactFormInput}>
              <label htmlFor="number" className={s.contactFormLabel}>
                <span>Number</span>
                <Field
                  id="number"
                  type="tel"
                  pattern="^\+?[0-9\s\-]{7,20}$"
                  name="number"
                  placeholder="+49 170 1234567"
                />
                <ErrorMessage
                  name="number"
                  component="div"
                  className={s.errorMessage}
                />
              </label>
            </div>
            <button type="submit" className={s.contactFormBtn}>
              Add contact
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default ContactForm;
