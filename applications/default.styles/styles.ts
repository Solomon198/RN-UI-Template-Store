import {StyleSheet} from 'react-native';

export const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    containerStyle: {
      backgroundColor: theme.theme.color.background,
      flex: 1,
    },
    textStyle: {
      color: theme.theme.color.text,
    },
    background: {
      color: theme.theme.color.background,
    },
    listItem: {
      flexDirection: 'row',
      padding: 10,
    },
    left: {
      maxWidth: 50,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    right: {
      maxWidth: 50,
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    center: {
      flexGrow: 1,
      justifyContent: 'center',
      marginHorizontal: 10,
    },
  });

  return styles;
};
