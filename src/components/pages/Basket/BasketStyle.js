import styled from 'styled-components';

const BasketStyle = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  & > div {
    margin: 10px;
  }
`;

export default BasketStyle;
