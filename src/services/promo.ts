import { fetchAPI } from './api';

export const getPromo = async () => {
  return await fetchAPI({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_BASE_API_URL+`/promos`,
  });
};

export const getPromoDetail = async (id: string) => {
  return await fetchAPI({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_BASE_API_URL+`/promo/${id}`,
  });
};