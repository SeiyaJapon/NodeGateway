import { Request, Response } from 'express';
import { authService } from '../services/authService';
import { authEndpoints } from "../modules/authEndpoints";

type AuthAction = 'login' | 'register';

export const createToken = async (req: Request, res: Response) => {
    try {
        res.json(await handleRequest(req, res, 'login'));
    } catch (error: any) {
        handleErrors(error, res);
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        res.json(await handleRequest(req, res, 'register'));
    } catch (error: any) {
        handleErrors(error, res);
    }
}

const handleRequest = async (req: Request, res: Response, action: AuthAction) => {
    console.log('Request body: ', req.body);
    const { method, url } = authEndpoints[action];
    return await authService(method, url, req.body);
}

const handleErrors = (error: any, res: Response) => {
    if (error instanceof Object && 'status' in error && 'message' in error) {
        console.log('Error in controller:', (error as any).message);
        res.status((error as any).status).json({ error: (error as any).message });
    } else {
        console.log('Error in controller:', error);
        res.status(500).json({ error: 'An unknown error occurred' });
    }
}