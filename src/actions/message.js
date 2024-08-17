import axios from 'axios';
import Config from '../config';

const message = (data) => {
  return axios({
    method: 'post',
    url: `${Config.url2 || ''}/api/message`,
    data,
  });
};

export default message;
