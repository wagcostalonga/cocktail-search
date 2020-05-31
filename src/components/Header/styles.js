import styled from 'styled-components';

export const Container = styled.header`
  max-width: 1200px;
  margin: auto;
  padding: 40px 0 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  img {
    width: 300px;
  }

  small {
    align-self: flex-end;
    position: absolute;
    top: 180px;
  }

  @media (max-width: 1200px) {
    padding: 40px 40px 20px 40px;
  }
`;

export const Line = styled.div`
  content: '';
  width: 100%;
  border-top: 1px solid #fd746c;
  margin: 20px 0 0 0;
`;
