import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    primary: '#1e213a',
    secondary: '#100e1d',
    tertiary: '#3c47e9',
    grey: '#6e707a',
    white: '#ffffff'
  },
  fonts: {
    base: '18px'
  }
}

const Theme = ({children}) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
)

export default Theme;