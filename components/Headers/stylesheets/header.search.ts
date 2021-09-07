import {StyleSheet} from 'react-native';

export const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    // *********** NORMAL HEADER STYLES **************
    title: {
      color: theme.color.text,
      fontSize: 17,
    },
    // ************** SEARCHEADER STYLES
    icon: {
      color: theme.color.icon,
    },
    sideButtons: {
      backgroundColor: 'transparent',
    },
    header: {
      flexDirection: 'row',
      backgroundColor: theme.color.foreground,
      borderRadius: 10,
      marginVertical: 10,
      marginHorizontal: 20,
    },
    sideItems: {
      maxWidth: 50,
    },
    itemCenter: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center',
    },
    searchInput: {
      borderColor: 'transparent',
      borderWidth: 0,
      flex: 1,
    },
  });

  return {styles, theme};
};
