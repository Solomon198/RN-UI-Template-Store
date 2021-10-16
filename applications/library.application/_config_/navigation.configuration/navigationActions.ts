import NavigationScreens from './navigation.screens';
import {Navigation} from 'react-native-navigation';
import * as WebBrowser from 'expo-web-browser';

export const OpenBrowser = async (url: string) => {
  WebBrowser.openBrowserAsync(url);
};

export function ToggleNavigation(state: boolean, componentId: any) {
  Navigation.mergeOptions(componentId, {
    sideMenu: {
      left: {
        visible: state,
      },
    },
  });
}

export function LibraryRootNavigationConfiguration() {
  Navigation.setRoot({
    root: {
      sideMenu: {
        center: {
          stack: {
            id: NavigationScreens.LIBARARY_CENTER_ID,
            children: [
              {
                component: {
                  name: NavigationScreens.LIBRARY_DASHBOARD_SCREEN,
                  id: NavigationScreens.LIBRARY_DASHBOARD_SCREEN,
                },
              },
            ],
          },
        },

        left: {
          component: {
            name: NavigationScreens.LIBARARY_SIDEMENU,
            id: NavigationScreens.LIBARARY_SIDEMENU,
          },
        },
      },
    },
  });
}

export const handleNavigation = (
  currentScreenId: string,
  destinationScreen: string,
  payload?: any,
) => {
  Navigation.push(currentScreenId, {
    component: {
      id: destinationScreen,
      name: destinationScreen,
      passProps: {
        ...payload,
        selectedItem: payload,
      },
      options: {
        statusBar: {
          visible: false,
        },
      },
    },
  });
};
