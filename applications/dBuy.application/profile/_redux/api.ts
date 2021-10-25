import API from '../../_config_/api/enpoint';

const UpdateProfile = async (payload: any) => {
  return API.WooCommerceAPI.put(`customers/${payload.id}`, payload.data);
};

const api = {
  UpdateProfile,
};

export default api;
