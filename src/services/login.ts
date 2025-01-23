import { fetchAPI } from './api';
import { Login } from '@/hooks/loginInterface';

export const handleLogin = async (data:Login) => {
  return await fetchAPI({
    method: 'POST',
    url: `/login`,
    data: data,
  });
};
