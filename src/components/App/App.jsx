import { useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { data } from 'data/data';
import { Container } from 'components/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactsListWrapper } from 'components/ContactsList/ContactsList';
import { ContactsItemList } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';

export function App() {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState('');

  const isFirstRender = useRef(true);

  const formSubmitHandler = dataHandle => {
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
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      setContacts(parsedContacts);
    }
  }, []);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <Container title="Phonebook">
      <ContactForm onSubmitProps={formSubmitHandler} />
      <ContactsListWrapper title="Contacts">
        <Filter value={filter} onFilterHandler={onFilterHandler} />
        <ContactsItemList dataContacts={onDataContacts()} onDelete={onDelete} />
      </ContactsListWrapper>
    </Container>
  );
}
