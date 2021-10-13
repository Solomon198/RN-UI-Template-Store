import API from '../../_config_/api/enpoint';

const GetOrders = async () => {
  return API.WooCommerceAPI.get('orders');
};

const api = {
  GetOrders,
};

export default api;
