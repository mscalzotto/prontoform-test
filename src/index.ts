import express from 'express';
import api from './api';

const app = express();

const basePath = '/prontoform-test';
const port: string | number = process.env.PORT || 5000;

app.use(express.json());
app.use('*', (_req, res) => {
  res.send('<h1>Welcome to your server!</h1>');
});

app.use(`${basePath}/api`, api);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
