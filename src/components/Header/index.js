import React from 'react';
import { FaCocktail } from 'react-icons/fa';

import { Container } from './styles';

function Header() {
  return (
    <Container>
      <FaCocktail size="25" color="#fd746c" />
      <h2>Cocktail Search</h2>
    </Container>
  );
}

export default Header;
