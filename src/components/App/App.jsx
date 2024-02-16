import { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Section from 'components/Section/Section';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  addContact = contact => {
    const isInContacts = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isInContacts) {
      alert(`${contact.name} is already in contacts`);
      return;
    }
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
    }));
  };

  formSubmitHandler = data => {
    let id = nanoid();
    let contact = { id: id, name: data.name, number: data.number };

    // let isContact = this.state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(data.name.toLowerCase())
    // );
    // console.log(isContact);
    // if (isContact.length) {
    //   Notify.warning(`${data.name} is already in contacts`, {
    //     background: '#eebf31',
    //     fontSize: '16px',
    //     width: '350px',
    //   });
    //   return;
    // }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact],
    }));
  };

  render() {
    return (
      <section className={css.sectionWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <Section>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title="Contacts">
          <ContactsList contacts={this.state.contacts} />
        </Section>
      </section>
    );
  }
}

export default App;
