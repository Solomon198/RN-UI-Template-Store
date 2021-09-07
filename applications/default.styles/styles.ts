import {StyleSheet} from 'react-native';

export const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    containerStyle: {
      backgroundColor: theme.color.background,
      flex: 1,
    },
    textStyle: {
      color: theme.color.text,
    },
  });

  return styles;
};
