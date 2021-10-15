import {StyleSheet} from 'react-native';

export const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return {styles, theme};
};
