import express, { NextFunction, Request, Response } from 'express';

export const api: express.Application = express();
api.use(express.json());

api.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (
    req.headers.hasOwnProperty('authorization') &&
    req.headers['authorization'] === 'Bearer 123456'
  ) {
    next();
  }

  res.status(401).send('<h1>Unauthorized!</h1>');
});

api.post('/inspection/create', (req: Request, res: Response) => {
  res.status(201).json({
    requestBody: req.body,
  });
});
