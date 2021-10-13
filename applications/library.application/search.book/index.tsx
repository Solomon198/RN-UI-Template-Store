import React from 'react';
import {View} from 'react-native-ui-lib';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import {StatusBar} from 'react-native';
import ListComonents from '../../../components/List/index';
import ItemComponent from '../../../components/ListItems/index';
import {connect} from 'react-redux';
import {SearchBook} from './_redux/actions';
import HeaderComponents from '../../../components/Headers';
import BackButton from '../../../components/Buttons/BackButtons/index';
import {Navigation} from 'react-native-navigation';
import {handleNavigation} from '../_config_/navigation.configuration/navigationActions';
import NavigationScreens from '../_config_/navigation.configuration/navigation.screens';

const mapDispatchProps = (dispatch: any) => ({
  SearchBook: (searchString: string) =>
    dispatch({type: SearchBook.SEARCH_BOOK_CALLER, payload: searchString}),
});

const mapStateProps = (store: any) => ({
  searchResult: store.Search.searchResult,
});

type Props = {
  searchResult: entities.Book[];
  componentId: string;
  SearchBook: (searchString: string) => void;
};

class ViewCarts extends React.Component<Props> {
  handleViewSelectedBook(book: entities.Book) {
    handleNavigation(
      this.props.componentId,
      NavigationScreens.LIBRARY_BOOK_DETAIL_SCREEN,
      book,
    );
  }

  render() {
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    return (
      <View style={defaultStyles.containerStyle}>
        <StatusBar backgroundColor={theme.theme.color.statusBar} />
        <View style={styles.headerLine} />
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <BackButton.NormalButton
              context={this.context}
              onPress={() => Navigation.pop(this.props.componentId)}
            />
          </View>
          <View style={styles.searchContainer}>
            <HeaderComponents.SearchHeader
              onChangeText={text => this.props.SearchBook(text)}
              hideLeftItem
              autoFocus
              context={this.context}
              placeholder="Search by author or title"
            />
          </View>
        </View>
        <View style={styles.imageContainer}>
          <ListComonents.FlatList
            adjustItemQuantity
            data={this.props.searchResult || []}
            renderItem={({item}: any) => (
              <ItemComponent.CartItem
                showAuthor
                hideQuantityAdjustment={true}
                context={this.context}
                onPress={entitity => this.handleViewSelectedBook(entitity)}
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
