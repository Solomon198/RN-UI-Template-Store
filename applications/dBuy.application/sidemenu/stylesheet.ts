import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: theme.theme.color.background,
    },
    container: {backgroundColor: theme.theme.color.background, flex: 1},
    imageStyle: {width: 80, height: 80, alignSelf: 'center'},
    listItems: {
      flexDirection: 'row',
      marginHorizontal: 15,
    },
    imageContainer: {
      flex: 2,
      justifyContent: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'whitesmoke',
    },
    icon: {
      fontSize: 14,
    },
    list: {
      flex: 5,
    },
    leftItem: {
      width: 60,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 15,
    },
    body: {
      flexGrow: 1,
      justifyContent: 'center',
      borderBottomColor: 'whitesmoke',
      paddingVertical: 15,
      marginHorizontal: 5,
    },
    routeName: {
      fontSize: 15,
      fontWeight: '700',
      opacity: 0.6,
    },
    editProfileBtn: {
      backgroundColor: theme.theme.color.primary,
      marginHorizontal: 20,
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
