import path from 'path';
import express from 'express';

const app = express();

app.get('/', (request, response) => response.sendFile(path.join(__dirname, './index.html')));

app.get('/client.js', (request, response) => response.sendFile(path.join(__dirname,'../build/client.js')));

app.listen(8080);
