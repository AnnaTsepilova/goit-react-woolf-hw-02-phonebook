import { Component } from 'react';
import css from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <section className={css.sectionWrapper}>
        <h1 className={css.title}>Phonebook</h1>
        <Section>
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <ContactsList />
        </Section>
      </section>
    );
  }
}
