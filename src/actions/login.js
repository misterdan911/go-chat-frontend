import axios from 'axios';
import Config from '../config';

const login = (email, password) => {
  return axios({
    method: 'post',
    url: `${Config.url2 || ''}/api/login`,
    data: { email, password },
  });
};

export default login;
