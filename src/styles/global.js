import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`


*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  background: #eee;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: "Arial", sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: #333;
}

h2, h3, strong {
  font-weight: 400;
}

button {
  cursor: pointer;
}
`;
