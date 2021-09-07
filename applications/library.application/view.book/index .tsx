import React from 'react';
import {View, Card} from 'react-native-ui-lib';
import {useThemeAwareObject} from '../../../app.configurations/theme/custome.theme.hook';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {useDispatch, useSelector} from 'react-redux';
import {StatusBar, ImageBackground} from 'react-native';
import {Button, Text, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../../components/Buttons/BackButtons/index';
import {Navigation} from 'react-native-navigation';
import CartComponents from '../../../components/Buttons/Carts/index';
import {AddCart} from './_redux/actions';
import {handleViewCarts} from '../navigationActions/index';
import {formatAmountWithComma} from '../../utilities/helper.functions';

type Props = {
  componentId: string;
};
export default function Dashboard(props: Props) {
  const dispatch = useDispatch();
  const defaultStyles = useThemeAwareObject(createStyle);
  const {styles, theme} = useThemeAwareObject(componentStyles);
  const {selectedBook, carts} = useSelector((store: ReduxStore.store) => ({
    selectedBook: store.Books.selectedBook,
    carts: store.BooksCart.carts,
  }));

  const handleAddToCart = (item: entities.Book) => {
    console.log(item);
    dispatch({type: AddCart.ADD_TO_CART_CALLER, payload: item});
  };

  const getTotalAmountInCart = () => {
    let count: number = 0;
    carts.forEach(item => {
      count += item.count;
    });
    return count;
  };

  return (
    <View style={defaultStyles.containerStyle}>
      <StatusBar backgroundColor={theme.color.statusBar} />
      <View style={styles.imageContainer}>
        <ImageBackground
          style={styles.image}
          source={{uri: selectedBook.coverPhoto}}>
          <BackButton.FabBackButton
            onPress={() => Navigation.pop(props.componentId)}
          />
        </ImageBackground>
      </View>
      <View style={styles.bookInfoContainer}>
        <Card style={styles.card}>
          <Card.Section
            style={styles.bookInfo}
            content={[
              {
                text: selectedBook.title,
                style: styles.title,
              },
              {
                text: `₦ ${formatAmountWithComma(selectedBook.price)}`,
                style: styles.price,
              },
              {
                text: 'Description',
                text50: true,
                style: styles.descriptionTitle,
              },
              {
                text: selectedBook.description,
                style: styles.description,
              },
            ]}
          />
          <Button
            onPress={() => handleAddToCart(selectedBook)}
            endIcon={<Icon as={Ionicons} name="ios-cart-outline" />}
            style={styles.addCartButton}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </Button>

          <CartComponents.FabCart
            onPress={handleViewCarts}
            count={getTotalAmountInCart()}
          />
        </Card>
      </View>
    </View>
  );
}
