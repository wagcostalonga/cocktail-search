import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  height: auto;
  padding: 0 20px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap: 20px;
  justify-content: center;
`;
