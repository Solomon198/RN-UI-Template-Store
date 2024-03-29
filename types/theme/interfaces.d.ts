/**
 *  `color` **object** - An object containing properties of different colors application
 *   - - `background` - color to be applied to  ***View*** components
 *     - `foreground` - color to be applied to overlays on top of background
 *     - `text` - color to be applied on **Text** components
 *     - `primary` - This is the brand color, can be used at anytime
 *     - `icon`    - color to be applied on icons
 *     - `statusBar` - color to be applied on status bar
 *
 *  */
interface ApplicationColorVariant {
  background: string;
  foreground: string;
  text: string;
  primary: string;
  icon: string;
  statusBar: string;
  secondary: string;
}

/**
 *  `spacing` **object** - Amount of space to be applied between elements
 *   - - `base` - Normal spacing to be applied between views or text
 *     - `double` - double amount of normal spacing
 *
 *  */
interface ApplicationSpacing {
  base: number;
  double: number;
}

interface themeProps {
  spacing: ApplicationSpacing;
  color: ApplicationColorVariant;
  id: string;
}

interface ThemeObject {
  DEFAULT_DARK_THEME: themeProps;
  DEFAULT_LIGHT_THEME: themeProps;
  theme: themeProps;
}
