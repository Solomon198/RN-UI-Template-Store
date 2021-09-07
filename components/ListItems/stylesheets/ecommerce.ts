import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const cardWidth = width / 2;
const createStyle = (theme: theme.ApplicationTheme) => {
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.color.foreground,
      minHeight: 200,
      margin: 10,
    },
    cardImage: {
      height: 150,
      width: cardWidth - 20,
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
