import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    imageWrapper: {
      paddingVertical: 5,
      backgroundColor: theme.theme.color.background,
      marginHorizontal: 5,
      borderRadius: 20,
      marginTop: 3,
    },
    card: {
      backgroundColor: theme.theme.color.foreground,
      minHeight: 200,
      margin: 10,
      borderRadius: 20,
      flex: 1,
    },
    cardImage: {
      height: 140,
      flex: 1,
      marginVertical: 5,
      marginHorizontal: 5,
      borderRadius: 20,
    },
    entityInfo: {
      paddingHorizontal: 9,
      paddingVertical: 8,
    },
    title: {
      fontSize: 13,
      fontWeight: '400',
      color: theme.theme.color.text,
    },
    price: {
      color: theme.theme.color.text,
      fontWeight: 'bold',
    },
    cartItem: {},
  });

  return {styles, theme};
};

export default createStyle;
