import React from 'react';
import {Fab, Icon} from 'native-base';
import {View} from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import createStyle from '../stylesheets/fab';

type Props = {
  placement?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  onPress?: () => void;
  context: ThemeObject;
};
const FaBCartComponent = (props: Props) => {
  const {styles} = createStyle(props.context);
  return (
    <Fab
      style={styles.fab}
      onPress={props.onPress}
      placement={props.placement || 'top-left'}
      icon={
        <View>
          <Icon as={Ionicons} name="arrow-back" />
        </View>
      }
    />
  );
};

export default FaBCartComponent;
