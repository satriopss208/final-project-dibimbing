'use client'
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
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
    price: 0,
    price_discount: 0,
    rating: 0,
    total_reviews: 0,
    facilities: '',
    address: '',
    province: '',
    city: '',
    location_maps: '',
    createdAt: '', 
    updatedAt: '', 
});

    const router = useRouter();
    const pathname = usePathname();

    const getData = async () => {
        setIsLoading(true);
        try {
          const response = await getTopDestination();
          setData(response.data.data);
        } catch (error) {
          console.error('Error fetching top destinations:', error);
        } finally {
          setIsLoading(false);
        }
      };
    
      const getDetail = async (id: string) => {
        setIsLoading(true);
        try {
          const response = await getDestinationDetail(id);
          setDestination(response.data.data);
        } catch (error) {
          console.error('Error fetching destination details:', error);
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
      getDetail,
      destination,
    };
}

export default useTopDestination;