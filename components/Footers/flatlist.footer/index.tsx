import React from 'react';
import {View} from 'react-native-ui-lib';
import {createStyle} from '../stylesheets/flatlist.footer';
import SpinKit from 'react-native-spinkit';

const Footer = (props: {context: any}) => {
  const {styles, theme} = createStyle(props.context);
  return (
    <View style={styles.container}>
      <SpinKit type="Circle" color={theme.theme.color.primary} />
    </View>
  );
};

export default Footer;
