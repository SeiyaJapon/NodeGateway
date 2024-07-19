import { Request, Response, NextFunction } from 'express';

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.error('Error Handler:', err.stack || err.message);

    const status = err.status || 500;
    const message = err.message || 'An unexpected error occurred';

    res.status(status).send({ error: message });
}

export default errorHandler;