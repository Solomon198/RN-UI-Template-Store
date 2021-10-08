import {DEFAULT_DARK_THEME} from './dark.theme';
import {DEFAULT_LIGHT_THEME} from './light.theme';
import {ThemeAction} from './theme.actions';

const initialState = {
  DEFAULT_DARK_THEME,
  DEFAULT_LIGHT_THEME,
  theme: DEFAULT_LIGHT_THEME,
};

export default function ThemeReducer(state = initialState, action: any) {
  switch (action.type) {
    case ThemeAction.TOGGLE_THEME: {
      if (state.theme.id === DEFAULT_LIGHT_THEME.id) {
        state = {...state, theme: DEFAULT_DARK_THEME};
      } else {
        state = {...state, theme: DEFAULT_LIGHT_THEME};
      }
      return state;
    }
  }

  return state;
}
