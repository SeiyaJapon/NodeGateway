import { Request, Response, NextFunction } from 'express';
import { createTokenService, registerService } from '../services/authService';

export const createToken = async (req: Request, res: Response) => {
    try {
        console.log('Request body: ', req.body);
        const response = await createTokenService(req.body);
        res.json(response);
    } catch (error: unknown) {
        if (error instanceof Object && 'status' in error && 'message' in error) {
            console.log('Error in controller:', (error as any).message);
            res.status((error as any).status).send((error as any).message);
        } else {
            console.log('Error in controller:', error);
            res.status(500).send({ error: 'An unknown error occurred' });
        }
    }
}

export const register = async (req: Request, res: Response) => {
    try {
        console.log('Request body: ', req.body);
        const response = await registerService(req.body);
        res.json(response);
    } catch (error: unknown) {
        if (error instanceof Object && 'status' in error && 'message' in error) {
            console.log('Error in controller:', (error as any).message);
            res.status((error as any).status).send((error as any).message);
        } else {
            console.log('Error in controller:', error);
            res.status(500).send({ error: 'An unknown error occurred' });
        }
    }
}

const handleErrors = (error: unknown, res: Response) => {
    if (error instanceof Object && 'status' in error && 'message' in error) {
        res.status((error as any).status).send({ error: (error as any).message });
    } else {
        res.status(500).send({ error: 'An unknown error occurred' });
    }
}