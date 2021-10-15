import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import {createStyle} from '../../default.styles/styles';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import {StatusBar} from 'react-native';
import ListComonents from '../../../components/List/index';
import ItemComponent from '../../../components/ListItems/index';
import {connect} from 'react-redux';
import {GetBookByCategorie} from './_redux/actions';
import HeaderComponents from '../../../components/Headers';
import FooterComponents from '../../../components/Footers/index';
import BackButton from '../../../components/Buttons/BackButtons/index';
import {Navigation} from 'react-native-navigation';
import {handleNavigation} from '../_config_/navigation.configuration/navigationActions';
import NavigationScreens from '../_config_/navigation.configuration/navigation.screens';
import {
  DefaultQueryParams,
  getNewQueryParams,
} from '../../utilities/helper.functions';

const mapDispatchProps = (dispatch: any) => ({
  GetBookByCategorie: (
    queryParams: entities.queryParams,
    isRefreshing: boolean,
  ) =>
    dispatch({
      type: GetBookByCategorie.GET_BOOK_BY_CATEGORY_CALLER,
      queryParams,
      isRefreshing,
    }),
});

const mapStateProps = (store: any) => ({
  books: store.Categorie.books,
  getBookStatus: store.Categorie.getBookStatus,
  categories: store.Books.categories,
  queryParams: store.Categorie.queryParams,
});

type Props = {
  books: entities.Book[];
  componentId: string;
  categories: entities.BookCategories[];
  getBookStatus: string;
  queryParams: entities.queryParams;
  GetBookByCategorie: (
    queryParams: entities.queryParams,
    isRefreshing: boolean,
  ) => void;
};

class Categories extends React.Component<Props> {
  searchString: string = '';
  timer: any;
  handleViewSelectedBook(book: entities.Book) {
    handleNavigation(
      this.props.componentId,
      NavigationScreens.LIBRARY_BOOK_DETAIL_SCREEN,
      book,
    );
  }

  handleNextCall() {
    if (!this.props.queryParams.hasNextPage) return false;
    let {page} = this.props.queryParams;
    const queryParams = getNewQueryParams(this.props.queryParams, {
      page: page && ++page,
    });
    this.props.GetBookByCategorie(queryParams, false);
  }

  componentDidMount() {
    if (this.props.categories.length > 0) {
      this.props.GetBookByCategorie(
        {
          ...DefaultQueryParams,
          category: this.props.categories[0].id.toString(),
        },
        true,
      );
    }
  }
  handleInput(categorieId: string) {
    this.props.GetBookByCategorie(
      {
        ...this.props.queryParams,
        category: categorieId,
        page: 1,
      },
      true,
    );
  }

  listEmptyComponent(style: any) {
    return (
      <View style={style.emptyComponent}>
        <Text style={style.emptyText}>
          No books found for catgorie selected
        </Text>
      </View>
    );
  }

  render() {
    const perPage = this.props.queryParams.per_page || 10;
    const defaultStyles = createStyle(this.context);
    const {styles, theme} = componentStyles(this.context);
    const isSearching =
      this.props.getBookStatus ===
      GetBookByCategorie.GET_BOOK_BY_CATEGORY_STARTED;
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
            <HeaderComponents.SelectHeader
              categories={this.props.categories}
              onChangeText={text => this.handleInput(text)}
              hideLeftItem
              autoFocus
              isSearching={isSearching && this.props.books.length <= perPage}
              context={this.context}
              placeholder="Select a categorie"
            />
          </View>
        </View>

        <View style={styles.imageContainer}>
          <ListComonents.FlatList
            ListFooterComponent={
              isSearching &&
              this.props.books.length > 10 && (
                <FooterComponents.FlatListFooter context={this.context} />
              )
            }
            onEndReachedThreshold={0.5}
            onEndReached={() => this.handleNextCall()}
            adjustItemQuantity
            ListEmptyComponent={
              !isSearching ? this.listEmptyComponent(styles) : <View />
            }
            data={this.props.books || []}
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

Categories.contextType = ThemeContext;

export default connect(mapStateProps, mapDispatchProps)(Categories);
