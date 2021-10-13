import LibraryDashboard from '../../books/index';
import LibraryViewBook from '../../view.book/index ';
import LibraryViewCart from '../../view.cart/index';
import {Navigation} from 'react-native-navigation';
import Sidemenu from '../../sidemenu/index';
import NavigationScreens from './navigation.screens';
import {IntializeComponentWithProviders} from '../../../../app.configurations/nav.config/initialize.screens';
import StoreConfig from '../_redux/store';
import SearchScreen from '../../search.book/index';
import AboutScreen from '../../about/index';
import OrderScreen from '../../view.order/index';
import SignupScreen from '../../auth/signup/index';
import PaymentScreen from '../../payment/index';
import ProfileScreen from '../../profile/index';
import LoginScreen from '../../auth/login';

const {store, persistor} = StoreConfig();

export default function InitializeLibraryAppScreens() {
  // intialize woo-commerce appi credentials

  // console.log(CUSTOMER_KEY, CUSTOMER_SECRET);

  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOKS_ABOUT_SCREEN,
    () => IntializeComponentWithProviders(store, persistor, AboutScreen) as any,
  );

  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOKS_ORDERSCREEN,
    () => IntializeComponentWithProviders(store, persistor, OrderScreen) as any,
  );

  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOKS_SIGNUP_SCREEN,
    () =>
      IntializeComponentWithProviders(store, persistor, SignupScreen) as any,
  );

  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOKS_PAYMENT_SCREEN,
    () =>
      IntializeComponentWithProviders(store, persistor, PaymentScreen) as any,
  );

  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOKS_PROFILE_SCREEN,
    () =>
      IntializeComponentWithProviders(store, persistor, ProfileScreen) as any,
  );

  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOKS_LOGIN_SCREEN,
    () => IntializeComponentWithProviders(store, persistor, LoginScreen) as any,
  );

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
