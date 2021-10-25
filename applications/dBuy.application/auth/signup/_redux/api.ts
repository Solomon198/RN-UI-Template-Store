import axios from 'axios';
import API_ENDPOINT from '../../../_config_/api/enpoint';

const signup = async (payload: any) => {
  return axios.post(`${API_ENDPOINT.apiEndPoint}/signUp`, payload);
};

const api = {
  signup,
};

export default api;
