import { AxiosError, AxiosResponse, isAxiosError } from 'axios'; // Import AxiosResponse
import Api from '../../services/apis/api';
import { ApiResponseAuth, LoginType, SignupType } from '../../utils/types/user';
import toast from 'react-hot-toast'

export const signupService = async (userData: SignupType) => {
    try {
        console.log(userData)
        const response: AxiosResponse<ApiResponseAuth> = await Api.post('/authentication/signup', userData);
        if (response.status === 201) {
            return response.data; // Assuming the server responds with user data
        }
        throw new Error(`Failed to sign up - ${response.status}`);
    } catch (error) {
        if (isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error('Axios error:', axiosError.response?.status);
            if (axiosError.response?.status == 409) {
                toast.error('user already exists');
            }
            else {
                toast.error(error.message);
            }
        } else {
            const generalError = error as Error;

            console.error('General error:', generalError.message);
        }
        throw error;
    }
};

export const loginService = async (userData: LoginType) => {
    try {
        console.log(userData)
        const response: AxiosResponse<ApiResponseAuth> = await Api.post('/authentication/login', userData);
        if (response.status === 200) {
            return response.data; // Assuming the server responds with user data
        }
        throw new Error(`Failed to sign up - ${response.status}`);
    } catch (error) {
        if (isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error('Axios error:', axiosError.response?.status);
            if (axiosError.response?.status == 409) {
                toast.error('user already exists');
            }
            else {
                toast.error(error.message);
            }
        } else {
            const generalError = error as Error;

            console.error('General error:', generalError.message);
        }
        throw error;
    }
};

export const verifyloginService = async (token: string) => {
    try {
        const response: AxiosResponse<ApiResponseAuth> = await Api.get(`/authentication/verify/${token}`);
        if (response.status === 200) {
            return response.data; // Assuming the server responds with user data
        }
        throw new Error(`Failed to sign up - ${response.status}`);
    } catch (error) {
        if (isAxiosError(error)) {
            const axiosError = error as AxiosError;
            console.error('Axios error:', axiosError.response?.status);
            if (axiosError.response?.status == 409) {
                toast.error('user already exists');
            }
            else {
                toast.error(error.message);
            }
        } else {
            const generalError = error as Error;

            console.error('General error:', generalError.message);
        }
        throw error;
    }
};