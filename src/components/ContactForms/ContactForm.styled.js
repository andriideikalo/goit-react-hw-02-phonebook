import styled from '@emotion/styled';

export const FormStyled = styled.form`
  border: 1px solid black;
  padding: 20px;
  width: fit-content;

  label {
    display: block;
  }
  input {
    display: block;
    margin-bottom: 20px;
    :hover,
    :focus,
    :active,
    :focus-visible {
      border-color: aquamarine;
      outline: 0;
    }
  }
  button {
    cursor: pointer;
    background-color: lightgray;
    border-radius: 5px;
    border: none;
    &:hover,
    &:focus {
      background-color: blue;
      color: white;
      /* border: none; */
      outline: 0;
    }
  }
`;
// export const LabelStyled = styled.label`
//   display: block;
// `;

// export const BottonStyled = styled.button`
//   cursor: pointer;
//   background-color: lightgray;
//   border-radius: 5px;
//   border: none;
//   &:hover {
//     background-color: blue;
//     color: white;
//   }
// `;

// export const InputStyled = styled.input`
//   display: block;
//   margin-bottom: 20px;
//   /* &:hover {
//     background-color: blue;
//     color: white;
//   } */
// `;
export default FormStyled;
// export default Input;
