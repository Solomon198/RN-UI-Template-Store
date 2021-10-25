import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    card: {
      elevation: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: theme.theme.color.background,
    },
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
    imageContainer: {
      flex: 1,
      backgroundColor: theme.theme.color.background,
    },
    bookInfoContainer: {
      flex: 1,
      marginTop: -30,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      backgroundColor: theme.theme.color.background,
    },
    bookInfo: {
      marginTop: 5,
      marginHorizontal: 20,
      padding: 20,
    },
    title: {
      fontSize: 17,
      fontWeight: '800',
      color: theme.theme.color.primary,
    },
    price: {
      color: theme.theme.color.text,
      fontWeight: 'bold',
      fontSize: 30,
      marginBottom: 20,
    },
    descriptionTitle: {
      marginTop: 15,
      color: theme.theme.color.text,
      marginBottom: 20,
      fontWeight: '600',
      fontSize: 17,
    },
    description: {
      fontSize: 17,
      color: theme.theme.color.text,
    },
    addCartButton: {
      backgroundColor: theme.theme.color.primary,
      marginHorizontal: 40,
      borderRadius: 10,
      marginBottom: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  return {styles, theme};
};

export default createStyle;
