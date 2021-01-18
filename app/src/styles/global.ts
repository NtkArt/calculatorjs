import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  margin: 0;
  box-sizing: border-box;
  padding: 0;
  outline: 0;

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Comfortaa, sans-serif;
  }
`;

export default GlobalStyle;
