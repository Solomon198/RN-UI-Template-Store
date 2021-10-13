// @ts-ignore
import RNPaystack from 'react-native-paystack';
import API from '../../_config_/api/enpoint';

const CreateOrder = async (payload: any) => {
  return API.WooCommerceAPI.post('orders', payload);
};

const Pay = async (payload: any) => {
  const {cvc, email, number, expiry, amount} = payload;
  const [month, year] = expiry.split('/');
  return RNPaystack.chargeCard({
    cardNumber: number.split(' ').join(''),
    expiryMonth: month,
    expiryYear: year,
    cvc: cvc,
    email: email,
    amountInKobo: amount * 100,
  });
};

const api = {
  Pay,
  CreateOrder,
};

export default api;
