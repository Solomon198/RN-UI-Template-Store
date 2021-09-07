import React from 'react';
import {Button, Text} from 'native-base';
import {View} from 'react-native-ui-lib';
import {useThemeAwareObject} from '../../../../app.configurations/theme/custome.theme.hook';
import createStyle from '../stylesheets/RowCheckoutButton';
import {formatAmountWithComma} from '../../../../applications/utilities/helper.functions';

type Props = {
  price?: number;
};
const CheckoutComponent = (props: Props) => {
  const {styles} = useThemeAwareObject(createStyle);
  return (
    <View style={styles.container}>
      <View style={styles.containerItem}>
        <Button style={styles.priceButton} variant="solid">
          <Text style={styles.priceButtonText}>
            ₦ {props.price ? formatAmountWithComma(props.price) : 0}
          </Text>
        </Button>
      </View>
      <View style={styles.containerItem}>
        <Button style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}> Checkout</Text>
        </Button>
      </View>
    </View>
  );
};

export default CheckoutComponent;
