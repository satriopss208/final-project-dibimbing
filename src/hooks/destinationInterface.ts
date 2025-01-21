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
    price: number | null;
    price_discount: number | null;
    rating: number | null;
    total_reviews: number | null;
    facilities: string;
    address: string;
    province: string;
    city: string;
    location_maps: string;
    createdAt: string;
    updatedAt: string;
}