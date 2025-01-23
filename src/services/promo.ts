import { fetchAPI } from './api';

export const getPromo = async () => {
  return await fetchAPI({
    method: 'GET',
    url: `/promos`,
  });
};

export const getPromoDetail = async (id: string) => {
  return await fetchAPI({
    method: 'GET',
    url: `/promo/${id}`,
  });
};