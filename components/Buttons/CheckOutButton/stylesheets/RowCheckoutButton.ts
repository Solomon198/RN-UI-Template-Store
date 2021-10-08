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
      height: 60,
      justifyContent: 'center',
    },
    containerItem: {
      margin: 3,
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      borderRadius: 50,
    },
    totalPrice: {
      fontSize: 10,
    },
    checkoutButton: {
      backgroundColor: theme.theme.color.primary,
      flex: 2,
    },
    checkoutButtonText: {
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: 15,
      letterSpacing: 1,
    },
    priceButton: {
      backgroundColor: theme.theme.color.background,
      borderRadius: 50,
      marginRight: -20,
      flex: 3,
    },
    priceButtonText: {
      color: theme.theme.color.text,
      fontWeight: '700',
      fontSize: 25,
    },
  });

  return {styles, theme};
};

export default createStyle;
