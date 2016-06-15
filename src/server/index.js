import path from 'path';
import express from 'express';
import fs from 'fs';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {ButtonComponent} from '../components/Button';

const app = express();

app.get('/', (request, response) => {
  const htmlPage = fs.readFileSync(path.join(__dirname, './index.html')).toString();

  const initialData = {
    count : 4
  };

  response.send(htmlPage
                .replace('__REACT__', ReactDOMServer.renderToString(<ButtonComponent data={initialData}/>))
                .replace('__DATA__', JSON.stringify(initialData))
      );
});

app.get('/client.js', (request, response) => response.sendFile(path.join(__dirname,'../build/client.js')));

app.listen(8080);
