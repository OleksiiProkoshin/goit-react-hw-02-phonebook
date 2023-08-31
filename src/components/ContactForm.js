import { Formik } from 'formik';
import { StyledField } from './Form.styled';
import { SubmitButton } from './Form.styled';
import { StyledForm } from './Form.styled';

export const ContactForm = ({ addContact }) => {
  const handleFormSubmit = (values, { resetForm }) => {
    addContact(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleFormSubmit}
    >
      {({ errors, touched }) => (
        <StyledForm>
          <StyledField
            type="text"
            name="name"
            placeholder="Write here your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          {errors.name && touched.name && <div>{errors.name}</div>}

          <StyledField
            type="tel"
            name="number"
            placeholder="Write here your number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          {errors.number && touched.number && <div>{errors.number}</div>}

          <SubmitButton type="submit">Add Contact</SubmitButton>
        </StyledForm>
      )}
    </Formik>
  );
};
