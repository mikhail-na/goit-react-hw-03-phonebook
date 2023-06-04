import PropTypes from 'prop-types';

import {
  ContactItem,
  ContactUserName,
  ContactUserNumber,
  Button,
} from './ContactsItem.module';

export const ContactsItem = ({ id, name, number, removeItem }) => {
  return (
    <ContactItem key={id}>
      <ContactUserName>
        {name}:<ContactUserNumber>{number}</ContactUserNumber>
      </ContactUserName>
      <Button onClick={() => removeItem(id)}>X</Button>
    </ContactItem>
  );
};

ContactsItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  removeItem: PropTypes.func.isRequired,
};