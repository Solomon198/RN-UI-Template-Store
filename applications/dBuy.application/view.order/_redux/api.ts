import API from '../../_config_/api/enpoint';

const GetOrders = async (queryParams: any) => {
  return API.WooCommerceAPI.get('orders', queryParams);
};

const api = {
  GetOrders,
};

export default api;
