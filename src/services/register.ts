import { Register } from '@/hooks/registerInterface';
import { fetchAPI } from './api';

export const handleRegister = async (data:Register) => {
  return await fetchAPI({
    method: 'POST',
    url: process.env.NEXT_PUBLIC_BASE_API_URL+`/register`,
    data: data,
  });
};
