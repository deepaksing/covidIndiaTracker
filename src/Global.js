import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    transition: all 0.50s ease-in-out;
  }

  button {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    border: 2px solid ${({ theme }) => theme.text};
    border-radius:15px;
  }

  p {
    color: ${({ theme }) => theme.text};
  }
  th,td {
    color: ${({ theme }) => theme.text};
    border: 3px solid ${({ theme }) => theme.border};
  }
  td:hover {
    background: ${({ theme }) => theme.hover};
  }

  `;