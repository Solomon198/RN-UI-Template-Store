import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    columnStyle: {
      margin: 10,
    },
  });

  return {styles, theme};
};

export default createStyle;
