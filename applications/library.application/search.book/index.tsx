import React from 'react';
import {View} from 'react-native-ui-lib';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import {StatusBar} from 'react-native';
import ListComonents from '../../../components/List/index';
import ItemComponent from '../../../components/ListItems/index';
import {connect} from 'react-redux';
// import {handleNavigation} from '../_config_/navigation.configuration/navigationActions';
import {AddCart} from './_redux/actions';

const mapDispatchProps = (dispatch: any) => ({
  AdjustQuantity: (book: entities.Book, isAdding: boolean) =>
    dispatch({type: AddCart.ADD_TO_CART_CALLER, payload: book, isAdding}),
});

const mapStateProps = (store: any) => ({
  carts: store.BooksCart.carts,
});

type Props = {
  carts: ReduxStore.BookInCart[];
  componentId: string;
  viewSelectedBook: (book: entities.Book) => void;
  AdjustQuantity: (book: entities.Book, isAdding: boolean) => void;
};

class ViewCarts extends React.Component<Props> {
  // handleViewSelectedBook(book: entities.Book) {
  //   handleNavigation(this.props.componentId, book);
  // }

  getTotalSum() {
    let total: number = 0;
    this.props.carts.forEach(item => {
      total += parseInt(item.price) * item.count; // eslint-disable-line
    });
    return total;
  }

  render() {
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    return (
      <View style={defaultStyles.containerStyle}>
        <StatusBar backgroundColor={theme.theme.color.statusBar} />
        <View style={styles.imageContainer}>
          <ListComonents.FlatList
            adjustItemQuantity
            data={this.props.carts}
            renderItem={({item}: any) => (
              <ItemComponent.CartItem
                adjustItemQuantity={(book, isAdding) =>
                  this.props.AdjustQuantity(book, isAdding)
                }
                context={this.context}
                onPress={
                  () => console.log('')
                  // this.handleViewSelectedBook(item as entities.Book)
                }
                item={item}
              />
            )}
          />
        </View>
      </View>
    );
  }
}

ViewCarts.contextType = ThemeContext;

export default connect(mapStateProps, mapDispatchProps)(ViewCarts);
