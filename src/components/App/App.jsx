import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';

import css from './App.module.css';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = { id: nanoid(), name, number };

    if (
      this.state.contacts.find(
        item => item.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts!`);
    }

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  onDeleteButtonClick = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  onFilterInputChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    const filteredItem = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );

    return (
      <div className={css.phonebook}>
        <h1 className={css.main__title}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />
        <div>
          <h2 className={css.main__title}>Contacts</h2>
          <Filter
            filter={this.onFilterInputChange}
            filterValue={this.state.filter}
          />
          <ContactList
            deleteBtn={this.onDeleteButtonClick}
            contact={filteredItem}
          />
        </div>
      </div>
    );
  }
}
