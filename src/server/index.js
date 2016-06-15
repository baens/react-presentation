import path from 'path';
import express from 'express';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ButtonComponent} from '../components/Button';
import httpRequest from 'request';

const app = express();

app.get('/', (request, response) => {
  const htmlPage = fs.readFileSync(path.join(__dirname, './index.html')).toString();

  httpRequest('http://localhost:8081/', (error, httpResponse, body) => {
    const httpData = JSON.parse(body);

    const initialData = {
      count : httpData.number
    };

    response.send(htmlPage
        .replace('__REACT__', ReactDOMServer.renderToString(<ButtonComponent data={initialData}/>))
        .replace('__DATA__', JSON.stringify(initialData))
    );
  });
});

app.get('/client.js', (request, response) => response.sendFile(path.join(__dirname,'../build/client.js')));

app.listen(8080);
