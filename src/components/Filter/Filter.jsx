import PropTypes from 'prop-types';
import { Label, Input } from './Filter.module';

export const Filter = ({ value, handleChangeFilter }) => {
  const label = 'Find contacts by name';
  return (
    <Label>
     {label.toUpperCase()}
      <Input
        type="text"
        name="filter"
        placeholder="Enter contact name..."
        value={value}
        onChange={handleChangeFilter}
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChangeFilter: PropTypes.func.isRequired,
};