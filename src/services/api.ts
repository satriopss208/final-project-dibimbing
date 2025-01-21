import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const fetchAPI = async (
    options: AxiosRequestConfig
  ): Promise<AxiosResponse> => {
    try {
      const response = await axios({
        baseURL: process.env.BASE_API_URL,
        headers: {
          'Content-Type': 'application/json',
          apiKey: process.env.API_KEY ?? '',
        },
        ...options,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };