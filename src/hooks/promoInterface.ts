export interface Promo {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
    promo_code: string;
    promo_discount_price: number;
    minimum_claim_price: number;
    createdAt: string;
    updatedAt: string;
}