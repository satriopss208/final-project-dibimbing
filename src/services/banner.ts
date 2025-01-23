import { fetchAPI } from './api';

export const getBanner = async () => {
  return await fetchAPI({
    method: 'GET',
    url: `/banners`,
  });
};
