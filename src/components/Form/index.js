import React from 'react';

import { Container, FormInput } from './styles';

const Form = ({ handleSubmit }) => (
  <Container>
    <FormInput onSubmit={handleSubmit}>
      <input
        type="text"
        name="recipeName"
        placeholder="Let's choose a drink!"
      />
      <button type="submit">Search</button>
    </FormInput>
  </Container>
);

export default Form;
