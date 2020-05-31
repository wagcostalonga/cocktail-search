import React, { useState, useCallback } from 'react';
import { FaAngleRight } from 'react-icons/fa';

import { Container, Card, Line, TextRecipe } from './styles';

const Drinks = ({ drinks }) => {
  const [show, setShow] = useState(false);

  const handleShow = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <Container>
      {drinks.drinks?.map((drink) => (
        <Card key={drink.idDrink}>
          <img src={drink.strDrinkThumb} alt={drink.strDrink} />
          <div>
            <h3>{drink.strDrink}</h3>
            <Line />
            <ul>
              {!!drink.strIngredient1 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure1}
                  {drink.strIngredient1}
                </li>
              )}
              {!!drink.strIngredient2 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure2}
                  {drink.strIngredient2}
                </li>
              )}
              {!!drink.strIngredient3 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure3}
                  {drink.strIngredient3}
                </li>
              )}
              {!!drink.strIngredient4 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure4}
                  {drink.strIngredient4}
                </li>
              )}
              {!!drink.strIngredient5 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure5}
                  {drink.strIngredient5}
                </li>
              )}
              {!!drink.strIngredient6 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure6}
                  {drink.strIngredient6}
                </li>
              )}
              {!!drink.strIngredient7 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure7}
                  {drink.strIngredient7}
                </li>
              )}
              {!!drink.strIngredient8 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure8}
                  {drink.strIngredient8}
                </li>
              )}
              {!!drink.strIngredient9 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure9}
                  {drink.strIngredient9}
                </li>
              )}
              {!!drink.strIngredient10 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure10}
                  {drink.strIngredient10}
                </li>
              )}
              {!!drink.strIngredient11 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure11}
                  {drink.strIngredient11}
                </li>
              )}
              {!!drink.strIngredient12 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure12}
                  {drink.strIngredient12}
                </li>
              )}
              {!!drink.strIngredient13 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure13}
                  {drink.strIngredient13}
                </li>
              )}
              {!!drink.strIngredient14 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure14}
                  {drink.strIngredient14}
                </li>
              )}
              {!!drink.strIngredient15 && (
                <li>
                  <FaAngleRight size={12} color="#fd746c" />
                  {drink.strMeasure15}
                  {drink.strIngredient15}
                </li>
              )}
            </ul>

            <button type="submit" onClick={handleShow}>
              Recipes
            </button>
            {show ? (
              <TextRecipe>
                <p>{drink.strInstructions}</p>
                <p>
                  <strong>Glass: </strong>
                  {drink.strGlass}
                </p>
              </TextRecipe>
            ) : null}
          </div>
        </Card>
      ))}
    </Container>
  );
};

export default Drinks;
