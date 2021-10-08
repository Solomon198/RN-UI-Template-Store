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
      width: 170,
      height: 170,
      borderRadius: 20,
    },
    imageContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.theme.color.background,
    },
    bookInfoContainer: {
      flex: 2,
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
      fontSize: 18,
      alignSelf: 'flex-end',
    },
    descriptionTitle: {
      marginTop: 15,
      color: theme.theme.color.text,
      marginBottom: 5,
      fontWeight: '600',
      fontSize: 17,
    },
    description: {
      fontSize: 14,
      color: theme.theme.color.text,
    },
    addCartButton: {
      backgroundColor: '#d9534f',
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
