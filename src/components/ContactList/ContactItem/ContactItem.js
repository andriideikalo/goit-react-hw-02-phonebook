import { PropTypes } from 'prop-types';
import React from 'react';
import { ContactItemStyled } from './ContactItem.styled';
import { ContactNameItemStyled } from './ContactItem.styled';
import { ButtonItemStyled } from './ContactItem.styled';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <ContactItemStyled>
      <ContactNameItemStyled>
        {name}: {number}
      </ContactNameItemStyled>
      <ButtonItemStyled onClick={() => onDelete(id)} type="button">
        Delete
      </ButtonItemStyled>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),

  onDelete: PropTypes.func,
};

export default ContactItem;
