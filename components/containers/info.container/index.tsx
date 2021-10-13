import React from 'react';
import {Text, View} from 'react-native-ui-lib';
import createStyle from '../stylesheets/info.container';

export default function RenderEcommerceItem(
  props: component.InfoComponentProps,
) {
  const {styles} = createStyle(props.context);
  return (
    <View style={styles.infoBox}>
      <View style={styles.infoLabelContainer}>
        <Text style={styles.labelText}>{props.label}</Text>
      </View>
      <View style={styles.infoTextContainer}>
        <Text style={styles.infoText}>{props.value}</Text>
      </View>
    </View>
  );
}
