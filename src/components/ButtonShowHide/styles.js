import styled from 'styled-components';

export const Container = styled.button`
  background: transparent;
  border: 0;
  border-bottom: 1px solid #fd746c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 120px;

  & + button {
    margin-top: 20px;
  }

  span {
    color: #fd746c;
  }
`;
