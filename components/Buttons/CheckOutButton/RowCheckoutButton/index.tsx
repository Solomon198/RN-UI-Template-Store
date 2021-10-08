import React from 'react';
import {Text} from 'native-base';
import {View} from 'react-native-ui-lib';
import createStyle from '../stylesheets/RowCheckoutButton';
import {formatAmountWithComma} from '../../../../applications/utilities/helper.functions';

type Props = {
  price?: number;
  context: ThemeObject;
};
const CheckoutComponent = (props: Props) => {
  const {styles} = createStyle(props.context);
  return (
    <View style={styles.container}>
      <View style={[styles.containerItem, styles.priceButton]}>
        <Text style={styles.totalPrice}>Total Amount</Text>
        <Text style={styles.priceButtonText}>
          ₦ {props.price ? formatAmountWithComma(props.price) : 0}
        </Text>
      </View>
      <View style={[styles.containerItem, styles.checkoutButton]}>
        <Text style={styles.checkoutButtonText}> Checkout</Text>
      </View>
    </View>
  );
};

export default CheckoutComponent;
