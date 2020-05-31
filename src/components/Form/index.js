import React from 'react';

import { Container, FormInput } from './styles';

const Form = ({ handleSubmit }) => (
  <Container>
    <FormInput onSubmit={handleSubmit}>
      <input
        type="text"
        name="drinkName"
        placeholder="What do you want to drink today?"
      />
      <button className="btnInput" type="submit">
        Search
      </button>
    </FormInput>
  </Container>
);

export default Form;
