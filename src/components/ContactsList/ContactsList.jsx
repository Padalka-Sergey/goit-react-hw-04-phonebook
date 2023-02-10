import PropTypes from 'prop-types';
import { ContactsItem } from 'components/ContactItem/ContactItem';
import { Filter } from 'components/Filter/Filter';

import {
  ContactsListBox,
  ContactsListTitle,
  ContactItems,
} from './ContactsList.styled';

export const ContactsListWrapper = ({
  title,
  value,
  onFilterHandler,
  dataContacts,
  onDelete,
}) => {
  return (
    <ContactsListBox>
      <ContactsListTitle>{title}</ContactsListTitle>
      <Filter value={value} onFilterHandler={onFilterHandler} />
      {dataContacts.length !== 0 && (
        <ContactItems>
          {dataContacts.map(({ name, number, id }) => (
            <ContactsItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDelete={onDelete}
            ></ContactsItem>
          ))}
        </ContactItems>
      )}
    </ContactsListBox>
  );
};

ContactsListWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  onFilterHandler: PropTypes.func.isRequired,
  dataContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      value: PropTypes.string,
    })
  ),
};
