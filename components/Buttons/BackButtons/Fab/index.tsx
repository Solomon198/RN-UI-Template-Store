import React from 'react';
import {Fab, Icon} from 'native-base';
import {View} from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useThemeAwareObject} from '../../../../app.configurations/theme/custome.theme.hook';
import createStyle from '../stylesheets/fab';

type Props = {
  placement?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  onPress?: () => void;
};
const FaBCartComponent = (props: Props) => {
  const {styles} = useThemeAwareObject(createStyle);
  return (
    <Fab
      style={styles.fab}
      onPress={props.onPress}
      placement={props.placement || 'top-left'}
      icon={
        <View>
          <Icon style={styles.fabIcon} as={Ionicons} name="arrow-back" />
        </View>
      }
    />
  );
};

export default FaBCartComponent;
