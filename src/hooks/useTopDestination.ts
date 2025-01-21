import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Destination } from './destinationInterface';
import { getDestinationDetail, getTopDestination } from '@/services/topDestination';

const useTopDestination = () => {
  const [ data,setData ] = useState<Destination[]>([]);
  const [ isLoading,setIsLoading ] = useState(false);
  const [destination, setDestination] = useState<Destination>({
    id: '',
    categoryId: '',
    category: {
        id: '',
        imageUrl: '',
        createdAt: '',
        updatedAt: '',
    },
    title: '',
    description: '',
    imageUrls: [], 
    price: null,
    price_discount: null,
    rating: null,
    total_reviews: null,
    facilities: '',
    address: '',
    province: '',
    city: '',
    location_maps: '',
    createdAt: '', 
    updatedAt: '', 
});

    const router = useRouter();

    const getData = async () => {
        setIsLoading(true);
        const response = await getTopDestination();
        setData(response.data.data);
        setIsLoading(false);
      };
    
      const getDetail = async () => {
        setIsLoading(true);
        const response = await getDestinationDetail(router.query.id as string);
        setDestination(response.data.data);
        setIsLoading(false);
      };

      const handleRedirect = (url: string) => {
        router.push(url);
      };
    
      useEffect(() => {
        getData();
      }, []);
    
      useEffect(() => {
        if (router.query.id) getDetail();
      }, [router.query.id]);

  return {
      data,
      isLoading,
      handleRedirect,
      getDetail,
      destination,
    };
}

export default useTopDestination;