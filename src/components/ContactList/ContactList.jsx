import PropTypes from 'prop-types';
import { ContactsList } from './ContactList.module';
import { ContactsItem } from '../ContactsItem/ContactsItem';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ContactsList>
      {contacts.map(({ name, number, id }) => (
        <ContactsItem
          key={id}
          id={id}
          name={name}
          number={number}
          removeItem={removeContact}
        />
      ))}
    </ContactsList>
  );
};



ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape(
    {
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }
  )).isRequired,
  removeContact: PropTypes.func.isRequired
}