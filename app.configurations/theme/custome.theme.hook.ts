import React from 'react';
import {useTheme} from './theme.ui.context';
// Create a type alias for our generator function
// Notice that it's matching the form of the 'createStyles'
// function which we've used previously

const useThemeAwareObject = (fn: any) => {
  // Consume the provided value of our theme context
  const {theme} = useTheme();
  // Generate the object based on the current theme
  // We're using the React.useMemo hook for optimization,
  // the object will be re-generated if the theme changes
  // or the generator function reference changes
  const ThemeAwareObject = React.useMemo(() => fn(theme), [fn, theme]);
  return ThemeAwareObject;
};
export {useThemeAwareObject};
