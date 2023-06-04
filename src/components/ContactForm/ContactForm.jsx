import React from 'react';
// import PropTypes from 'prop-types';
// import Formik  from 'formik';

import { Form, Input, Label, Button } from './ContactForm.module';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };


  onInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  
  onFormSubmit = event => {
    event.preventDefault();
    const { addContact } = this.props;
    
    addContact({ ...this.state });
    this.setState({ name: '', number: '' });


  };

  render() {
    const { name, number } = this.state;

    return (
      <Form onSubmit={this.onFormSubmit} autoComplete="off">
        <Label>
          NAME
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='Enter Name...'
            value={name}
            onChange={this.onInputChange}
          />
        </Label>
        <Label>
          NUMBER
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter number..."
            value={number}
            onChange={this.onInputChange}
          />
        </Label>
        <Button
          type="submit"
          disabled={!name && !number}>
          Add
        </Button>
      </Form>
    );
  }
}