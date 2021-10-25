import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import {Alert, StatusBar} from 'react-native';
import {Icon} from 'native-base';
import ListComonents from '../../../components/List/index';
import ItemComponent from '../../../components/ListItems/index';
import CheckoutComponent from '../../../components/Buttons/CheckOutButton/index';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {handleNavigation} from '../_config_/navigation.configuration/navigationActions';
import {AddCart} from './_redux/actions';
import NavigationScreens from '../_config_/navigation.configuration/navigation.screens';
import BackButton from '../../../components/Buttons/BackButtons/index';
import {Navigation} from 'react-native-navigation';

const mapDispatchProps = (dispatch: any) => ({
  AdjustQuantity: (book: entities.Book, isAdding: boolean) =>
    dispatch({type: AddCart.ADD_TO_CART_CALLER, payload: book, isAdding}),
});

const mapStateProps = (store: any) => ({
  carts: store.BooksCart.carts,
  user: store.Profile.user,
});

type Props = {
  carts: ReduxStore.BookInCart[];
  componentId: string;
  user: entities.User;
  viewSelectedBook: (book: entities.Book) => void;
  AdjustQuantity: (book: entities.Book, isAdding: boolean) => void;
};

class ViewCarts extends React.Component<Props> {
  handleViewSelectedBook(book: entities.Book) {
    handleNavigation(
      this.props.componentId,
      NavigationScreens.LIBRARY_BOOK_DETAIL_SCREEN,
      book,
    );
  }

  getTotalSum() {
    let total: number = 0;
    this.props.carts.forEach(item => {
      total += parseInt(item.price) * item.count; // eslint-disable-line
    });
    return total;
  }

  adjustQuantity(book: entities.Book, isAdding: boolean) {
    let bookQuantity: number = 1;
    this.props.carts.forEach(bookInCart => {
      if (bookInCart._id === book._id) {
        bookQuantity = bookInCart.count;
      }
    });

    if (bookQuantity === 1 && isAdding === false) {
      Alert.alert(
        '',
        'There is only one quantity left for this product, do you want to remove item from cart ?',
        [
          {
            onPress: () => '',
            text: 'Cancel',
          },
          {
            onPress: () => this.props.AdjustQuantity(book, isAdding),
            text: 'Remove',
          },
        ],
      );
    } else {
      this.props.AdjustQuantity(book, isAdding);
    }
  }

  cartEmptyComponent(styles: any) {
    return (
      <View style={styles.cartEmptyContainer}>
        <Text style={styles.emptyCartText}>No items in Cart yet</Text>
      </View>
    );
  }

  checkout() {
    // if (this.props.user.email) {
    return handleNavigation(
      this.props.componentId,
      NavigationScreens.LIBRARY_BOOKS_PAYMENT_SCREEN,
    );
    // }
    // handleNavigation(
    //   this.props.componentId,
    //   NavigationScreens.LIBRARY_BOOKS_LOGIN_SCREEN,
    //   {fromCheckout: true},
    // );
  }

  render() {
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    return (
      <View style={defaultStyles.containerStyle}>
        <StatusBar backgroundColor={theme.theme.color.statusBar} />

        <View style={styles.imageContainer}>
          <View style={styles.cartHeader}>
            <View style={styles.headerLeft}>
              <BackButton.NormalButton
                context={this.context}
                onPress={() => Navigation.pop(this.props.componentId)}
              />
            </View>
            <View style={styles.headerBody}>
              <Icon
                as={Ionicons}
                color={theme.theme.color.primary}
                name="ios-cart-outline"
              />
              <Text style={styles.cartText}>Cart</Text>
            </View>
            <View style={styles.headerLeft} />
          </View>
          <ListComonents.FlatList
            adjustItemQuantity
            data={this.props.carts}
            ListEmptyComponent={this.cartEmptyComponent(styles)}
            renderItem={({item}: any) => (
              <ItemComponent.CartItem
                // @ts-ignore
                adjustItemQuantity={(book, isAdding) =>
                  this.adjustQuantity(book, isAdding)
                }
                context={this.context}
                // onPress={() =>
                //   this.handleViewSelectedBook(item as entities.Book)
                // }
                item={item}
              />
            )}
          />
        </View>
        <CheckoutComponent.RowCheckoutButton
          context={this.context}
          price={this.getTotalSum()}
          onPress={() => this.checkout()}
        />
      </View>
    );
  }
}

ViewCarts.contextType = ThemeContext;

export default connect(mapStateProps, mapDispatchProps)(ViewCarts);
