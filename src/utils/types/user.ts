export interface User {
    _id: string;
    name: string;
    email: string;
    phone_number: string;
    verified: boolean; // Assuming "verified" should be a boolean
    addresses: AddressType[];
    orders: OrderType[];
    wishlists: WishlistItem[];
    __v: number;
}

export interface AddressType {
    street: string;
    city: string;
    state: string;
    zipCode: string;
}

export interface ProductQuantity {
    product: string; // Assuming this should be the product ID
    quantity: number;
}

export interface OrderType {
    orderId: string;
    products: ProductQuantity[];
    orderDate: Date;
    status: 'processing' | 'shipped' | 'delivered' | 'canceled';
}

export interface WishlistItem {
    product: string; // Assuming this should be the product ID
    addedAt: Date;
}

export interface ApiResponseAuth {
    user: User;
    token: string;
}


export type SignupType = {
    name: string;
    email: string;
    phone_number: string;
    password: string;
    confirmPassword?: string;
}
export type LoginType = {
    email: string;  
    password: string;
}
