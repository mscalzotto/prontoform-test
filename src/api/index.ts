import express, { Request, Response } from 'express';

const api: express.Application = express();
api.use(express.json());

api.post('/inspection/create', (req: Request, res: Response) => {
  res.json({requestBody: req.body});
});

export default api;