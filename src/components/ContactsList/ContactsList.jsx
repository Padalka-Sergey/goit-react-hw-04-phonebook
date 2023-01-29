import PropTypes from 'prop-types';

import { ContactsListBox, ContactsListTitle } from './ContactsList.styled';

export const ContactsList = ({ title, children }) => {
  return (
    <ContactsListBox>
      <ContactsListTitle>{title}</ContactsListTitle>
      {children}
    </ContactsListBox>
  );
};

ContactsList.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
