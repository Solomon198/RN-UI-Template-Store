import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    cartEmptyContainer: {
      flex: 1,
      alignSelf: 'center',
      alignItems: 'center',
      marginTop: height / 3,
    },
    emptyCartText: {
      fontSize: 20,
      fontWeight: '500',
      color: theme.theme.color.primary,
    },
    cartIcon: {
      color: theme.theme.color.text,
    },
    cartHeader: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      marginBottom: 20,
      marginTop: 20,
      backgroundColor: theme.theme.color.background,
      paddingVertical: 10,
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
      paddingHorizontal: 10,
    },
    image: {
      flex: 1,
    },
    mainContainer: {
      flex: 1,
    },
    noProfileContainer: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 20,
    },
    headerLeft: {
      width: 50,
      justifyContent: 'center',
    },
    header: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    infoCreateAccountTextHeader: {
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      color: theme.theme.color.primary,
    },
    infoCreateAccountTextSub: {
      marginVertical: 10,
      marginHorizontal: 20,
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
    editProfileBtn: {
      backgroundColor: theme.theme.color.primary,
      marginHorizontal: 20,
      borderRadius: 10,
      marginBottom: 10,
    },
    createAccountLink: {
      marginVertical: 5,
      backgroundColor: theme.theme.color.primary,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    loginLink: {
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 10,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },

    userInitials: {
      flexDirection: 'row',
    },
    item: {
      marginVertical: 10,
    },
  });

  return {styles, theme};
};

export default createStyle;
