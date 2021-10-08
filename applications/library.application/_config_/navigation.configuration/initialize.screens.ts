import LibraryDashboard from '../../books/index';
import LibraryViewBook from '../../view.book/index ';
import LibraryViewCart from '../../view.cart/index';
import {Navigation} from 'react-native-navigation';
import Sidemenu from '../../sidemenu/index';
import NavigationScreens from './navigation.screens';
import {IntializeComponentWithProviders} from '../../../../app.configurations/nav.config/initialize.screens';
import StoreConfig from '../_redux/store';
import SearchScreen from '../../search.book/index';

const {store, persistor} = StoreConfig();

export default function InitializeLibraryAppScreens() {
  // intialize woo-commerce appi credentials

  // console.log(CUSTOMER_KEY, CUSTOMER_SECRET);

  Navigation.registerComponent(
    NavigationScreens.LIBARARY_SIDEMENU,
    () => IntializeComponentWithProviders(store, persistor, Sidemenu) as any,
  );
  Navigation.registerComponent(
    NavigationScreens.LIBRARY_DASHBOARD_SCREEN,
    () =>
      IntializeComponentWithProviders(
        store,
        persistor,
        LibraryDashboard,
      ) as any,
  );
  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOK_DETAIL_SCREEN,
    () =>
      IntializeComponentWithProviders(store, persistor, LibraryViewBook) as any,
  );
  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOK_CART_SCREEN,
    () =>
      IntializeComponentWithProviders(store, persistor, LibraryViewCart) as any,
  );

  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOK_SEARCH_SCREEN,
    () =>
      IntializeComponentWithProviders(store, persistor, SearchScreen) as any,
  );
}
