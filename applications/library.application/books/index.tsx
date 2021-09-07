import React, {useEffect} from 'react';
import {View} from 'react-native-ui-lib';
import SplashScreen from 'react-native-splash-screen';
import {useThemeAwareObject} from '../../../app.configurations/theme/custome.theme.hook';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import HeaderComponents from '../../../components/Headers/index';
import ListComonents from '../../../components/List/index';
import ItemComponent from '../../../components/ListItems/index';
import CartComponents from '../../../components/Buttons/Carts/index';
import {ViewSelectedBook} from './_redux/actions';
import {useSelector, useDispatch} from 'react-redux';
import {handleViewCarts} from '../navigationActions/index';

export default function Dashboard() {
  const defaultStyles = useThemeAwareObject(createStyle);
  const styles = useThemeAwareObject(componentStyles);
  const dispatch = useDispatch();
  const {books, carts} = useSelector((store: ReduxStore.store) => ({
    books: store.Books.books,
    fetchBookStatus: store.Books.fetchBookStatus,
    fetchBooksError: store.Books.fetchBooksError,
    carts: store.BooksCart.carts,
  }));

  const getTotalAmountInCart = () => {
    let count: number = 0;
    carts.forEach(item => {
      count += item.count;
    });
    return count;
  };
  const handleViewSelectedBook = (book: entities.Book) => {
    dispatch({type: ViewSelectedBook.SET_SELECTED_VIEW_CALLER, payload: book});
  };

  useEffect(() => {
    SplashScreen.hide();
    // dispatch({type: FetchBooks.FETCH_BOOK_CALLER});
  }, [dispatch]);
  return (
    <View style={defaultStyles.containerStyle}>
      <HeaderComponents.SearchHeader placeholder="Search book" />
      <ListComonents.FlatList
        data={books}
        columnWrapperStyle={styles.columnStyle}
        numColumns={2}
        renderItem={({item}: any) => (
          <ItemComponent.Ecommerce
            onPress={() => handleViewSelectedBook(item as entities.Book)}
            item={item}
          />
        )}
      />
      <CartComponents.FabCart
        count={getTotalAmountInCart()}
        onPress={handleViewCarts}
      />
    </View>
  );
}
