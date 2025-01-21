export interface Destination {
    id: string;
    categoryId: string;
    category: {
        id: string;
        imageUrl: string;
        createdAt: string;
        updatedAt: string;
    }
    title: string;
    description: string;
    imageUrls: Array<string>;
    price: number;
    price_discount: number;
    rating: number;
    total_reviews: number;
    facilities: string;
    address: string;
    province: string;
    city: string;
    location_maps: string;
    createdAt: string;
    updatedAt: string;
}