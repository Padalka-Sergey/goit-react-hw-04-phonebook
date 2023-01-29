import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

export const Filter = ({ onFilterHandler, value }) => {
  // console.log(value);
  return (
    <Label>
      Find contacts by name
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
