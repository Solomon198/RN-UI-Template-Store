import React from 'react';
import {Card, Text, View} from 'react-native-ui-lib';
import {useThemeAwareObject} from '../../../app.configurations/theme/custome.theme.hook';
import {formatAmountWithComma} from '../../../applications/utilities/helper.functions';
import createStyle from '../stylesheets/cart.item';

export default function RenderEcommerceItem(props: component.ListItemProps) {
  const entitity = props.item as ReduxStore.BookInCart;
  const {styles} = useThemeAwareObject(createStyle);

  return (
    <Card
      row
      height={100}
      onPress={() => (props.onPress ? props.onPress(entitity) : null)}
      onLongPress={() =>
        props.onLongPress ? props.onLongPress(entitity) : null
      }
      style={styles.card}>
      <Card.Section
        imageSource={{uri: entitity.coverPhoto}}
        imageStyle={styles.cardImage}
      />
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
            text: `₦ ${formatAmountWithComma(entitity.price)}`,
            style: styles.price,
          },
        ]}
      />
      <Card style={styles.quantityContainer}>
        <View style={styles.quantityTextContainer}>
          <Text style={styles.quantityText}>{entitity.count}</Text>
        </View>
      </Card>
    </Card>
  );
}
