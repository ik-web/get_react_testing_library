import axios from 'axios';

import { Follower, Loader } from 'components';

const baseUrl = 'https://randomuser.me/api/';

export const fetchFollowers = async (setFollowers) => {
  const { data } = await axios.get(baseUrl + '?results=5');

  setFollowers(data.results);
};
