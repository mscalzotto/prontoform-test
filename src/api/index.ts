import express, { Request, Response } from 'express';

export const api: express.Application = express();
api.use(express.json());

api.post('/inspection/create', (req: Request, res: Response) => {
  res.json({
    requestBody: req.body,
    headers: req.headers,
  });
});
