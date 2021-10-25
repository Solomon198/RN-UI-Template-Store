import axios from 'axios';
import API_ENDPOINT from '../../../_config_/api/enpoint';

const login = async (payload: any) => {
  return axios.post(`${API_ENDPOINT.apiEndPoint}/login`, payload);
};

const api = {
  login,
};

export default api;
