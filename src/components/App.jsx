import { useEffect, useRef, useState } from 'react';

import { Section } from './Section/Section';
import { Contacts } from './Contacts/Contacts';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

// [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//     {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//     {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//     {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]

export function App () {

  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  
  const isFirstRender = useRef(true);

  useEffect(() => {
    const userContacts = JSON.parse(localStorage.getItem('UserContacts'));

    if (userContacts) {
      setContacts(userContacts);
    }
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem('UserContacts', JSON.stringify(contacts));
    }, [contacts])
 
  const handleFilter = (e) => {
    const { value } = e.target;
    setFilter(value);
  }
  
  const handleFormSubmit = (newContact) => {
    const normalizeNewContactName = newContact.name.toLowerCase();
    
    contacts.find(contact => contact.name.toLowerCase() === normalizeNewContactName) ? alert(`${newContact.name} is already incontacts`) : setContacts((prevState) => { return [...prevState, newContact] });
  }

  const handleDelite = (id) => {
    setContacts( contacts.filter(contact => contact.id !== id))
  }

  const toFiltredContacts = () => {
    const normalizeFilter = filter.toLowerCase();
    return (contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter)));
  }
  
  const filtredContacts = toFiltredContacts();
    
    return (
      <>
        <Section title="Phonebook">
          <ContactForm onSubmit={handleFormSubmit}></ContactForm>
        </Section>
          
        <Section title="Contacts">
          <Filter value={filter} onChange={handleFilter}></Filter>
          <Contacts data={filtredContacts} onDeliteContact={handleDelite}> </Contacts>
        </Section> 
        
      </>
    );
  
};
