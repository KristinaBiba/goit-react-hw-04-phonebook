import { Component } from 'react';

import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

// [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]

export class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }
   
  componentDidMount() {
    const userContacts = JSON.parse(localStorage.getItem('UserContacts'));

    if (userContacts)
    this.setState ({contacts: userContacts}) ;
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('UserContacts', JSON.stringify(this.state.contacts));
    }
  };

  handleFilter = (e) => {
    const { value } = e.target;
    this.setState({filter: value})
  }
  
  handleFormSubmit = (newContact) => {
    const normalizeNewContactName = newContact.name.toLowerCase();
    
    this.state.contacts.find(contact => contact.name.toLowerCase() === normalizeNewContactName) ? alert(`${newContact.name} is already incontacts`) : this.setState((prevState) => { return { contacts: [...prevState.contacts, newContact] } });
  }

  handleDelite = (id) => {

    this.setState(prevState => ({contacts: prevState.contacts.filter(contact => contact.id !== id)}))
  }

  toFiltredContacts = () => {
    const normalizeFilter = this.state.filter.toLowerCase();
     return this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter));
  }

  render() {

    const {filter} = this.state;
    const filtredContacts = this.toFiltredContacts();
    
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={this.handleFormSubmit}></ContactForm>
        </Section>
          
        <Section title="Contacts">
          <Filter value={filter} onChange={this.handleFilter}></Filter>
          <Contacts data={filtredContacts} onDeliteContact={this.handleDelite}> </Contacts>
        </Section> 
        
      </>
    );
  }
};
