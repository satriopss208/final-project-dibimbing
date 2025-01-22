'use client'
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Promo } from './promoInterface';
import { getPromoDetail, getPromo } from '@/services/promo';

const usePromo = () => {
  const [data, setData] = useState<Promo[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [promo, setPromo] = useState<Promo>({
    id: '',
    title: '',
    description: '',
    imageUrl: '',
    promo_code: '',
    promo_discount_price: 0,
    minimum_claim_price: 0,
    createdAt: '',
    updatedAt: '',
  });

  const router = useRouter();
  const pathname = usePathname();

  const getData = async () => {
    setIsLoading(true);
    try {
      const response = await getPromo();
      const sortedData = response.data.data.sort(
        (a: Promo, b: Promo) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setData(sortedData);
    } catch (error) {
      console.error('Error fetching get promo:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getDetail = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await getPromoDetail(id);
      setPromo(response.data.data);
    } catch (error) {
      console.error('Error fetching promo details:', error);
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

  useEffect(() => {
    if (pathname) {
      const pathSegments = pathname.split('/');
      const destinationId = pathSegments[pathSegments.length - 1];

      if (destinationId) {
        getDetail(destinationId);
      }
    }
  }, [pathname]);

  return {
    data,
    isLoading,
    handleRedirect,
    getData,
    getDetail,
    promo,
  };
};

export default usePromo;
