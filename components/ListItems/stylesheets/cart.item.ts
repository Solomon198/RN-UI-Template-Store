import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    quantityContainer: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      alignContent: 'center',
      marginRight: 10,
      flex: 1,
      elevation: 0,
      backgroundColor: theme.color.foreground,
    },
    quantityText: {
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      color: theme.color.text,
      fontWeight: 'bold',
    },
    quantityTextContainer: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      backgroundColor: theme.color.background,
      borderRadius: 100,
    },
    card: {
      backgroundColor: theme.color.foreground,
      maxHeight: 100,
      marginHorizontal: 10,
      marginVertical: 5,
    },
    cardImage: {
      height: 100,
      width: 100,
      borderRadius: 20,
    },
    entityInfo: {
      paddingHorizontal: 9,
      paddingVertical: 8,
    },
    title: {
      fontSize: 13,
      fontWeight: '400',
      color: theme.color.text,
    },
    price: {
      color: theme.color.text,
      fontWeight: 'bold',
    },
    cartItem: {},
  });

  return {styles, theme};
};

export default createStyle;
