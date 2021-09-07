import {Navigation} from 'react-native-navigation';
import {Provider} from 'react-redux';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import ReduxConfig from '../_redux/store';
// LIBRARY APPLICATION SCREENS
import LibraryDashboard from '../../applications/library.application/books/index';
import LibraryViewBook from '../../applications/library.application/view.book/index ';
import LibraryViewCart from '../../applications/library.application/view.cart/index ';

import {NativeBaseProvider} from 'native-base';
import {ThemeProvider} from '../theme/theme.ui.context';
//user navigations
import NavigationScreens from './navigation.screens';
import {DEFAULT_LIGHT_THEME} from '../theme/light.theme';

export const {persistor, store} = ReduxConfig();

function Wrapper(Component: any) {
  return function (props: any) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider initial={DEFAULT_LIGHT_THEME}>
            <NativeBaseProvider>
              <Component {...props} />
            </NativeBaseProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    );
    return <EnhancedComponent />;
  };
}

export default function InitializeScreens() {
  Navigation.registerComponent(
    NavigationScreens.LIBRARY_DASHBOARD_SCREEN,
    () => Wrapper(LibraryDashboard) as any,
  );

  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOK_DETAIL_SCREEN,
    () => Wrapper(LibraryViewBook) as any,
  );

  Navigation.registerComponent(
    NavigationScreens.LIBRARY_BOOK_CART_SCREEN,
    () => Wrapper(LibraryViewCart) as any,
  );
}
