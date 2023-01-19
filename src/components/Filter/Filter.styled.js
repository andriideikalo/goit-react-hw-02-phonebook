import styled from '@emotion/styled';

const FilterStyled = styled.div`
  label {
    display: block;
    margin-bottom: 10px;
  }
  input {
    display: block;
    margin-bottom: 20px;
    &:hover,
    &:focus,
    &:active,
    &:focus-visible {
      outline: 0;
      border-color: aquamarine;
    }
  }
`;

export default FilterStyled;
