import { Component } from 'react';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      filter: '',
    };
  }

  addContact = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  handleFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { contacts, filter } = this.state;
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
        <ContactForm addContact={this.addContact} contacts={contacts} />
        <h2>Contacts</h2>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <h3>Find contacts by name</h3>
        <Filter filter={filter} setFilter={this.handleFilterChange} />
      </div>
    );
  }
}

