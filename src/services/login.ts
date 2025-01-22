import { fetchAPI } from './api';
import { Login } from '@/hooks/loginInterface';

export const handleLogin = async (data:Login) => {
  return await fetchAPI({
    method: 'POST',
    url: process.env.NEXT_PUBLIC_BASE_API_URL+`/login`,
    data: data,
  });
};
