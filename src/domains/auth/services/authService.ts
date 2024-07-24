import apiClient from '../../../shared/utils/apiClient';

export const authService = async (method: string, endpoint: string, data?: any) => {
    try {
        console.log('Sending ${method} request to ${endpoint} with data:', data);

        return await apiClient(endpoint, method, data);
    } catch (error: any) {
        throw createErrorFromApiClientError(error);
    }
}

const createErrorFromApiClientError = (error: any) => {
    if (error.status && error.message) {
        return {
            status: error.status,
            message: error.message
        };
    }

    return {
        status: 500,
        message: 'An unknown error occurred'
    };
};