import { Component } from "react";
import { Label, Input, Button } from "./ContactForm_css";

import { nanoid } from 'nanoid';
import PropTypes from 'prop-types'

export class ContactForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    name: '',
    number: '',
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleAddContact = (e) => {
    e.preventDefault();

    const { name, number } = e.currentTarget.elements;

    this.props.onSubmit({
      name: name.value,
      number: number.value,
      id: nanoid(),
    });

    this.setState({
        name: '',
        number: '',
        });
  }

  render() {
  
   const { name, number } = this.state;

    return (
      <form onSubmit={this.handleAddContact} >
        <Label>Name <Input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        /></Label>
        <Label>Number <Input
          type="tel"
          name="number"
          onChange={this.handleChange}
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        /></Label>
            
        <Button type="submit" text="Add contact">Add contact</Button>
      </form>)
  }
}