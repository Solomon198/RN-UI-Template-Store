import {Provider} from 'react-redux';
import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
// LIBRARY APPLICATION SCREENS

import {NativeBaseProvider} from 'native-base';
import ThemeProvider from '../theme/theme.ui.context';
//Application Screen Initializers
import IntializeLibraryScreens from '../../applications/dBuy.application/_config_/navigation.configuration/initialize.screens';

export function IntializeComponentWithProviders(
  store: any,
  persistor: any,
  Component: any,
) {
  return function (props: any) {
    const EnhancedComponent = () => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider>
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

export default function InitializeApplicationScreens() {
  IntializeLibraryScreens(); // Intialize library screens with it store, redux and realm entirely
}
