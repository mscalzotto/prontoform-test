import express from 'express';
import http from 'http';
import api from './api';

const app = express();

const basePath = '/prontoform-test';

app.use(express.json());
app.use(`${basePath}/api`, api);

const server = http.createServer(app);

server.listen(3000, () => {
  console.log("Listening on port 3000")
});