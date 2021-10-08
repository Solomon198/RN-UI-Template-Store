import React from 'react';
import {View, Card} from 'react-native-ui-lib';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {StatusBar, ImageBackground, ScrollView} from 'react-native';
import {Button, Text, Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BackButton from '../../../components/Buttons/BackButtons/index';
import {Navigation} from 'react-native-navigation';
import CartComponents from '../../../components/Buttons/Carts/index';
import {AddCart} from './_redux/actions';
import {handleNavigation} from '../_config_/navigation.configuration/navigationActions';
import {connect} from 'react-redux';
import {formatAmountWithComma} from '../../utilities/helper.functions';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import NavigationScreens from '../_config_/navigation.configuration/navigation.screens';

type Props = {
  componentId: string;
  selectedItem: any;
  carts: ReduxStore.BookInCart[];
  handleAddToCart: (item: entities.Book) => void;
};

const mapStateProps = (store: ReduxStore.store) => ({
  carts: store.BooksCart.carts,
});

// eslint-disable-next-line
const mapDispatchProps = (dispatch: any) => ({
  handleAddToCart: (item: entities.Book) =>
    dispatch({type: AddCart.ADD_TO_CART_CALLER, payload: item}),
});

class ViewBook extends React.Component<Props> {
  getTotalAmountInCart() {
    let count: number = 0;
    this.props.carts.forEach(item => {
      count += item.count;
    });
    return count;
  }

  render() {
    const {selectedItem} = this.props;
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    // const isDescriptionObject =
    //   typeof selectedItem.description.descriptionBody === 'object'
    //     ? true
    //     : false;
    // const mapedItems = isDescriptionObject
    //   ? selectedItem.description.descriptionBody.map(item => (
    //       <View>
    //         <Text>{item}</Text>
    //       </View>
    //     ))
    //   : null;
    return (
      <View style={defaultStyles.containerStyle}>
        <StatusBar backgroundColor={theme.theme.color.statusBar} />
        <View style={styles.imageContainer}>
          <ImageBackground
            style={styles.image}
            imageStyle={styles.image}
            source={{uri: selectedItem.images[0]}}>
            <BackButton.FabBackButton
              context={this.context}
              onPress={() => Navigation.pop(this.props.componentId)}
            />
          </ImageBackground>
        </View>
        <ScrollView style={styles.bookInfoContainer}>
          <Card style={styles.card}>
            <Card.Section
              style={styles.bookInfo}
              content={[
                {
                  text: selectedItem.title,
                  style: styles.title,
                },
                {
                  text: `₦ ${formatAmountWithComma(selectedItem.price)}`,
                  style: styles.price,
                },
                {
                  text: selectedItem.description.descriptionHeader,
                  style: styles.descriptionTitle,
                },
                {
                  text: selectedItem.description.descriptionBody,
                  style: styles.description,
                },
              ]}
            />

            <CartComponents.FabCart
              context={this.context}
              onPress={() =>
                handleNavigation(
                  this.props.componentId,
                  NavigationScreens.LIBRARY_BOOK_CART_SCREEN,
                )
              }
              count={this.getTotalAmountInCart()}
            />
          </Card>
        </ScrollView>
        <Button
          onPress={() => this.props.handleAddToCart(selectedItem)}
          endIcon={<Icon as={Ionicons} name="ios-cart-outline" />}
          style={styles.addCartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </Button>
      </View>
    );
  }
}

ViewBook.contextType = ThemeContext;

export default connect(mapStateProps, mapDispatchProps)(ViewBook);
