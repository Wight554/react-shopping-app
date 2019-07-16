import styled from 'styled-components';

const CatalogButton = styled.button.attrs({
  type: 'button'
})`
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;

export default CatalogButton;