import {StyleSheet} from 'react-native';

const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    imageContainerStyle: {
      alignContent: 'center',
      alignItems: 'center',
      flex: 1,
    },
    quantityContainer: {
      marginTop: 5,
      flexDirection: 'row',
      backgroundColor: theme.theme.color.background,
      alignItems: 'center',
    },
    quantityText: {
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      color: theme.theme.color.foreground,
      fontWeight: 'bold',
    },
    quantityTextContainer: {
      justifyContent: 'center',
      backgroundColor: theme.theme.color.background,
      borderRadius: 100,
    },
    card: {
      backgroundColor: theme.theme.color.background,
      marginHorizontal: 10,
      borderRadius: 10,
      flexDirection: 'row',
      borderBottomColor: theme.theme.color.foreground,
      borderBottomWidth: 4,
      borderStyle: 'solid',
      paddingVertical: 12,
    },
    cardImage: {
      height: 80,
      width: 80,
      borderRadius: 20,
      margin: 1,
    },
    entityInfo: {
      paddingHorizontal: 9,
      flex: 2,
    },
    title: {
      fontSize: 13,
      fontWeight: '400',
      color: theme.theme.color.text,
    },
    price: {
      color: theme.theme.color.text,
      fontWeight: 'bold',
      fontSize: 17,
    },

    connector: {
      height: 25,
      backgroundColor: theme.theme.color.secondary,
      width: 15,
    },
    icon: {
      color: '#fff',
      fontSize: 25,
      marginLeft: 10,
    },
    iconContainer: {
      backgroundColor: theme.theme.color.secondary,
      width: 100,
      height: 100,
    },
    iconRight: {
      marginLeft: -6,
      backgroundColor: theme.theme.color.secondary,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
    },
    iconLeft: {
      marginRight: -6,
      backgroundColor: theme.theme.color.secondary,
      width: 40,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 100,
    },
  });

  return {styles, theme};
};

export default createStyle;
