import next from 'next';
import express from 'express';
import url from 'url';

import { redirectUri, port, dev } from './config';
import * as config from './config';
import login from './login';
import callback from './callback';
import getUserProfile from './routes/userProfile';

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();
  console.log('Loaded configuration', config);

  const redirectUriPath = url.parse(redirectUri).pathname;

  server.get('/login', login);
  server.get(redirectUriPath, callback);
  server.get('/user-profile', getUserProfile);

  server.get('*', (req, res) => handle(req, res));
  server.listen(port, () => console.info(`Server listening on port ${port}`));
});
