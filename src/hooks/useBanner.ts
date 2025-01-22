'use client'
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Banner } from './bannerInterface';
import { getBanner } from '@/services/banner';

const useBanner = () => {
  const [data, setData] = useState<Banner[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getBanner();
      const sortedData = response.data.data.sort(
        (a: Banner, b: Banner) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setData(sortedData);
    } catch (error) {
      console.error('Error fetching get promo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleRedirect = (url: string) => {
    router.push(url);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
    handleRedirect,
  };
};

export default useBanner;
