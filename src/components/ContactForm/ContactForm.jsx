import { useState } from "react";
import { Label, Input, Button } from "./ContactForm_css";

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'

export function ContactForm ({onSubmit}) {

  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleChange = (e) => {
    const {name, value } = e.target;
    switch (name) {
      case ('contactName'):
        setContactName(value);
        break;
      case ('contactNumber'):
        setContactNumber(value);
        break;
      default:
        setContactName('');
        setContactNumber('');
        break;
    }    
  }

  const handleAddContact = (e) => {
    e.preventDefault();

    const { contactName, contactNumber } = e.currentTarget.elements;

    onSubmit({
      name: contactName.value,
      number: contactNumber.value,
      id: nanoid(),
    });

    setContactName('');
    setContactNumber('');
  }

  
    return (
      <form onSubmit={handleAddContact} >
        <Label>Name <Input
          type="text"
          name="contactName"
          onChange={handleChange}
          value={contactName}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></Label>
        <Label>Number <Input
          type="tel"
          name="contactNumber"
          onChange={handleChange}
          value={contactNumber}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /></Label>
            
        <Button type="submit" text="Add contact">Add contact</Button>
      </form>)
  }


ContactForm.propTypes = {
    onSubmit: PropTypes.func,
  };