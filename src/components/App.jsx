import React, { Component } from 'react';
import ContactForm from './ContactForms/ContactForm';
import { nanoid } from 'nanoid';
// import { render } from '@testing-library/react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = contact => {
    const id = nanoid();
    const { name } = contact;

    if (
      this.state.contacts.filter(contact => contact.name === name).length > 0
    ) {
      alert(`${name} is already in contacts`);
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id, ...contact }],
    }));
  };

  render() {
    return (
      <ContactForm onSubmit={this.addContact} />

      // <div
      //   style={{
      //     height: '100vh',
      //     display: 'flex',
      //     justifyContent: 'center',
      //     alignItems: 'center',
      //     fontSize: 40,
      //     color: '#010101',
      //   }}
      // >
      //   React template
      // </div>
    );
  }
}
export default App;
