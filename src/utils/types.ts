export interface Product {
    _id: number;
    name: string;
    brand: string;
    gender: string;
    category: string;
    price: number;
    is_in_inventory: boolean;
    items_left: number;
    discountPercent: number;
    reviews: Review[];
    description: string;
    imageURL: string;
    slug: string;
}

export interface Review {
    userId: string;
    userName: string;
    rating: number;
    comment: string;
    date: Date; // You may want to use a Date type if you're working with date objects
}