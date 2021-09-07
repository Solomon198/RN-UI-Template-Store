import React from 'react';
import {Fab, Icon} from 'native-base';
import {View, Text} from 'react-native-ui-lib';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useThemeAwareObject} from '../../../../app.configurations/theme/custome.theme.hook';
import createStyle from '../stylesheets/fab';

type Props = {
  placement?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  onPress?: () => void;
  count?: number;
};
const FaBCartComponent = (props: Props) => {
  const {styles} = useThemeAwareObject(createStyle);
  return (
    <Fab
      style={styles.fab}
      onPress={props.onPress}
      placement={props.placement || 'bottom-right'}
      icon={
        <View>
          <Icon style={styles.fabIcon} as={Ionicons} name="ios-cart-outline" />
          <View style={styles.fabBadge}>
            <Text style={styles.badgeText}>{props.count || 0}</Text>
          </View>
        </View>
      }
    />
  );
};

export default FaBCartComponent;
