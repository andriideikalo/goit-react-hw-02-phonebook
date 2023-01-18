import { PropTypes } from 'prop-types';
import React from 'react';
// import ContactItemStyled from './ContactItem.styled';

const ContactItem = ({ contact, onDelete }) => {
  const { id, name, number } = contact;
  return (
    <div>
      <span>
        {name}: {number}
      </span>
      <button onClick={() => onDelete(id)} type="button">
        Delete
      </button>
    </div>
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
