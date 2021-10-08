import React from 'react';
import {Card, Text, View} from 'react-native-ui-lib';
import {formatAmountWithComma} from '../../../applications/utilities/helper.functions';
import createStyle from '../stylesheets/cart.items';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icon} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default function RenderEcommerceItem(props: component.ListItemProps) {
  const entitity = props.item as ReduxStore.BookInCart;
  const {styles} = createStyle(props.context);
  return (
    <View style={styles.card}>
      <Card.Section
        imageSource={{uri: entitity.images[0]}}
        imageStyle={styles.cardImage}
        style={styles.imageContainerStyle}
      />
      <View style={styles.entityInfo}>
        <Card.Section
          content={[
            {
              text: entitity.title,
              style: styles.title,
            },
            {
              text: `₦ ${formatAmountWithComma(entitity.price)}`,
              style: styles.price,
            },
          ]}
        />
        <View style={styles.quantityContainer}>
          <View>
            <TouchableOpacity
              onPress={() => {
                if (props.adjustItemQuantity) {
                  props.adjustItemQuantity(entitity, false);
                }
              }}
              style={styles.iconLeft}>
              <Icon
                style={styles.icon}
                size={8}
                name="remove"
                as={MaterialIcons}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.connector} />
          <View style={styles.connector}>
            <TouchableOpacity>
              <Text style={styles.quantityText}>{entitity.count}</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.connector]} />
          <View>
            <TouchableOpacity
              onPress={() => {
                if (props.adjustItemQuantity) {
                  props.adjustItemQuantity(entitity, true);
                }
              }}
              style={styles.iconRight}>
              <Icon
                style={styles.icon}
                size={8}
                name="add"
                as={MaterialIcons}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
