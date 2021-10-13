import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    headerLeft: {
      width: 70,
    },
    cartEmptyContainer: {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: height / 3,
    },
    headerBody: {
      flexDirection: 'row',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyCartText: {
      fontSize: 20,
      fontWeight: '500',
      color: theme.theme.color.primary,
    },
    cartHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      marginBottom: 10,
      marginTop: 20,
      backgroundColor: theme.theme.color.background,
      paddingVertical: 5,
      borderBottomColor: 'lightgray',
      borderBottomWidth: 1,
    },
    cartText: {
      fontSize: 19,
      marginLeft: 5,
      color: theme.theme.color.text,
    },
    card: {
      elevation: 0,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
    },
    imageContainer: {
      flex: 1,
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
      fontSize: 20,
      fontWeight: '600',
    },
    price: {
      color: theme.theme.color.text,
      fontWeight: 'bold',
      fontSize: 18,
    },
    descriptionTitle: {
      marginTop: 15,
      color: theme.theme.color.text,
      marginBottom: 5,
    },
    description: {
      fontSize: 14,
    },
    addCartButton: {
      backgroundColor: '#d9534f',
      marginHorizontal: 40,
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
  });

  return {styles, theme};
};

export default createStyle;
