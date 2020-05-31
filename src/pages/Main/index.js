import React, { useCallback, useState } from 'react';

import Header from '../../components/Header';
import Form from '../../components/Form';
import Drinks from '../../components/Drinks';

import api from '../../services/api';

// import { } from './styles';

function Main() {
  const [drinks, setDrinks] = useState([]);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    const drinkName = e.target.elements.recipeName.value;
    const response = await api.get(`search.php?s=${drinkName}`);
    const { data } = response;
    setDrinks(data);
  }, []);

  console.log(drinks);

  return (
    <>
      <Header />
      <Form handleSubmit={handleSubmit} />
      <Drinks drinks={drinks} />
    </>
  );
}

export default Main;
