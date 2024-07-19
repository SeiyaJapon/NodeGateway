import axios from 'axios';

export const createTokenService = async (data: any) => {
    try {
        console.log('Sending request to AUTH_SERVICE_URL/createToken with data', data);
        const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/createToken`, data);
        console.log('Received response:', response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error('Error in create token service:', error.response ? error.response.data : error.message);
            throw {
                status: error.response?.status || 500,
                message: error.response?.data.message || 'Error in create token service'
            };
        } else {
            console.error('Unknown error in login service:', error);
            throw {
                status: 500,
                message: 'An unknown error occurred in create token service'
            };
        }
    }
}

export const registerService = async (data: any) => {
    try {
        console.log('Sending request to AUTH_SERVICE_URL/register with data', data);
        const response = await axios.post(`${process.env.AUTH_SERVICE_URL}/register`, data);
        console.log('Received response:', response.data);
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            console.error('Error in register service:', error.response ? error.response.data : error.message);
            throw {
                status: error.response?.status || 500,
                message: error.response?.data.message || 'Error in register service'
            };
        } else {
            console.error('Unknown error in register service:', error);
            throw {
                status: 500,
                message: 'An unknown error occurred in register service'
            };
        }
    }
}