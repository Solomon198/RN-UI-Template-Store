import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    icon: {
      fontSize: 20,
    },
    container: {
      flexDirection: 'row',
      alignContent: 'center',
      alignItems: 'center',
      margin: 5,
    },
    containerItem: {
      flex: 1,
      margin: 3,
    },
    checkoutButton: {
      backgroundColor: theme.color.primary,
    },
    checkoutButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 17,
      letterSpacing: 1,
    },
    priceButton: {
      backgroundColor: theme.color.foreground,
    },
    priceButtonText: {
      color: theme.color.text,
      fontWeight: '700',
      fontSize: 17,
    },
  });

  return {styles, theme};
};

export default createStyle;
