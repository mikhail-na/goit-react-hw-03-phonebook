import React from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { onLoadContact } from './LocalStorage/onLoadContact';
import { onSaveToLocalStorage } from './LocalStorage/onSaveToLocalStorage';

const LS_CONTACT = "ls-contact";

export class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
    
  };

  componentDidMount() {
    const loadedContacts = onLoadContact(LS_CONTACT);
    
      //  console.log(loadedContacts);
    if (loadedContacts) {
      return this.setState({contacts: loadedContacts});
      
    }
  };
  

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (contacts !== prevState.contacts) {
      onSaveToLocalStorage(LS_CONTACT, contacts);
      
    }
  };
  
  addContactToContacts = contact => {
    const { contacts } = this.state;
    const createContact = { id: nanoid(), ...contact };

    contacts.some(({ name }) => name.toLowerCase() === contact.name.toLowerCase())
      ? alert(`${contact.name.toLowerCase()} is already in your contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, createContact],
          
      }));
    
  };

  handleChangeFilter = ({ target: { value } }) => {
    this.setState({ filter: value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalized = filter.toLowerCase();

    return contacts.filter(({ name }) => name.toLowerCase().includes(normalized));
  };

  removeContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      }
    })
  };
  
  render() {
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContactToContacts} />
        </Section>
        <Section title="Contacts">
          <Filter
            value={this.state.filter}
            handleChangeFilter={this.handleChangeFilter} />
          <ContactList
            contacts={this.getFilteredContacts()}
            removeContact={this.removeContact}
          />
        </Section>
      </>
    );
  }
};