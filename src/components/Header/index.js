import React from 'react';

import logo from '../../assets/logo_cocktail-search.svg';

import { Container, Divisor } from './styles';

function Header() {
  return (
    <Container>
      <img src={logo} alt="Cocktail Search" />
      <Divisor />
      <small>by Wagner Costalonga</small>
    </Container>
  );
}

export default Header;
