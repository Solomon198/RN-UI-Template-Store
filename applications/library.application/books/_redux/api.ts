import API from '../../_config_/api/enpoint';

const GetBooks = async () => {
  return API.WooCommerceAPI.get('products');
};

const api = {
  GetBooks,
};

export default api;
