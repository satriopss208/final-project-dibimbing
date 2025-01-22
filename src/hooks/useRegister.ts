import { useState } from 'react';
import axios from 'axios';
import { Register } from '@/hooks/registerInterface';
import { handleRegister } from '@/services/register';


export default function useRegister() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const register = async (data: Register) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await handleRegister(data);

      if (response.status === 201) {
        setSuccess(true);
        console.log(`Registration successful: ${response.data}`);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, error, success };
}