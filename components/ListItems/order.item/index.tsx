import React from 'react';
import {Card, View} from 'react-native-ui-lib';
import {formatAmountWithComma} from '../../../applications/utilities/helper.functions';
import createStyle from '../stylesheets/order.item';
import {TouchableOpacity} from 'react-native';
import moment from 'moment';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {Icon} from 'native-base';
import Fearther from 'react-native-vector-icons/Feather';

export default function RenderEcommerceItem(props: component.ListItemProps) {
  const entitity = props.item as entities.Order;
  const {styles, theme} = createStyle(props.context);
  return (
    <TouchableOpacity
      onPress={() => {
        if (props.onPress) {
          props.onPress(entitity);
        }
      }}
      disabled={!props.onPress}
      style={styles.card}>
      <View style={styles.iconLeft}>
        <Icon
          color={theme.theme.color.primary}
          as={FontAwesome5}
          name="clipboard-list"
        />
      </View>
      <View style={styles.entityInfo}>
        <Card.Section
          content={[
            {
              text: `Order placed ${moment(entitity.date_created).fromNow()}`,
              style: styles.title,
            },
            {
              text: `₦${formatAmountWithComma(entitity.total)}`,
              style: styles.price,
            },
          ]}
        />
      </View>
      <View style={styles.iconLeft}>
        <Icon color="gray" as={Fearther} name="chevron-down" />
      </View>
    </TouchableOpacity>
  );
}
