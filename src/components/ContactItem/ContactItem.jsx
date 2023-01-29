import PropTypes from 'prop-types';
import { ContactItems, ContactItem, Span, Btn } from './ContactItem.styled';

export const ContactsItem = ({ contacts, filterContacts, onDelete }) => {
  // console.log(contacts);
  // console.log(filterContacts);

  if (filterContacts !== null) {
    return (
      <ContactItems>
        {filterContacts.map(({ name, number, id }) => (
          <ContactItem key={id}>
            {name}: <Span>{number}</Span>
          </ContactItem>
        ))}
      </ContactItems>
    );
  } else {
    return (
      contacts.length !== 0 && (
        <ContactItems>
          {contacts.map(({ name, number, id }) => (
            <ContactItem key={id}>
              {name}: <Span>{number}</Span>
              <Btn type="button" onClick={() => onDelete(id)}>
                Delete
              </Btn>
            </ContactItem>
          ))}
        </ContactItems>
      )
    );
  }
};

ContactsItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filterContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
