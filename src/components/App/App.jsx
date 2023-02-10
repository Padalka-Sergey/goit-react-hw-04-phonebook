import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { data } from 'data/data';
import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsListWrapper } from 'components/ContactsList/ContactsList';

export function App() {
  const contactsLocal = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contactsLocal);
  let dataLocal = data;
  if (parsedContacts) {
    dataLocal = parsedContacts;
  }
  const [contacts, setContacts] = useState(dataLocal);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = dataHandle => {
    const { name } = dataHandle;

    const contactFind = contacts.find(contact => contact.name === name);
    if (contactFind) {
      alert(`${contactFind.name} is already in contacts!`);
      return true;
    }

    const newContact = {
      ...dataHandle,
      id: nanoid(),
    };

    setContacts(contacts => [newContact, ...contacts]);
  };

  const onFilterHandler = evt => {
    const { value } = evt.currentTarget;
    setFilter(value);
  };

  const onFilterContacts = () => {
    const normFilter = filter.toLowerCase();
    return contacts.filter(contactEl =>
      contactEl.name.toLowerCase().includes(normFilter)
    );
  };

  const onDataContacts = () => {
    if (filter !== '') {
      return onFilterContacts();
    }
    return contacts;
  };

  const onDelete = contactId => {
    setContacts(contacts => contacts.filter(({ id }) => id !== contactId));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container title="Phonebook">
      <ContactForm onSubmitProps={formSubmitHandler} />
      <ContactsListWrapper
        title="Contacts"
        value={filter}
        onFilterHandler={onFilterHandler}
        dataContacts={onDataContacts()}
        onDelete={onDelete}
      >
        {/* <Filter value={filter} onFilterHandler={onFilterHandler} />
        <ContactsItemList dataContacts={onDataContacts()} onDelete={onDelete} /> */}
      </ContactsListWrapper>
    </Container>
  );
}
