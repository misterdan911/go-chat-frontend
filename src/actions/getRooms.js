import axios from 'axios';
import Config from '../config';

const getRooms = () => {
  return axios({
    method: 'post',
    url: `${Config.url2 || ''}/api/rooms/list`,
    data: { limit: 30 },
  });
};

export default getRooms;
