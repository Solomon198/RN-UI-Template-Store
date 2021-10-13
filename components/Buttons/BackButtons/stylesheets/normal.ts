import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    button: {
      backgroundColor: 'transparent',
      opacity: 0.8,
    },
  });

  return {styles, theme};
};

export default createStyle;
