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
      --color-typo: ${props => props.theme.colors.typo};
      --color-typo-light: ${props => props.theme.colors.typo_light};
      --color-typo-dark: ${props => props.theme.colors.typo_dark};
      --color-bg: ${props => props.theme.colors.bg};
      --color-bg-light: ${props => props.theme.colors.bg_light};
      --color-bg-dark: ${props => props.theme.colors.bg_dark};
      --color-primary: ${props => props.theme.colors.primary};
      --color-secondary: ${props => props.theme.colors.secondary};
      --shadow-light: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.1);
      --shadow-dark: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.25);
    }
    body {
      font-size: 1.6rem;
    }
`;