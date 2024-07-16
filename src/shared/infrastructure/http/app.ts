/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from 'express';
import routes from './routes';
import AppError from '@/shared/middleware/application-error';
import DomainError from '@/shared/middleware/domain-error';
import { NotFoundError } from '@/shared/application/errors/not-found-error';

const app = express();

app.use(express.json());

app.use(routes);

app.use((req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError(`Cannot find ${req.originalUrl} on this server`));
});

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError || error instanceof DomainError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.log(error);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
      err: error,
    });
  },
);

export { app };
