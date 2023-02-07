import PropTypes from 'prop-types';
import { ContactItems, ContactItem, Span, Btn } from './ContactItem.styled';

export const ContactsItemList = ({ dataContacts, onDelete }) => {
  return (
    dataContacts.length !== 0 && (
      <ContactItems>
        {dataContacts.map(({ name, number, id }) => (
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
};

ContactsItemList.propTypes = {
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
