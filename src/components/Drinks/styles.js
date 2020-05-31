import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  background: #fff;
  width: 300px;
  min-height: 600px;
  margin: 0 12px 24px 12px;
  border-radius: 4px;
  box-shadow: 5px 5px 5px #ddd;

  img {
    width: 100%;
    height: auto;
    border-radius: 4px 4px 0 0;
  }

  > div {
    padding: 20px 20px 40px 20px;
    display: flex;
    flex-direction: column;

    ul {
      margin-bottom: 20px;
      list-style: none;

      li {
        display: flex;
        align-items: center;

        & + li {
          margin-top: 3px;
        }
      }

      li > svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Line = styled.div`
  content: '';
  width: 100%;
  border-top: 1px solid #fd746c;
  margin: 20px 0;
`;

export const TextRecipe = styled.div`
  p + p {
    margin-top: 10px;
  }
`;
