import React from 'react';

import logo from '../../assets/logo_cocktail-search.svg';

import { Container, Line } from './styles';

function Header() {
  return (
    <Container>
      <img src={logo} alt="Cocktail Search" />
      <Line />
      <small>by Wagner Costalonga</small>
    </Container>
  );
}

export default Header;
