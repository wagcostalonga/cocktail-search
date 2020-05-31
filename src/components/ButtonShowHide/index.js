import React from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

import { Container } from './styles';

export function ButtonIngredients({ showHideIngredients, handleIngredients }) {
  return (
    <Container type="submit" onClick={handleIngredients}>
      <span className="ingredientsTitle">Ingredients</span>
      {showHideIngredients ? (
        <FaAngleUp size={12} color="#fd746c" />
      ) : (
        <FaAngleDown size={12} color="#fd746c" />
      )}
    </Container>
  );
}

export function ButtonInstructions({
  showHideInstructions,
  handleInstructions,
}) {
  return (
    <Container type="submit" onClick={handleInstructions}>
      <span className="instructionsTitle">Instructions</span>
      {showHideInstructions ? (
        <FaAngleUp size={12} color="#fd746c" />
      ) : (
        <FaAngleDown size={12} color="#fd746c" />
      )}
    </Container>
  );
}
