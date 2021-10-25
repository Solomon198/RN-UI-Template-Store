import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#fff',
    },
    input: {
      padding: 10,
      marginLeft: 5,
      marginBottom: 5,
    },
    header: {backgroundColor: '#fff'},
    mainContainerSub: {paddingHorizontal: 10},
    pageTitle: {
      fontWeight: 'bold',
      marginVertical: 10,
      marginLeft: 10,
      color: theme.theme.color.primary,
    },
    cardInput: {
      borderBottomColor: theme.theme.color.primary,
      borderBottomWidth: 1,
    },
    note: {
      color: 'red',
      fontWeight: 'bold',
    },
    errorCardText: {color: 'red', marginLeft: 10, marginVertical: 5},
    noteChargesContainer: {marginHorizontal: 15, flexDirection: 'row'},
    flexContainer: {
      flex: 1,
    },
    noteChargesText: {fontSize: 15},
    learnMoreText: {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop: 5,
      color: theme.theme.color.primary,
    },
    btnAddCard: {
      marginHorizontal: 20,
      marginBottom: 10,
      backgroundColor: theme.theme.color.primary,
    },
    addCardIcon: {color: '#fff', fontSize: 23},
    addCardText: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 18,
    },
    headerLeft: {
      width: 70,
    },
    headerBody: {
      flexDirection: 'row',
      flexGrow: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
  });

  return {styles, theme};
};

export default createStyle;
