import API from '../../_config_/api/enpoint';

const SearchBook = async (queryParams: any) => {
  return API.WooCommerceAPI.get('products', queryParams);
};

const api = {
  SearchBook,
};

export default api;
