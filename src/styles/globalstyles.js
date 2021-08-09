import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}


  body .Toastify .Toastify__toast-container .Toastify__toast--success{
    background: #3D348B;
    font-size: 1.7rem;
    color: #E0E2DB;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--dark {
    font-size: 1.7rem;
    color: #E0E2DB;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--info {
    font-size: 1.7rem;
    color: #E0E2DB;
  }
  body .Toastify .Toastify__toast-container .Toastify__toast--error{
    background: #C52B23;
    font-size: 1.7rem;
    color: #E0E2DB;
  }
`;

export default GlobalStyles;
