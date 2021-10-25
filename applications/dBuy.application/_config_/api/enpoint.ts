// @ts-ignore
import WooAPI from 'react-native-woocommerce-api';
// @ts-ignore
import RNPaystack from 'react-native-paystack';

RNPaystack.init({
  publicKey: 'pk_test_7bad3f89963baf08caed993b86a42165b222d6a5',
});
const WooCommerceAPI = new WooAPI({
  url: 'https://iecbooks.com', // Your store URL
  ssl: true,
  consumerKey: 'ck_195b23a7e4e32cec78fa808981ed0ade53b3fe50', // Your consumer secret
  consumerSecret: 'cs_8c64820efa8e682b90c1b8e294d40117903581f0', // Your consumer secret
  wpAPI: true, // Enable the WP REST API integration
  version: 'wc/v2', // WooCommerce WP REST API version
  queryStringAuth: true,
});
const apiEndPoint = 'https://iec-books-api.herokuapp.com';
export default {
  apiEndPoint,
  WooCommerceAPI,
};
