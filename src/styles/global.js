import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');

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
  font-family: "Roboto", sans-serif;
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
