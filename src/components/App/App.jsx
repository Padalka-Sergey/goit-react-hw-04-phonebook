import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { data } from 'data/data';
import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { ContactsItem } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';

export class App extends Component {
  state = {
    contacts: data,
    // contacts: [],
    filter: '',
  };

  formSubmitHandler = dataHandle => {
    const { contacts } = this.state;
    // console.log(contacts);
    const { name } = dataHandle;
    for (let i = 0; i < contacts.length; i += 1) {
      if (contacts[i].name === name) {
        alert(`${contacts[i].name} is already in contacts!`);
        return true;
      }
    }
    const newContact = {
      ...dataHandle,
      id: nanoid(),
    };
    // console.log(newContact);

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  onFilterHandler = evt => {
    const { value } = evt.currentTarget;
    this.setState({ filter: value });
  };

  onFilterContacts = () => {
    const { contacts, filter } = this.state;
    if (filter === '') {
      return null;
    }
    const normFilter = filter.toLowerCase();
    return contacts.filter(contactEl =>
      contactEl.name.toLowerCase().includes(normFilter)
    );
  };

  onDelete = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = this.onFilterContacts();
    const formSubmitHandler = this.formSubmitHandler;
    const onFilterHandler = this.onFilterHandler;
    const onDelete = this.onDelete;
    // console.log(filter);

    return (
      <Container title="Phonebook">
        <ContactForm
          onSubmitProps={formSubmitHandler}
          onResetValue={this.onResetValue}
        />
        <ContactsList title="Contacts">
          <Filter value={filter} onFilterHandler={onFilterHandler} />
          <ContactsItem
            filterContacts={filterContacts}
            contacts={contacts}
            onDelete={onDelete}
          />
        </ContactsList>
      </Container>
    );
  }
}

//========================================================

// export class App extends Component {
//   state = {
//     contacts: data,
//     // contacts: [],
//     filter: '',
//   };

//   formSubmitHandler = dataHandle => {
//     const { contacts } = this.state;
//     // console.log(contacts);
//     const { name } = dataHandle;
//     for (let i = 0; i < contacts.length; i += 1) {
//       if (contacts[i].name === name) {
//         alert(`${contacts[i].name} is already in contacts!`);
//         return true;
//       }
//     }
//     const newContact = {
//       ...dataHandle,
//       id: nanoid(),
//     };
//     // console.log(newContact);

//     this.setState(({ contacts }) => ({
//       contacts: [newContact, ...contacts],
//     }));
//   };

//   onFilterHandler = evt => {
//     const { value } = evt.currentTarget;
//     this.setState({ filter: value });
//   };

//   onFilterContacts = () => {
//     const { contacts, filter } = this.state;
//     if (filter === '') {
//       return null;
//     }
//     const normFilter = filter.toLowerCase();
//     return contacts.filter(contactEl =>
//       contactEl.name.toLowerCase().includes(normFilter)
//     );
//   };

//   onDelete = contactId => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(({ id }) => id !== contactId),
//     }));
//   };

//   componentDidMount() {
//     const contacts = localStorage.getItem('contacts');
//     const parsedContacts = JSON.parse(contacts);

//     if (parsedContacts) {
//       this.setState({ contacts: parsedContacts });
//     }
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.contacts !== prevState.contacts) {
//       localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//     }
//   }

//   render() {
//     const { contacts, filter } = this.state;
//     const filterContacts = this.onFilterContacts();
//     const formSubmitHandler = this.formSubmitHandler;
//     const onFilterHandler = this.onFilterHandler;
//     const onDelete = this.onDelete;
//     // console.log(filter);

//     return (
//       <Container title="Phonebook">
//         <ContactForm
//           onSubmitProps={formSubmitHandler}
//           onResetValue={this.onResetValue}
//         />
//         <ContactsList title="Contacts">
//           <Filter value={filter} onFilterHandler={onFilterHandler} />
//           <ContactsItem
//             filterContacts={filterContacts}
//             contacts={contacts}
//             onDelete={onDelete}
//           />
//         </ContactsList>
//       </Container>
//     );
//   }
// }
