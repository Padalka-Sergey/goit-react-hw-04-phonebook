import PropTypes from 'prop-types';
import { ContactItem, Span, Btn } from './ContactItem.styled';

export const ContactsItem = ({ name, number, id, onDelete }) => {
  return (
    <ContactItem>
      {name}: <Span>{number}</Span>
      <Btn type="button" onClick={() => onDelete(id)}>
        Delete
      </Btn>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
