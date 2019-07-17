import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BasketButton = styled(Link).attrs({ to: '/order' })`
  width: 110px;
  font-size: 30px;
  text-align: center;
  background-color: #fff;
  border: solid 3px #333;
  color: #333;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 3px;
  &:hover {
    background-color: #eee;
    cursor: pointer;
  }
  &:active {
    top: 2px;
  }
`;

export default BasketButton;
