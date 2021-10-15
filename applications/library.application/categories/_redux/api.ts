import API from '../../_config_/api/enpoint';

const GetBookByCategorie = async (queryParams: any) => {
  return API.WooCommerceAPI.get('products', queryParams);
};

const api = {
  GetBookByCategorie,
};

export default api;
