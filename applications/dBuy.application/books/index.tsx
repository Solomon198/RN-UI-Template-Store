import React from 'react';
import {View} from 'react-native-ui-lib';
import SplashScreen from 'react-native-splash-screen';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';

import {createStyle} from '../../default.styles/styles';
import HeaderComponents from '../../../components/Headers/index';
import FooterComponents from '../../../components/Footers/index';
import ListComonents from '../../../components/List/index';
import ItemComponent from '../../../components/ListItems/index';
import {FetchBooks, ViewSelectedBook} from './_redux/actions';
import {
  handleNavigation,
  ToggleNavigation,
} from '../_config_/navigation.configuration/navigationActions';
import NavigationScreens from '../_config_/navigation.configuration/navigation.screens';
import {connect} from 'react-redux';
import {RefreshControl, Keyboard} from 'react-native';
import {
  DefaultQueryParams,
  getNewQueryParams,
} from '../../utilities/helper.functions';
import CartComponents from '../../../components/Buttons/Carts';

type Props = {
  books: any[];
  fetchBookStatus: string;
  fetchBooksError: string;
  isRefreshing: boolean;
  carts: ReduxStore.BookInCart[];
  componentId: string;
  lastFetched: string;
  queryParams: entities.queryParams;
  fetchBooks: (
    queryParams: entities.queryParams,
    isRefreshing?: boolean,
  ) => void;
  viewSelectedBook: (book: entities.Book) => void;
};
const mapStateProps = (store: any) => ({
  books: store.Books.books,
  fetchBookStatus: store.Books.fetchBookStatus,
  fetchBooksError: store.Books.fetchBooksError,
  carts: store.BooksCart.carts,
  lastFetched: store.Books.lastFetched,
  isRefreshing: store.Books.isRefreshing,
  queryParams: store.Books.queryParams,
});

const mapDispatchProps = (dispatch: any) => ({
  fetchBooks: (queryParams: entities.queryParams, isRefreshing?: boolean) =>
    dispatch({type: FetchBooks.FETCH_BOOK_CALLER, queryParams, isRefreshing}),
  viewSelectedBook: (book: entities.Book) =>
    dispatch({
      type: ViewSelectedBook.SET_SELECTED_VIEW_CALLER,
      payload: book,
    }),
});

class Dashboard extends React.Component<Props> {
  state = {
    isRefreshing: false,
  };
  componentDidMount() {
    SplashScreen.hide();
    this.handleFetchBookInit();
  }

  handleFetchBookInit() {
    this.props.fetchBooks(DefaultQueryParams, true);
    this.setState({isRefreshing: true});
  }

  handleNextCall() {
    if (!this.props.queryParams.hasNextPage) return false;
    let {page} = this.props.queryParams;
    const queryParams = getNewQueryParams(this.props.queryParams, {
      page: page && ++page,
    });
    this.props.fetchBooks(queryParams);
    this.setState({isRefreshing: false});
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
          ListFooterComponent={
            listLoading &&
            this.props.books.length > 0 && (
              <FooterComponents.FlatListFooter context={this.context} />
            )
          }
          onEndReachedThreshold={0.5}
          onEndReached={() => this.handleNextCall()}
          refreshControl={
            <RefreshControl
              onRefresh={() => this.handleFetchBookInit()}
              refreshing={listLoading && this.state.isRefreshing}
            />
          }
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
