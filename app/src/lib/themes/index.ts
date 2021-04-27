import { DefaultTheme } from 'styled-components';
import { ZIndex, Colors, FontFamily, FontSizes } from './interface';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    fontSizes: FontSizes;
    fontFamily: FontFamily;
    secondaryColor: string;
    primaryColor: string;
    zIndex: ZIndex;
  }
}

const appTheme: DefaultTheme = {
  primaryColor: '#6371F3',
  secondaryColor: '#384A58',
  colors: {
    oxford: '#384A58',
    tiara: '#C7CDD1',
    primary: '#6371F3 ',
    fresh: '#33AB77 ',
    purple: '#6371F3',
    translucentPurple: '#6371F380',
    licorice: '#2D3B45',
    black: '#21282C',
    white: '#FFFFFF',
    red: '#F55157',
    yellow: '#F5BF4F',
    ash: '#8B969E',
    altAsh: '#556572',
    orange: '#ED6B5F',
    green: '#64C857',
    transparent: 'transparent',
    dark: '#000000',
    darkAsh: '#61707B',
    porcelain: '#F5F5F5',
    tarawera: '#2B3B46',
    melon: '#F55157',
    electric: '#6371F3',
    inputError: '#FEE3E3',
    greyishNavy: '#565661',
    ashButtonIconColor: '#778594',
    unbirdBlue: '#18C1E0',
    pinkTint200: '#FAA0A0',
    greenTint500: '#D0F9E8'
  },
  fontSizes: {
    header: '22px',
    body: '16px',
  },
  fontFamily: {
    primary: '"Work Sans", sans-serif',
  },
  zIndex: {
    search: 30,
    modal: 31,
    menuBase: 31,
    popover: 10,
    joinConversation: 28,
    closeButton: 29,
    previewControls: 2,
  },
};

export default appTheme;
