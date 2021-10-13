import React from 'react';
import {View} from 'react-native-ui-lib';
import SplashScreen from 'react-native-splash-screen';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';

import {createStyle} from '../../default.styles/styles';
import HeaderComponents from '../../../components/Headers/index';
import ListComonents from '../../../components/List/index';
import ItemComponent from '../../../components/ListItems/index';
import CartComponents from '../../../components/Buttons/Carts/index';
import {FetchBooks, ViewSelectedBook} from './_redux/actions';
import {
  handleNavigation,
  ToggleNavigation,
} from '../_config_/navigation.configuration/navigationActions';
import NavigationScreens from '../_config_/navigation.configuration/navigation.screens';
import {connect} from 'react-redux';
import {RefreshControl, Keyboard} from 'react-native';

type Props = {
  books: any[];
  fetchBookStatus: string;
  fetchBooksError: string;
  carts: ReduxStore.BookInCart[];
  componentId: string;
  lastFetched: string;
  fetchBooks: (lastFetched: any) => void;
  viewSelectedBook: (book: entities.Book) => void;
};
const mapStateProps = (store: any) => ({
  books: store.Books.books,
  fetchBookStatus: store.Books.fetchBookStatus,
  fetchBooksError: store.Books.fetchBooksError,
  carts: store.BooksCart.carts,
  lastFetched: store.Books.lastFetched,
});

const mapDispatchProps = (dispatch: any) => ({
  fetchBooks: (lastFetched: any) =>
    dispatch({type: FetchBooks.FETCH_BOOK_CALLER, payload: lastFetched}),
  viewSelectedBook: (book: entities.Book) =>
    dispatch({
      type: ViewSelectedBook.SET_SELECTED_VIEW_CALLER,
      payload: book,
    }),
});

class Dashboard extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchBooks(this.props.lastFetched);
    SplashScreen.hide();
  }

  getTotalAmountInCart() {
    let count: number = 0;
    this.props.carts.forEach(item => {
      count += item.count;
    });
    return count;
  }
  handleViewSelectedBook(book: entities.Book) {
    handleNavigation(
      this.props.componentId,
      NavigationScreens.LIBRARY_BOOK_DETAIL_SCREEN,
      book,
    );
  }

  render() {
    const defaultStyles = createStyle(this.context);
    const listLoading =
      FetchBooks.FETCH_BOOK_STARTED === this.props.fetchBookStatus;

    return (
      <View style={defaultStyles.containerStyle}>
        <HeaderComponents.SearchHeader
          onChangeText={() => ''}
          onFocus={() => {
            Keyboard.dismiss();
            handleNavigation(
              this.props.componentId,
              NavigationScreens.LIBRARY_BOOK_SEARCH_SCREEN,
            );
          }}
          context={this.context}
          onAvatarPressed={() =>
            ToggleNavigation(true, NavigationScreens.LIBRARY_DASHBOARD_SCREEN)
          }
          placeholder="Search book"
        />
        <ListComonents.FlatList
          isRef
          refreshControl={<RefreshControl refreshing={listLoading} />}
          data={this.props.books || []}
          numColumns={2}
          renderItem={({item}: any) => (
            <ItemComponent.Ecommerce
              context={this.context}
              onPress={() => this.handleViewSelectedBook(item)}
              item={item}
            />
          )}
        />
        <CartComponents.FabCart
          context={this.context} // theme context
          count={this.getTotalAmountInCart()}
          onPress={() =>
            handleNavigation(
              this.props.componentId,
              NavigationScreens.LIBRARY_BOOK_CART_SCREEN,
            )
          }
        />
      </View>
    );
  }
}
Dashboard.contextType = ThemeContext;
export default connect(mapStateProps, mapDispatchProps)(Dashboard);
