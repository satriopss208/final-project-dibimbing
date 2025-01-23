import { Register } from '@/hooks/registerInterface';
import { fetchAPI } from './api';

export const handleRegister = async (data:Register) => {
  return await fetchAPI({
    method: 'POST',
    url: `/register`,
    data: data,
  });
};
