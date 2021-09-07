import NavigationScreens from '../../../app.configurations/nav.config/navigation.screens';
import {Navigation} from 'react-native-navigation';

export const handleViewCarts = () => {
  Navigation.push(NavigationScreens.LIBRARY_DASHBOARD_SCREEN, {
    component: {
      id: NavigationScreens.LIBRARY_BOOK_CART_SCREEN,
      name: NavigationScreens.LIBRARY_BOOK_CART_SCREEN,
    },
  });
};

export const handleViewBook = () => {
  Navigation.push(NavigationScreens.LIBRARY_DASHBOARD_SCREEN, {
    component: {
      id: NavigationScreens.LIBRARY_BOOK_DETAIL_SCREEN,
      name: NavigationScreens.LIBRARY_BOOK_DETAIL_SCREEN,
      options: {
        statusBar: {
          visible: false,
        },
      },
    },
  });
};
