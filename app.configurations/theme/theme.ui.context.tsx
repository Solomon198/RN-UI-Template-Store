import React from 'react';
import {DEFAULT_LIGHT_THEME} from './light.theme';
import {ThemeAction} from './theme.actions';
import {useSelector, useDispatch} from 'react-redux';

// Creating our context
// Important: the defined object here is only received by the
// consumer components when there is no rendered context provider
// in the view hierarchy, so basically it will provide
// a fallback object
export const ThemeContext = React.createContext({
  theme: DEFAULT_LIGHT_THEME,
  toggleTheme: () => {
    console.log('ThemeProvider is not rendered!');
  },
});

type Props = {
  children: any;
  toggleTheme: () => void;
  theme?: theme.ApplicationTheme;
};
const ThemeProvider = React.memo((props: any) => {
  const {theme} = useSelector((store: any) => ({
    theme: store.Theme.theme,
  }));
  const dispatch = useDispatch();
  const handleChangeTheme = React.useCallback(() => {
    dispatch({type: ThemeAction.TOGGLE_THEME});
  }, []); // eslint-disable-line

  const memoizedValue = React.useMemo(() => {
    const value = {
      theme: theme,
      toggleTheme: handleChangeTheme,
    };
    return value;
  }, [theme, handleChangeTheme]);

  return (
    <ThemeContext.Provider value={memoizedValue}>
      {props.children}
    </ThemeContext.Provider>
  );
});

export default ThemeProvider;
