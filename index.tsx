/**
 * @format
 */

import {Navigation} from 'react-native-navigation';
import InitializeScreens from './app.configurations/nav.config/initialize.screens';
import {LibraryStack} from './app.configurations/nav.config/nav.stack';

InitializeScreens();

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
  LibraryStack();
});
