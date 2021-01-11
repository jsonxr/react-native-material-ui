import React from 'react';
import { Theme } from './Theme';
import defaultTheme from './defaultTheme';

const ThemeContext = React.createContext<Theme>(defaultTheme);

if (process.env.NODE_ENV !== 'production') {
  ThemeContext.displayName = 'ThemeContext';
}

export default ThemeContext;