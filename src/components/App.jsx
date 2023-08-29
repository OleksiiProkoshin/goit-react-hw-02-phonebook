import React, { useState } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div
      style={{
        height: '100vh',
        marginLeft: '30%',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} contacts={contacts} />
      <h2>Contacts</h2>
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
      <h3>Find contacts by name</h3>
      <Filter filter={filter} setFilter={setFilter} />
    </div>
  );
};
