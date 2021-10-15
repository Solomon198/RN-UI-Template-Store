import API from '../../_config_/api/enpoint';

const GetBooks = async (queryParams: any) => {
  return API.WooCommerceAPI.get('products', queryParams);
};

const GetBookCategories = async (queryParams: any) => {
  return API.WooCommerceAPI.get('products/categories', queryParams);
};

const api = {
  GetBooks,
  GetBookCategories,
};

export default api;
