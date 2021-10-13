import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    infoBox: {
      backgroundColor: theme.theme.color.foreground,
      paddingVertical: 3,
      paddingHorizontal: 10,
      borderRadius: 10,
      borderColor: 'whitesmoke',
      borderWidth: 1,
      flexGrow: 1,
      marginHorizontal: 5,
    },
    infoLabelContainer: {},
    labelText: {
      fontSize: 12,
      color: theme.theme.color.primary,
      fontWeight: 'bold',
    },
    infoTextContainer: {},
    infoText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

  return {styles, theme};
};

export default createStyle;
