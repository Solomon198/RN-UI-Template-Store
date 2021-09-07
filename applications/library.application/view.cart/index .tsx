import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {useThemeAwareObject} from '../../../app.configurations/theme/custome.theme.hook';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {useSelector, useDispatch} from 'react-redux';
import {StatusBar} from 'react-native';
import {ViewSelectedBook} from '../books/_redux/actions';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ListComonents from '../../../components/List/index';
import ItemComponent from '../../../components/ListItems/index';
import CheckoutComponent from '../../../components/Buttons/CheckOutButton/index';

export default function ViewCarts() {
  const dispatch = useDispatch();
  const defaultStyles = useThemeAwareObject(createStyle);
  const {styles, theme} = useThemeAwareObject(componentStyles);
  const {carts} = useSelector((store: ReduxStore.store) => ({
    carts: store.BooksCart.carts,
  }));

  const handleViewSelectedBook = (book: entities.Book) => {
    dispatch({type: ViewSelectedBook.SET_SELECTED_VIEW_CALLER, payload: book});
  };
  return (
    <View style={defaultStyles.containerStyle}>
      <StatusBar backgroundColor={theme.color.statusBar} />
      <View style={styles.imageContainer}>
        <View style={styles.cartHeader}>
          <Icon style={styles.cartIcon} as={Ionicons} name="ios-cart-outline" />
          <Text style={styles.cartText}>Cart</Text>
        </View>
        <ListComonents.FlatList
          data={carts}
          renderItem={({item}: any) => (
            <ItemComponent.CartItem
              onPress={() => handleViewSelectedBook(item as entities.Book)}
              item={item}
            />
          )}
        />
      </View>
      <CheckoutComponent.RowCheckoutButton price={2000} />
    </View>
  );
}
