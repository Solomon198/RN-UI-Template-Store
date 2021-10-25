import React from 'react';
import {View} from 'react-native-ui-lib';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import {StatusBar, Text} from 'react-native';
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
  SearchBook: (queryParams: entities.queryParams) =>
    dispatch({type: SearchBook.SEARCH_BOOK_CALLER, queryParams}),
});

const mapStateProps = (store: any) => ({
  searchResult: store.Search.searchResult,
  searchStatus: store.Search.searchStatus,
  books: store.Books.books,
});

type Props = {
  searchResult: entities.Book[];
  componentId: string;
  searchStatus: string;
  books: any[];
  SearchBook: (queryParams: entities.queryParams) => void;
};

class ViewCarts extends React.Component<Props> {
  searchString: string = '';
  timer: any;
  handleViewSelectedBook(book: entities.Book) {
    handleNavigation(
      this.props.componentId,
      NavigationScreens.LIBRARY_BOOK_DETAIL_SCREEN,
      book,
    );
  }

  handleInput(text: string) {
    this.searchString = text;
    // if (this.timer) {
    //   this.props.SearchBook({per_page: 50, search: this.searchString});
    //   clearTimeout(this.timer);
    // }
    // this.timer = setTimeout(() => {
    //   clearTimeout(this.timer);
    // }, 500);
  }

  render() {
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    const isSearching =
      this.props.searchStatus === SearchBook.SEARCH_BOOK_STARTED;
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
              onChangeText={text => this.handleInput(text)}
              hideLeftItem
              autoFocus
              isSearching={isSearching}
              context={this.context}
              placeholder="Search by author or title"
            />
          </View>
        </View>
        {this.searchString.trim() &&
        this.props.searchResult.length === 0 &&
        !isSearching ? (
          <View style={styles.searchResultContainer}>
            <Text>
              Could not find search result for :{' '}
              <Text style={styles.searchString}>{this.searchString}</Text>
            </Text>
          </View>
        ) : null}
        <View style={styles.imageContainer}>
          <ListComonents.FlatList
            adjustItemQuantity
            data={this.props.books || []}
            renderItem={({item}: any) => (
              <ItemComponent.CartItem
                showAuthor
                hideQuantityAdjustment={true}
                context={this.context}
                // @ts-ignore
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
