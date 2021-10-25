import React from 'react';
import {View, Text} from 'react-native-ui-lib';
import componentStyles from './stylesheet';
import {ThemeContext} from '../../../app.configurations/theme/theme.ui.context';
import {TextInput, BackHandler} from 'react-native';
import {Icon, Button} from 'native-base';
import {connect} from 'react-redux';
// @ts-ignore
import {LiteCreditCardInput} from 'react-native-credit-card-input';
import SpinKit from 'react-native-spinkit';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BackButton from '../../../components/Buttons/BackButtons/index';
import {Navigation} from 'react-native-navigation';
import {formatAmountWithComma} from '../../utilities/helper.functions';
import {Payment, InputCard} from './_redux/actions';

const mapDispatchProps = (dispatch: any) => ({
  setCardNumber: (number: string) =>
    dispatch({type: InputCard.SET_CREDIT_CARD_INPUT_CALLER, payload: number}),
  doPayment: (data: any, paymentInfo: any) =>
    dispatch({type: Payment.PAYMENT_CALLER, payload: paymentInfo, data}),
});

const mapStateProps = (store: any) => ({
  carts: store.BooksCart.carts,
  user: store.Profile.user,
  cardNumber: store.Payment.cardNumber,
  paymentStatus: store.Payment.paymentStatus,
});

type Props = {
  carts: ReduxStore.BookInCart[];
  componentId: string;
  cardNumber: string;
  paymentStatus: string;
  user: entities.User;
  setCardNumber: (number: string) => void;
  doPayment: (data: any, paymentInfo: any) => void;
};

class Checkout extends React.Component<Props> {
  state = {
    cardValid: false,
    email: '',
    error: '',
  };
  validCard: any;
  validateCard(value: any) {
    const {number, expiry, cvc} = value.status;
    this.props.setCardNumber(number);
    if (number === 'valid' && expiry === 'valid' && cvc === 'valid') {
      this.validCard = {
        number: value.values.number,
        cvc: value.values.cvc,
        expiry: value.values.expiry,
      };
      this.setState({cardValid: true});
    } else {
      this.setState({cardValid: false});
    }
  }

  componentDidMount() {
    this.setState({email: this.props.user.email});
    BackHandler.addEventListener('hardwareBackPress', this.handleBackAction);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackAction);
  }

  handleBackAction = () => {
    if (this.props.paymentStatus === Payment.PAYMENT_STARTED) {
      return true;
    }
    return false;
  };

  doPayment() {
    const items: any[] = [];
    this.props.carts.forEach(cartItem => {
      items.push({
        product_id: cartItem.id,
        quantity: cartItem.count,
      });
    });
    const data = {
      payment_method: 'paystack',
      payment_method_title: '',
      set_paid: true,
      billing: {
        first_name: this.props.user.firstName,
        last_name: this.props.user.lastName,
        address_1: this.props.user.address,
        address_2: '',
        city: this.props.user.city,
        state: this.props.user.state,
        postcode: '94103',
        country: 'Nigeria',
        email: this.props.user.email,
        phone: this.props.user.phoneNumber,
      },
      shipping: {
        first_name: this.props.user.firstName,
        last_name: this.props.user.lastName,
        address_1: this.props.user.address,
        address_2: '',
        city: this.props.user.city,
        state: this.props.user.state,
        postcode: '94103',
        country: 'Nigeria',
      },
      line_items: items,
      shipping_lines: [
        {
          method_id: 'flat_rate',
          method_title: 'Flat Rate',
          total: '0.00',
        },
      ],
    };
    const cardInfo = this.validCard;
    cardInfo.amount = parseFloat(this.getTotalSum() + '');
    cardInfo.email = this.state.email;
    this.props.doPayment(data, cardInfo);
  }

  getTotalSum() {
    let total: number = 0;
    this.props.carts.forEach(item => {
      total += parseInt(item.price) * item.count; // eslint-disable-line
    });
    return total;
  }

  render() {
    const paymentOnProgress =
      this.props.paymentStatus === Payment.PAYMENT_STARTED;
    const {styles} = componentStyles(this.context);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.cartHeader}>
          <View style={styles.headerLeft}>
            <BackButton.NormalButton
              context={this.context}
              onPress={() => Navigation.pop(this.props.componentId)}
            />
          </View>
          <View style={styles.headerBody}>
            <Text style={styles.cartText}>Checkout</Text>
          </View>
          <View style={styles.headerLeft} />
        </View>
        <View style={styles.mainContainerSub}>
          <Text style={styles.pageTitle}>Credit Card</Text>
          {this.state.error ? (
            <Text note style={styles.errorCardText}>
              {this.state.error}
            </Text>
          ) : null}
          <LiteCreditCardInput
            autoFocus
            onChange={(values: any) => this.validateCard(values)}
            placeholders={{
              number: 'Card NUMBER',
              expiry: 'MM/YY',
              cvc: 'CVC',
              email: 'email',
            }}
            inputStyle={styles.cardInput}
          />
          <View>
            <TextInput
              value={this.state.email}
              style={styles.input}
              placeholder="Email Address"
              onChangeText={text => {
                this.setState({email: text});
              }}
            />
          </View>
        </View>
        <View style={styles.flexContainer} />
        <View style={styles.noteChargesContainer}>
          <Text style={styles.noteChargesText}>
            Please enter your card information to order for book.
            <Text style={styles.note}>
              {' '}
              Note your account will be charged ₦
              {formatAmountWithComma(this.getTotalSum())},
            </Text>
            <Text>
              {' '}
              which is the amount for the books selected in the cart.
            </Text>
          </Text>
        </View>

        <Text />
        <Button
          onPress={() => this.doPayment()}
          disabled={!this.state.cardValid || paymentOnProgress}
          endIcon={
            paymentOnProgress ? (
              <SpinKit type="Circle" color="#fff" />
            ) : (
              <Icon color={'#fff'} as={FontAwesome5} name="credit-card" />
            )
          }
          style={[styles.btnAddCard]}>
          <Text uppercase={false} style={styles.addCardText}>
            Checkout
          </Text>
        </Button>
      </View>
    );
  }
}

Checkout.contextType = ThemeContext;

export default connect(mapStateProps, mapDispatchProps)(Checkout);
