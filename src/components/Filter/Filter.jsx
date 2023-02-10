import { Label, Input, P } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onFilterHandler, value }) => {
  return (
    <Label>
      <P>Find contacts by name</P>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterHandler}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilterHandler: PropTypes.func.isRequired,
};
