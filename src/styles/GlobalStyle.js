import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
    font-family: 'NEXON Lv1 Gothic OTF', sans-serif;
  }

  body {
    width: 100vw;
    display: flex;
    background-color: white;
    transition: background-color 1s ease;
    font-family: "NEXON Lv1 Gothic OTF"; /* body에 폰트 적용 */
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
