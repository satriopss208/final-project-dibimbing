import { fetchAPI } from './api';

export const getTopDestination = async () => {
  return await fetchAPI({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_BASE_API_URL+`/activities`,
  });
};

export const getDestinationDetail = async (id: string) => {
  return await fetchAPI({
    method: 'GET',
    url: process.env.NEXT_PUBLIC_BASE_API_URL+`/activities/${id}`,
  });
};