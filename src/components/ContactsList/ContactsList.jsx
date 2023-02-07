import PropTypes from 'prop-types';

import { ContactsListBox, ContactsListTitle } from './ContactsList.styled';

export const ContactsListWrapper = ({ title, children }) => {
  return (
    <ContactsListBox>
      <ContactsListTitle>{title}</ContactsListTitle>
      {children}
    </ContactsListBox>
  );
};

ContactsListWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
