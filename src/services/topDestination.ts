import { fetchAPI } from './api';

export const getTopDestination = async () => {
  return await fetchAPI({
    method: 'GET',
    url: '/activities',
  });
};

export const getDestinationDetail = async (id: string) => {
  return await fetchAPI({
    method: 'GET',
    url: `/activities/${id}`,
  });
};