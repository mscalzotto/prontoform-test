import express, { NextFunction, Request, Response } from 'express';
import NodeCache from 'node-cache';

const DEFAULT_TTL = 172800;

const cacheService: NodeCache = new NodeCache({
  stdTTL: DEFAULT_TTL,
  checkperiod: DEFAULT_TTL * 0.2,
  useClones: false,
});

export const api: express.Application = express();
api.use(express.json());

api.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (
    req.headers.hasOwnProperty('authorization') &&
    req.headers['authorization'] === 'Bearer 123456'
  ) {
    next();
  }
  res.statusCode = 401;
  res.send('<h1>Unauthorized!</h1>');
});

api.get('/cache/inspection', (_req: Request, res: Response) => {
  res.json(cacheService.keys());
});

api.get('/cache/inspection/:id', (req: Request, res: Response) => {
  res.json(cacheService.get(req.params.id));
});

api.post('/inspection/create', (req: Request, res: Response) => {
  cacheService.set(
    `${parseInt(`${Math.random() * 1000000}`)}`,
    req.body,
    DEFAULT_TTL
  );

  res.statusCode = 201;
  res.json({
    requestBody: req.body,
  });
});
