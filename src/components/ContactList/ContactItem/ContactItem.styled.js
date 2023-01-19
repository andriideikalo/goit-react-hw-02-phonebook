import styled from '@emotion/styled';

const ContactItemStyled = styled.li`
  margin-bottom: 20px;
  /* list-style: lower-greek; */
  span {
    display: inline-block;
    margin-right: 10px;
  }

  button {
    cursor: pointer;
    background-color: lightgray;
    border-radius: 5px;
    border: none;
    &:hover,
    &:focus {
      background-color: tomato;
      color: white;
      outline: 0;
    }
  }
`;

export default ContactItemStyled;
