// src/services/api.ts
import { AxiosError, AxiosResponse, isAxiosError } from 'axios'; // Import AxiosResponse
import Api from '../../services/apis/api';
import { Product } from '../../utils/types';


export const fetchProductDetails = async (productId: string) => {
    try {
        const response: AxiosResponse<Product> = await Api.get(`/productDetails/${productId}`);
        if (response.status === 200) {
            return response.data;
        }
        throw new Error(`Failed to fetch product details - ${response.status}`);
    } catch (error) {
        if (isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error('Axios error:', axiosError.message);
        } else {
            const generalError = error as Error;
            console.error('General error:', generalError.message);
        }
        throw error;
    }
};





