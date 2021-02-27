import { assetPath } from 'lib/utils';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    overflow: hidden;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    background-color: ${({ theme }) => theme.colors.black};
  }
  html {
    box-sizing: border-box;
    font-size: 16px;
    background-color: ${({ theme }) => theme.colors.black};
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, button {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.colors.white};
  }

  input::placeholder {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    color: ${({ theme }) => theme.colors.licorice};
    font-size: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.licorice};
    font-weight: 400;
  }

  button, a {
    font-family: ${({ theme }) => theme.fontFamily.primary};
    width: fix-content;
    border: 0;
  }

  ol, ul {
    list-style: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  * {
    box-sizing: border-box;
  }

  .scroll {
    overflow: hidden;
    overflow-x: hidden;
    outline: none;
    cursor: pointer;

    &::-webkit-scrollbar {
      width: 1em;
      width: 4px;
    }

    &:hover {
      overflow-y: overlay;
    }

    &::-webkit-scrollbar-thumb {
      width: 4px;
      height: 70px;
      background-color: ${({ theme }) => theme.colors.ash};
      outline: none;
      border-radius: 4px;
    }
  }

  .Toastify__toast {
    min-height: 43px;
    align-items: center;
    flex-direction: row-reverse;
  }

  .Toastify__toast-body {
    width: 90%;
  }

  .Toastify__close-button {
    align-self: center;
    opacity: 1;
  }

  .Toastify__toast--success {
    background: #33AB77;
    width: 263px;
  }

  .Toastify__toast--success:after {
    content: "";
    display: flex;
    transform: rotate(45deg);
    height: 18px;
    width: 9px;
    margin-left: 3%;
    margin-bottom: 5px;
    border-bottom: 2px solid #FFF;
    border-right: 2px solid #FFF;
  }

  .Toastify__close-button--default {
    color: #FFF;
  }

  .Toastify__toast--default {
    background: #384A58;
    color: #FFF;
    border-radius: 8px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    width: max-content;
  }

  @font-face {
      font-family: 'Work Sans';
      src: url('WorkSans-Bold.eot');
      src: local('Work Sans Bold'), local('WorkSans-Bold'),
          url(${assetPath('fonts/WorkSans-Bold.ttf')}) format('truetype');
      font-weight: bold;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Work Sans';
      src: url('WorkSans-Light.eot');
      src: local('Work Sans Light'), local('WorkSans-Light'),
          url(${assetPath('fonts/WorkSans-Light.ttf')}) format('truetype');
      font-weight: 300;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Work Sans';
      src: url('WorkSans-SemiBold.eot');
      src: local('Work Sans SemiBold'), local('WorkSans-SemiBold'),

          url(${assetPath('fonts/WorkSans-SemiBold.ttf')}) format('truetype');
      font-weight: 600;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Work Sans';
      src: local('Work Sans Regular'), local('WorkSans-Regular'),
          url(${assetPath('fonts/WorkSans-Regular.ttf')}) format('truetype');
      font-weight: normal;
      font-style: normal;
      font-display: swap;
  }

  @font-face {
      font-family: 'Work Sans';
      src: url('WorkSans-Medium.eot');
      src: local('Work Sans Medium'), local('WorkSans-Medium'),
          url(${assetPath('fonts/WorkSans-Medium.ttf')}) format('truetype');
      font-weight: 500;
      font-style: normal;
      font-display: swap;
  }
`;

export default GlobalStyle;
