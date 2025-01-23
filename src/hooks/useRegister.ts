'use client';
import { useState } from 'react';
import { Register } from '@/hooks/registerInterface';
import { handleRegister } from '@/services/register';


export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState('');

  const register = async (data: Register) => {
    setLoading(true);
    setError(null);
    setSuccess('');

    try {
      const response = await handleRegister(data);
      console.log(response);
      if (response.status === 200) {
        setSuccess(response.data?.message);
        console.log(`Registration successful: ${response.data}`);
      } else {
        setError(response.data?.message);
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, success };
}