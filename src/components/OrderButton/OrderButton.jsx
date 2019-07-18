import styled from 'styled-components';

const OrderButton = styled.button.attrs({
  type: 'button'
})`
  background-color: #fff;
  &:focus {
    outline: none;
  }
`;

export default OrderButton;
