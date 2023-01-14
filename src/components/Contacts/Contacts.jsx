import { Li, Ul, P, Button } from './Contacts_css';

import PropTypes from 'prop-types';

export const Contacts = ({data, onDeliteContact}) => {
      return (
          <Ul>
                  {data.map(({ id, name, number }) => (
                  <Li key={id}>
                              <P>{name}: {number}</P>
                              <Button onClick={() => onDeliteContact(id)}>Delite</Button>
                  </Li>))}
          </Ul>)
};
    
Contacts.propTypes = {
      data: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            number: PropTypes.string.isRequired,
      })),
      handleDelite: PropTypes.func,
}