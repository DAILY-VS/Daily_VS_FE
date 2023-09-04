import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'NEXON Lv1 Gothic OTF', sans-serif;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    background-color: white;
    transition: background-color 1s ease;
    font-family: "NEXON Lv1 Gothic OTF";
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export default GlobalStyle;
