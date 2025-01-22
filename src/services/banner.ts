import { fetchAPI } from './api';

export const getBanner = async () => {
  return await fetchAPI({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_BASE_API_URL+`/banners`,
  });
};
