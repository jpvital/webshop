import { createGlobalStyle } from "styled-components";
export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
    }

    *,
    *::before,
    *::after {
      box-sizing: inherit;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    html {
      font-size: 62.5%;
      --color-primary: ${props => props.theme.COLORS.PRIMARY};
      --color-secondary: ${props => props.theme.COLORS.SECONDARY};
      --color-error: ${props => props.theme.COLORS.ERROR};
      --shadow-light: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
      --shadow-dark: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);
    }
    body {
      font-size: 1.6rem;
    }
`;