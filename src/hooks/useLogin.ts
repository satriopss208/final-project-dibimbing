'use client'
import { useState } from 'react';
import { Login } from './loginInterface';
import axios from 'axios';
import { handleLogin } from '@/services/login';
import { setCookie } from 'cookies-next';



export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [success, setSuccess] = useState('');

  const login = async (data: Login) => {
    setIsLoading(true);
    setError('');
    setSuccess('');
    try {
      const response = await handleLogin(data);
      console.log(response);
      if (response.status === 200) {
        setSuccess(response.data.message);
        alert(`${response.data.message}`);
        console.log(success);
        setCookie('token', response.data.token);
        setIsLoggedIn(true);

      } else if (response.status === 404) {
        setError('Endpoint not found. Please check the URL.');
      } else { 
        setError(response.data.message);
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 404) {
        setError('Endpoint not found. Please check the URL.');
      } else {
        setError('An error occurred. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading, error, isLoggedIn, success };
};