/**
 * @format
 */
import {LogBox} from 'react-native';
import {Navigation} from 'react-native-navigation';
import InitializeScreens from './app.configurations/nav.config/initialize.screens';
import {LibraryRootNavigationConfiguration} from './applications/dBuy.application/_config_/navigation.configuration/navigationActions';
InitializeScreens();

LogBox.ignoreAllLogs(true);
Navigation.setDefaultOptions({
  topBar: {
    visible: false,
  },
  bottomTabs: {
    visible: false,
  },
  sideMenu: {},
  // statusBar:{
  //   backgroundColor:Colors.primary
  // },
  layout: {
    orientation: ['portrait'],
  },
});

Navigation.events().registerAppLaunchedListener(() => {
  LibraryRootNavigationConfiguration();
});
