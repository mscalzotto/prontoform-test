import express from 'express';
import { api } from './api';

const app = express();

const basePath = '/prontoform';
const port: string | number = process.env.PORT || 5000;

app.use(express.json());

const healthcheck = require('express-healthcheck')(); // tslint:disable-line
app.get(`${basePath}/health(check)?`, healthcheck);

app.use(`${basePath}/api`, api);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
