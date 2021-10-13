import React from 'react';
import {View} from 'react-native-ui-lib';
import createStyle from '../stylesheets/input.container';
import {Input} from 'native-base';

export default function RenderEcommerceItem(
  props: component.InputComponentProps,
) {
  const {styles} = createStyle(props.context);
  return (
    <View style={styles.infoBox}>
      <Input
        isDisabled={props.disabled}
        secureTextEntry={props.secureText}
        variant="unstyled"
        keyboardType={props.keyboardType}
        value={props.value}
        placeholder={props.label}
        onChangeText={text => props.onChangeText(text)}
      />
    </View>
  );
}
