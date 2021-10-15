import React from 'react';
import {Card, View} from 'react-native-ui-lib';
import {TouchableOpacity} from 'react-native';
import {formatAmountWithComma} from '../../../applications/utilities/helper.functions';
import createStyle from '../stylesheets/ecommerce';

export default function RenderEcommerceItem(props: component.ListItemProps) {
  const entitity = props.item as entities.Book;
  const {styles} = createStyle(props.context);

  return (
    <TouchableOpacity
      onPress={() => (props.onPress ? props.onPress(entitity) : null)}
      onLongPress={() =>
        props.onLongPress ? props.onLongPress(entitity) : null
      }
      style={styles.card}>
      <View style={styles.imageWrapper}>
        <Card.Section
          imageSource={{uri: entitity.images[0]}}
          imageStyle={styles.cardImage}
        />
      </View>
      <Card.Section
        style={styles.entityInfo}
        content={[
          {
            text: entitity.title,
            style: styles.title,
            numberOfLines: 1,
            ellipsizeMode: 'tail',
          },
          {
            text: `₦${formatAmountWithComma(entitity.price)}`,
            style: styles.price,
          },
        ]}
      />
    </TouchableOpacity>
  );
}
