import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export const FormInput = styled.form`
  width: 350px;
  display: flex;

  input {
    border: 1px solid #fd746c;
    border-radius: 4px 0 0 4px;
    height: 40px;
    flex: 1;
    padding: 15px;
    color: #2c3e50;
  }

  button {
    background: #fd746c;
    color: #fff;
    height: 40px;
    width: 80px;
    border: 1px solid #fd746c;
    border-radius: 0 4px 4px 0;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.05, '#fd746c')};
    }
  }
`;
