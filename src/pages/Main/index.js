import React, { useCallback, useState } from 'react';

import Header from '../../components/Header';
import Form from '../../components/Form';
import Card from '../../components/Card';

import api from '../../services/api';

import { Container } from './styles';

function Main() {
  const [drinks, setDrinks] = useState([]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const drinkName = e.target.elements.drinkName.value;
    const response = await api.get(`search.php?s=${drinkName}`);
    const { data } = response;

    if (drinkName !== '') {
      setDrinks(data);
    }
  }, []);

  return (
    <>
      <Header />
      <Form handleSubmit={handleSubmit} />
      <Container>
        {drinks.drinks?.map((drink) => {
          return <Card key={drink.idDrink} drink={drink} />;
        })}
      </Container>
    </>
  );
}

export default Main;
